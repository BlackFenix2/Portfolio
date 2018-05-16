using server.Models.Objects;
using System.Threading.Tasks;

namespace server.Interfaces
{
    public interface IDnsService
    {
        DnsRecord GetDnsInfo(string domain);

        Task<DnsRecord> GetDnsInfoAsync(string domain);
    }
}