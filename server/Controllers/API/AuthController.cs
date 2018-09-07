using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using server.Identity;
using server.Interfaces;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace server.Controllers.API
{

    public class AuthController : ApiController
    {


        private readonly UserManager<User> _userManager;
        private readonly ITokenService _tokenService;
        private readonly IPasswordHasher<User> _hasher;

        public AuthController(
            UserManager<User> userManager,
            ITokenService tokenService,
            IPasswordHasher<User> hasher
            )
        {
            _userManager = userManager;
            _tokenService = tokenService;
            _hasher = hasher;
        }


        [HttpPost("[action]")]
        public async Task<IActionResult> Register([FromBody] UserRegistrationDTO userDTO)
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

                return Ok(await _tokenService.GenerateToken(user));
            }

            return BadRequest(result.Errors.Select(x => x.Description).ToList());
        }



        [HttpPost("[action]")]
        public async Task<IActionResult> Login([FromBody] UserLoginDTO userDTO)
        {



            var user = await _userManager.FindByEmailAsync(userDTO.Email);
            if (user != null)
            {

                if (_hasher.VerifyHashedPassword(user, user.PasswordHash, userDTO.Password) == PasswordVerificationResult.Success)
                {
                    return Ok(await _tokenService.GenerateToken(user));

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
            return Ok($"Auth Successful for {User.Identity.Name}");
        }


    }
}