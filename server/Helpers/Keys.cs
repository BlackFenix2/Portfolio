using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Helpers
{
    public static class Keys
    {
        public static class Jwt
        {
            public static readonly string Issuer = "https://react.erniefrancisiv.com";

            public static string Key => Environment.GetEnvironmentVariable("JWT_KEY") ?? "SOME_RANDOM_KEY_DO_NOT_SHARE";

            public static readonly int Expires = 1;
        }
    }
}
