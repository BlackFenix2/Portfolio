using Microsoft.AspNetCore.Mvc;
using server.Controllers;
using server.Interfaces;
using server.Models.Objects;
using System;
using System.Threading.Tasks;

namespace server.API.Controllers
{

    public class DomainController : ApiController
    {
        public IWhoisService _WhoisService;
        public IDnsService _DnsService;

        public DomainController(IWhoisService WhoisService, IDnsService DnsService)
        {
            _WhoisService = WhoisService;
            _DnsService = DnsService;
        }

        // GET api/values
        [HttpGet("{domain}")]
        public async Task<IActionResult> Get(string domain)
        {
            var Record = new DomainRecord()
            {
                Whois = _WhoisService.GetWhoisInfo(domain),
                Dns = await _DnsService.GetDnsInfoAsync(domain),
                Summary = new SummaryRecord()
            };
            try
            {
                Record.Summary.DomainOwner = Record.Whois.Registrant.Email;
                Record.Summary.EmailHost = Record.Dns.MxRecords.Contains("mx1.emailsrvr.com.") ? "Rackspace" : "Other";
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return Ok(Record);
        }


    }
}