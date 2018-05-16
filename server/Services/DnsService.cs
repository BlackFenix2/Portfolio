using DnsClient;
using server.Interfaces;
using server.Models.Objects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Services
{
    public class DnsService : IDnsService
    {
        public async Task<DnsRecord> GetDnsInfoAsync(string domain)
        {
            var lookup = new LookupClient();

            try
            {
                // QueryType cannot be ANY, will throw an IndexOutOfRange exception.
                var ARecords = await lookup.QueryAsync(domain, QueryType.A);

                var MxRecords = await lookup.QueryAsync(domain, QueryType.MX);

                var CnameRecords = await lookup.QueryAsync(domain, QueryType.CNAME);

                var dnsRecords = new DnsRecord()
                {
                    // MxRecords = GetMXRecords(domain),
                    // ARecords = GetARecord(domain),
                    // CnameRecords = GetCnameRecord(domain)

                    MxRecords = MxRecords.Answers.MxRecords().Select(x => x.Exchange.ToString()).ToList(),
                    ARecords = ARecords.Answers.ARecords().Select(x => x.Address.ToString()).ToList(),
                    CnameRecords = CnameRecords.Answers.CnameRecords().Select(x => x.RecordToString()).ToList()
                };
                return dnsRecords;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private List<string> GetMXRecords(string domain)
        {
            throw new NotImplementedException();
        }

        private List<string> GetARecord(string domain)
        {
            throw new NotImplementedException();
        }

        private List<string> GetCnameRecord(string domain)
        {
            throw new NotImplementedException();
        }

        public DnsRecord GetDnsInfo(string domain)
        {
            throw new NotImplementedException();
        }
    }
}