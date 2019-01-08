using server.Interfaces;
using server.Models.Objects;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Whois;

namespace server.Services
{
    public class WhoisService : IWhoisService
    {
        public WhoisRecord GetWhoisInfo(string domain)
        {
            //validate domain before making whois Query
            try
            {
                domain = Cleanse(domain);
            }
            catch (Exception)
            {
                throw;
            }
            var record = new WhoisRecord();
            var whoisResult = new WhoisLookup().Lookup(domain);
            var records = whoisResult.ParsedResponse;

            record.Raw = whoisResult.Content;
            record.Domain = domain;
            // try to populate whois record,
            try
            {
                record.Created = records.Registered;

                record.Expired = records.Expiration;

                record.DomainStatus = records.DomainStatus;

                record.Nameservers = records.NameServers;

                record.Registrant.Email = records.Registrant.Email;
                record.Admin.Email = records.AdminContact.Email;
            }
            catch (Exception)
            {
                return record;
            }

            return record;
        }

        public async Task<WhoisRecord> GetWhoisInfoAsync(string domain)
        {
            //validate domain before making whois Query
            try
            {
                domain = Cleanse(domain);
            }
            catch (InvalidOperationException)
            {
                throw;
            }
            var record = new WhoisRecord();
            var whoisResult = await new WhoisLookup().LookupAsync(domain);

            var records = whoisResult.ParsedResponse;

            record.Raw = whoisResult.Content;
            record.Domain = domain;
            // try to populate whois record.
            try
            {
                record.Created = records.Registered;

                record.Expired = records.Expiration;

                record.DomainStatus = records.DomainStatus;

                record.Nameservers = records.NameServers;

                record.Registrant.Email = records.Registrant.Email;
                record.Admin.Email = records.AdminContact.Email;
            }
            catch (Exception)
            {
                return record;
            }

            return record;
        }

        private string Cleanse(string domain)
        {
            return domain;
        }
    }
}