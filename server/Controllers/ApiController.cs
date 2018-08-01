using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    /// <summary>
    /// Controller with the prefixed route 'API/[controller]'
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public abstract class ApiController : ControllerBase
    {
    }
}