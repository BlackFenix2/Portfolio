
using server.Data.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Data.Entities
{
    public class Secret : BaseEntity
    {
        public string Name { get; set; }
        [Encrypted]
        public string Password { get; set; }

        public int SocialNumber { get; set; }

        public bool SecretChoice { get; set; }


    }
}
