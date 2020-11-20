using GestionCovid.DTOs;
using GestionCovid.Infrastructure;
using GestionCovid.Services;
using GestionCovid.Services.Implementation;
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
    public class PacienteController : Controller
    {
        private readonly PacienteService _pacienteService;

        public PacienteController(PacienteService pacienteService, TokenHelper tokenHelper, ILogger<InternalUserController> logger)
        {
            _pacienteService = pacienteService;
        }

        [Authorize]
        [HttpGet()]
        public async Task<IActionResult> GetAll()
        {

            IEnumerable<PacienteDto> paciente = _pacienteService.GetAll();

            return Ok(paciente);
        }

        [Authorize]
        [HttpGet("{key}")]
        public async Task<IActionResult> Get(String key)
        {
         
            PacienteDto paciente = _pacienteService.Get(key);

          
            return Ok(paciente);
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