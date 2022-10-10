using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace SistemaGestionAuditoriaBackend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {

        [HttpGet(Name = "holi")]
        [Authorize]
        public IActionResult Get()
        {
            return Ok("Hola mundo");
        }
    }
}