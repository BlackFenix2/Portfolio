using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using server.Controllers;
using server.Data;
using server.Identity;

namespace server.API.Controllers
{

    public class DebugController : ApiController
    {
        private DataContext _context;
        private readonly UserManager<User> _userManager;

        public DebugController(DataContext Context, UserManager<User> UserManager)
        {
            _context = Context;
            _userManager = UserManager;
        }

        // Endpoint for testing Error Handling Middleware

        /// <summary>
        /// Test Global exception handler
        /// </summary>
        /// <returns></returns>
        [HttpGet("[action]")]
        public IActionResult Error()
        {
            throw new Exception("error test");
        }

        /// <summary>
        /// Test items
        /// </summary>
        /// <returns></returns>
        [HttpGet("[action]")]
        public IActionResult ListTables()
        {
            return Ok(_context.Model.GetEntityTypes().Select(x => x.Name));

        }

        [HttpGet("[action]")]
        public IActionResult GetUsers()
        {
            return Ok(_userManager.Users.ToList());

        }

    }
}
