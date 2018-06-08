using Microsoft.AspNetCore.Mvc;
using server.Interfaces;
using server.Models.Objects;
using System;
using System.Threading.Tasks;
using Whois.NET;

namespace server.Controllers
{
    [Route("api/[controller]")]
    public class DomainController : Controller
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

        [HttpGet("test")]
        public async Task<IActionResult> GetItem(string domain)
        {
            var result = await WhoisClient.QueryAsync("motologger.us");


            return Ok(result);
        }
    }
}