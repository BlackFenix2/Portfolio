using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [Route("api/[controller]")]
    public abstract class ApiController : Controller
    {
    }
}