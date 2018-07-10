using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    /// <summary>
    /// Controller with the prefixed route 'API/[controller]'
    /// </summary>
    [Route("api/[controller]")]
    public abstract class ApiController : ControllerBase
    {
    }
}