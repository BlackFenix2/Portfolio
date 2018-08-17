using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using server.Identity;

namespace server.Controllers.API
{
    
    public class AdminController : ApiController
    {
        private readonly UserManager<User> _userManager;
        public AdminController(UserManager<User> userManager)
        {
            _userManager = userManager;
        }


        /// <summary>
        /// Remove a user
        /// </summary>
        /// <returns></returns>
        [HttpPost("[action]")]
        [Authorize]
        public async Task<IActionResult> RemoveUser(string email)
        {

            var user = await _userManager.FindByEmailAsync(email);
            if(user != null)
            {
                
                await _userManager.DeleteAsync(user);
                return Ok();

            }
            return BadRequest("User not found");
        }
    }
}