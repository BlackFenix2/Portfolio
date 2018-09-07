using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Attributes
{
    [AttributeUsage(AttributeTargets.Property, AllowMultiple = false)]
    sealed class EncryptedAttribute : Attribute
    {
    }
}
