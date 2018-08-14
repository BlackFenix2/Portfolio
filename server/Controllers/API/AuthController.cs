using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using server.Identity;

namespace server.Controllers.API
{

    public class AuthController : ApiController
    {


        private readonly UserManager<User> _userManager;
        private readonly IConfiguration _configuration;
        private readonly IPasswordHasher<User> _hasher;

        public AuthController(
            UserManager<User> userManager,
            IConfiguration configuration,
            IPasswordHasher<User> hasher
            )
        {
            _userManager = userManager;
            _configuration = configuration;
            _hasher = hasher;
        }


        [HttpPost("[action]")]
        public async Task<IActionResult> Register([FromBody] UserDTO userDTO)
        {

            var user = new User
            {
                UserName = userDTO.Email,
                Email = userDTO.Email,
                FirstName = userDTO.FirstName,
                LastName = userDTO.LastName
            };
            var result = await _userManager.CreateAsync(user, userDTO.Password);
            if (result.Succeeded)
            {

                return Ok(await GenerateJwtTokenAsync(user));
            }

            return BadRequest(result.Errors.Select(x => x.Description).ToList());
        }



        [HttpPost("[action]")]
        public async Task<IActionResult> Login([FromBody] UserDTO userDTO)
        {



            var user = await _userManager.FindByEmailAsync(userDTO.Email);
            if (user != null)
            {

                if (_hasher.VerifyHashedPassword(user, user.PasswordHash, userDTO.Password) == PasswordVerificationResult.Success)
                {
                    return Ok(await GenerateJwtTokenAsync(user));

                }
                return BadRequest("Invalid Password");
            }


            return BadRequest("User not found");
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
            return Ok(User.Identity.Name);
        }

        /// <summary>
        /// Generate JWT Response Object
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        private async Task<TokenResponse> GenerateJwtTokenAsync(User user)
        {
            await Task.Delay(0);
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                new Claim(JwtRegisteredClaimNames.UniqueName, user.UserName),
                new Claim(JwtRegisteredClaimNames.GivenName, user.FirstName),
                new Claim(JwtRegisteredClaimNames.FamilyName, user.LastName),
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



            return new TokenResponse()
            {
                Token = new JwtSecurityTokenHandler().WriteToken(token),
                Expiration = token.ValidTo
            };
        }
    }
}