namespace server.Models.Objects
{
    public class DomainRecord
    {
        public WhoisRecord Whois { get; set; }

        public DnsRecord Dns { get; set; }

        public SummaryRecord Summary { get; set; }
    }
}