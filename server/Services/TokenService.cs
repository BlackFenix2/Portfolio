
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using server.Helpers;
using server.Identity;
using server.Interfaces;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace server.Services
{
    public class TokenService : ITokenService
    {
        
        public async Task<TokenResponse> GenerateToken(User user)
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

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Keys.Jwt.Key));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(Convert.ToDouble(Keys.Jwt.Expires));

            var token = new JwtSecurityToken(
                Keys.Jwt.Issuer,
                Keys.Jwt.Issuer,
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
