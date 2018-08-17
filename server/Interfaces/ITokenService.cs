using server.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Interfaces
{
    
    public interface ITokenService
    {
        /// <summary>
        /// Generate JWT Response Object
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        Task<TokenResponse> GenerateToken(User user);
    }
}
