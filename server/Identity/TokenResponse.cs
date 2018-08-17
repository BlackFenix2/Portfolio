using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Identity
{
    public class TokenResponse
    {
        public string Token { get; set; }

        public DateTime Expiration { get; set; }
    }
}
