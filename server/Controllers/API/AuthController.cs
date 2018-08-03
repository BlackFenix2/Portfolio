using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using server.Identity;

namespace server.Controllers.API
{

    public class AuthController : ApiController
    {


        private readonly SignInManager<User> _signInManager;
        private readonly UserManager<User> _userManager;
        private readonly IConfiguration _configuration;

        public AuthController(
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            IConfiguration configuration
            )
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
        }


        [HttpPost("[action]")]
        public async Task<IActionResult> Register([FromBody] User user)
        {


            var result = await _userManager.CreateAsync(user, user.Password);

            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(user, false);
                return await GenerateJwtTokenAsync(user.Email, user);
            }

            return BadRequest(result.Errors.First().Description);
        }



        [HttpPost("[action]")]
        public async Task<IActionResult> Login([FromBody] User user)
        {
            var result = await _signInManager.PasswordSignInAsync(user.Email, user.Password, false, false);

            if (result.Succeeded)
            {
                var appUser = _userManager.Users.SingleOrDefault(r => r.Email == user.Email);
                return Ok(await GenerateJwtTokenAsync(user.Email, appUser));
            }

            return BadRequest("invalid Password");
        }

        [HttpPost("[action]")]
        [Authorize]
        public async Task<IActionResult> Logout()
        {

            await Task.Delay(0);
            return Ok();
        }

        /// <summary>
        /// Test User Authentication
        /// </summary>
        /// <returns></returns>
        [HttpPost("[action]")]
        [Authorize]
        public async Task<IActionResult> Test()
        {

            await Task.Delay(0);
            return Ok();
        }


        private async Task<IActionResult> GenerateJwtTokenAsync(string email, User user)
        {
            await Task.Delay(0);
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, email),
                new Claim(JwtRegisteredClaimNames.UniqueName, user.UserName),
                new Claim("First_Name", user.FirstName),
                new Claim("Last_Name", user.LastName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JwtKey"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(Convert.ToDouble(_configuration["JwtExpireDays"]));

            var token = new JwtSecurityToken(
                _configuration["JwtIssuer"],
                _configuration["JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: creds
            );



            return Ok(new JwtSecurityTokenHandler().WriteToken(token));
        }
    }
}