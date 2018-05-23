using server.Interfaces;
using server.Models.Objects;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Whois;
using Whois.Extensions;

namespace server.Services
{
    public class WhoisService : IWhoisService
    {
        public WhoisRecord GetWhoisInfo(string domain)
        {
            //validate domain befor emakign whois Query
            try
            {
                domain = Cleanse(domain);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            var record = new WhoisRecord();
            var whoisResult = new WhoisLookup().Lookup(domain);

            List<string> parameters = new List<string>
            {
                "Creation Date:",
                "Registrar Registration Expiration Date:",
                "Registry Expiry Date:",
                "Registrar:",
                "Domain Status:",
                "Registrant Email:",
                "Admin Email:",
                "Name Server:"
            };

            var records = GetWHOISValues(whoisResult.Text, parameters);

            record.Raw = whoisResult.ToString();
            record.Domain = domain;
            // try to populate whois record.
            try
            {
                record.Created = DateTime.Parse(records["Creation Date:"]
                            .FirstOrDefault());

                var test = records["Registry Expiry Date:"].FirstOrDefault();
                record.Expired = DateTime.Parse(records
                .First(x => (x.Key == "Registrar Registration Expiration Date:" && x.Value.FirstOrDefault() != null)
                || (x.Key == "Registry Expiry Date:" && x.Value.FirstOrDefault() != null))
                .Value
                .FirstOrDefault());

                record.DomainStatus = records["Domain Status:"]
                // trim whitespace for clean domain status list
                .Select(x => x.SubstringBeforeChar(" ").Trim())
                .ToList();

                record.Nameservers = records["Name Server:"];

                record.Registrant.Email = records["Registrant Email:"].FirstOrDefault();
                record.Admin.Email = records["Admin Email:"].FirstOrDefault();
            }
            catch (Exception)
            {
                return record;
            }

            return record;
        }

        private Dictionary<string, List<string>> GetWHOISValues(ArrayList text, List<string> parameters)
        {
            var TextList = text.ToArray().OfType<string>().ToList();
            Dictionary<string, List<String>> dict = new Dictionary<string, List<String>>();

            foreach (var item in parameters)
            {
                var values = TextList
                    .Where(x => x.Contains(item))
                    .Select(x => x.SubstringAfterChar(":").Trim())
                    .ToList();
                dict.Add(item, values);
            }
            return dict;
        }

        private string Cleanse(string domain)
        {
            
            return domain;
        }
    }
}