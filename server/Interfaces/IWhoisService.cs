using server.Models.Objects;

namespace server.Interfaces
{
    public interface IWhoisService
    {
        WhoisRecord GetWhoisInfo(string domain);
    }
}