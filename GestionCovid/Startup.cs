﻿using AutoMapper;
using GestionCovid.Configuration;
using GestionCovid.Constants;
using GestionCovid.Context;
using GestionCovid.Infrastructure;
using GestionCovid.Repositories;
using GestionCovid.Repositories.Implementation;
using GestionCovid.Services;
using GestionCovid.Services.BusinessLogic;
using GestionCovid.Services.Implementation;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using NLog.Extensions.Logging;
using Quartz;
using Quartz.Impl;
using Quartz.Spi;
using Swashbuckle.AspNetCore.Swagger;
using Swashbuckle.AspNetCore.SwaggerUI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;


namespace GestionCovid
{
    public class Startup
    {
        private readonly IConfiguration _configuration;
        private readonly ILogger _logger;

        public Startup(IConfiguration configuration, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            _configuration = configuration;
            _logger = loggerFactory.CreateLogger<Startup>();

            var builder = new ConfigurationBuilder()
                         .AddJsonFile("appsettings.json", false, true)
                         .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAllOrigins",
                    builder => builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());
                        //.AllowCredentials());
            });

            services.AddSpaStaticFiles(c =>
            {
                c.RootPath = "ClientApp/dist";
            });

            services.AddAutoMapper(cfg => cfg.AddMaps(new Assembly[]
             {typeof(AutoMapperProfile).Assembly }));


            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddDbContext<DB_GestionCovidContext>(options => options.UseSqlServer(_configuration.GetSection("ConnectionStrings").Value, b => b.MigrationsAssembly("GestionCovid")));

            services.AddTransient<IInternalUserRepository, InternalUserRepository>();
            services.AddTransient<IInternalUserService, InternalUserService>();

            services.AddTransient<IPacienteRepository, PacienteRepository>();
            services.AddTransient<IPacienteService, PacienteService>();

            services.AddTransient<TokenHelper, TokenHelper>();
            services.AddTransient<EmailSender>();


            services.AddTransient<IUnitOfWork, UnitOfWork>();

            var configuration = _configuration.GetSection(ConfigurationSections.ApiInformation).Get<ApiInformation>();
            var security = _configuration.GetSection(ConfigurationSections.SecurityConfiguration).Get<SecurityConfiguration>();
            var tokenConfiguration = _configuration.GetSection(ConfigurationSections.TokenConfiguration).Get<TokenConfiguration>();


            services
              .AddSwaggerGen(c =>
              {
                  var securityRequirement = new Dictionary<string, IEnumerable<string>>
                  {
                        {"Bearer", new string[] { }},
                  };

                  c.AddSecurityDefinition("Bearer", new ApiKeyScheme
                  {
                      Description = "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
                      Name = "Authorization",
                      In = "header",
                      Type = "apiKey"
                  });

                  c.AddSecurityRequirement(securityRequirement);

                  c.SwaggerDoc(configuration.ApiVersion, new Info
                  {
                      Title = configuration.Title,
                      Version = configuration.ApiVersion,
                      Description = configuration.Description,
                      TermsOfService = configuration.TermOfUse,
                      Contact = new Contact
                      {
                          Name = configuration.ContactName,
                          Email = configuration.ContactEmail,
                          Url = configuration.ContactWebsite
                      },
                      License = new License
                      {
                          Name = configuration.LicenseName,
                          Url = configuration.LicenseWebsite
                      }
                  }
                  );
                  c.DescribeAllEnumsAsStrings();
              });

              services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                  .AddJwtBearer(options =>
                      {
                           options.TokenValidationParameters = new TokenValidationParameters
                           {
                               ValidateIssuer = true,
                               ValidateAudience = true,
                               ValidateLifetime = false,
                               ValidateIssuerSigningKey = true,


                              ValidIssuer = tokenConfiguration.ApiURL,
                              ValidAudience = tokenConfiguration.WebAppRootURL,
                              IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenConfiguration.IssuerSigningKey))
                     };

             });

            services.AddSingleton<AppToken, AppToken>();
        }

        private void ConfigureQuartz(IServiceCollection services, params Type[] jobs)
        {
            services.Add(jobs.Select(jobType => new ServiceDescriptor(jobType, jobType, ServiceLifetime.Singleton)));

            services.AddSingleton(provider =>
            {
                var schedulerFactory = new StdSchedulerFactory();
                var scheduler = schedulerFactory.GetScheduler().Result;
                scheduler.JobFactory = provider.GetService<IJobFactory>();
                scheduler.Start();
                return scheduler;
            });
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, IApplicationLifetime lifetime)
        {
            loggerFactory.AddNLog();

            if (env.IsDevelopment())
                app.UseDeveloperExceptionPage();
            else
                app.UseHsts();

            app.UseAuthentication();
            app.UseMiddleware<ExceptionHandlingMiddleware>();

            var configuration = _configuration.GetSection(ConfigurationSections.ApiInformation).Get<ApiInformation>();

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint($"/swagger/{configuration.ApiVersion}/swagger.json", configuration.Title);
                c.DocumentTitle = configuration.Title;
                c.DocExpansion(DocExpansion.List);
            });

            app.UseCors("AllowAllOrigins");

            app.UseHttpsRedirection();

            if (!env.IsDevelopment())
            {
                app.UseStaticFiles();
                app.UseSpaStaticFiles();
            }

            app.UseMvc(routes =>
            {
                routes.MapRoute(name: "default", template: "{controller}/{action=index}/{id}");
            });

            if (!env.IsDevelopment())
            {
                app.UseSpa(spa =>
                {
                    spa.Options.SourcePath = "ClientApp";
                    if (env.IsDevelopment())
                    {
                        spa.UseAngularCliServer(npmScript: "start");
                    }
                });
            }
        }
    }
}