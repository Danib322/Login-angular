using System;
using Microsoft.AspNetCore.Mvc;
using SistemaGestionAuditoriaBackend.Dto;
using SistemaGestionAuditoriaBackend.Exceptions;
using SistemaGestionAuditoriaBackend.Interfaces;
using SistemaGestionAuditoriaBackend.Models.Enums;

namespace SistemaGestionAuditoriaBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService authService;

        public AuthController(IAuthService authService)
        {
            this.authService = authService;
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login(LoginDto model)
        {
            try
            {
                var token = await authService.Authenticate(model.UserName!, model.password!);
                return Ok(token);
            }
            catch(UserNotFoundException)
            {
                return NotFound();
            }
            catch(InvalidPasswordException)
            {
                return BadRequest();
            }

        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register(RegisterDto model)
        {
            try
            {
                await authService.Register(model.Username!, model.Password!, model.Cedula!, TipoUsuario.AUDITOR_FORENSE);
                return Ok();
            } catch(RegisterException ex)
            {
                return BadRequest(ex.errors);
            }
        }
    }
}

