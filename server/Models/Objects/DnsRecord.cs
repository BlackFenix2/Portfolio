using System.Collections.Generic;

namespace server.Models.Objects
{
    public class DnsRecord
    {
        public List<string> MxRecords { get; set; }

        public List<string> ARecords { get; set; }

        public List<string> CnameRecords { get; set; }
    }
}