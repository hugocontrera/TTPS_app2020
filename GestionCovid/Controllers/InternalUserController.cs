using GestionCovid.Constants;
using GestionCovid.DTOs;
using GestionCovid.DTOs.Request;
using GestionCovid.Infrastructure;
using GestionCovid.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GestionCovid.Controllers
{
    [EnableCors("AllowAllOrigins")]
    [Route("api/[controller]")]
    [ApiController]
    public class InternalUserController : Controller
    {
        private readonly IInternalUserService _internalUserService;
        private TokenHelper _tokenHelper;
        private readonly ILogger<InternalUserController> _logger;

        public InternalUserController(IInternalUserService internalUserService, TokenHelper tokenHelper, ILogger<InternalUserController> logger)
        {
            _internalUserService = internalUserService;
            _tokenHelper = tokenHelper;
            _logger = logger;
        }

        [HttpPost, Route("login")]
        public IActionResult Login([FromBody]InternalUserLoginRequest internalUserLoginRequest)
        {
            try
            {
                var tokenString = _internalUserService.Login(internalUserLoginRequest);

                return Ok(new
                {
                    Token = tokenString
                });
            }
            catch (Exception ex)
            {
                return Unauthorized(ex.Message);
            }
        }

        [Authorize]
        [HttpGet()]
        public async Task<IActionResult> GetAll()
        {
            _logger.LogInformation("");

            IEnumerable<InternalUserDto> internalUsers = _internalUserService.GetAll();

            _logger.LogInformation("");

            return Ok(internalUsers);
        }

        [Authorize]
        [HttpGet("{key}")]
        public async Task<IActionResult> Get(String key)
        {
            _logger.LogInformation("");

            InternalUserDto internalUser = _internalUserService.Get(key);

            _logger.LogInformation("");

            return Ok(internalUser);
        }


        //[Authorize]
        //[HttpPut()]
        //public async Task<IActionResult> Update([FromBody] UpdateInternalUserRequest updateInternalUserRequest)
        //{
        //    _logger.LogInformation("");

        //    InternalUserDto internalUser = _internalUserService.Update(updateInternalUserRequest);

        //    _logger.LogInformation("");
        //    return Ok(internalUser);
        //}

        //[Authorize]
        //[HttpPost()]
        //public OkObjectResult Create([FromBody] CreateInternalUserRequest createInternalUserRequest)
        //{
        //    _logger.LogInformation("");

        //    InternalUserDto internalUser = _internalUserService.Create(createInternalUserRequest);

        //    _logger.LogInformation("");
        //    return Ok(internalUser);
        //}

        //[Authorize]
        //[HttpDelete()]
        //public async Task<IActionResult> Delete([FromQuery] string key)
        //{
        //    _logger.LogInformation("");
        //    _internalUserService.Remove(key);
        //    _logger.LogInformation("");
        //    return Ok();
        //}

    }
}