using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers.API
{

    public class DebugController : ApiController
    {
        // Endpoint for testing Error Handling Middleware
        [HttpGet]
        public IActionResult Get()
        {
            var pgUserId = Environment.GetEnvironmentVariable("POSTGRES_USER_ID");
            var pgPassword = Environment.GetEnvironmentVariable("POSTGRES_PASSWORD");
            var pgHost = Environment.GetEnvironmentVariable("POSTGRES_HOST");
            var pgPort = Environment.GetEnvironmentVariable("POSTGRES_PORT");
            var pgDatabase = Environment.GetEnvironmentVariable("POSTGRES_DB");

            var connStr = $"Server={pgHost};Port={pgPort};User Id={pgUserId};Password={pgPassword};Database={pgDatabase}";
            return Ok(connStr);
        }
    }
}