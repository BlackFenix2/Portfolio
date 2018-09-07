using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using System;
using System.Linq;
using System.Linq.Expressions;
using System.Security.Cryptography;
using System.Text;

namespace server.Data
{
    internal class EncryptedConverter : ValueConverter<string, string>
    {
        public EncryptedConverter(ConverterMappingHints mappingHints = default) : base(EncryptExpr, DecryptExpr, mappingHints)
        { }


        static Expression<Func<string, string>> EncryptExpr = x => Encrypt(x);
        static Expression<Func<string, string>> DecryptExpr = x => Decrypt(x);


        public static string KEY => Environment.GetEnvironmentVariable("EFCORE_KEY") ?? "ugfpV1dMC5jyJtqwVAfTpHkxqJ0+E0ae";

        private static string Encrypt(string data)
        {

            var rawData = Encoding.UTF8.GetBytes(data);
            var result = GetProvider().CreateEncryptor().TransformFinalBlock(rawData, 0, rawData.Length);

            return Convert.ToBase64String(result);
        }



        private static string Decrypt(string data)
        {

            var rawData = Convert.FromBase64String(data);
            var result = GetProvider().CreateDecryptor().TransformFinalBlock(rawData, 0, rawData.Length);

            return Encoding.UTF8.GetString(result);
        }

        private static TripleDESCryptoServiceProvider GetProvider()
        {
            return new TripleDESCryptoServiceProvider
            {
                Mode = CipherMode.ECB, //this the default used by java
                Padding = PaddingMode.PKCS7, //this should be 5, but 7 *should* work
                Key = Convert.FromBase64String(KEY)
            };
        }


    }
}