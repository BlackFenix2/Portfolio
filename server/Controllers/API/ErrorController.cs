using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server.Controllers;

namespace server.API.Controllers
{

    public class ErrorController : ApiController
    {

        // Endpoint for testing Error Handling Middleware
        [HttpGet]
        public IEnumerable<string> Get()
        {
            throw new Exception("error test");
        }

    }
}
