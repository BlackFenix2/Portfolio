namespace server.Helpers
{
    public class ResourceParameters
    {
        private const int maxPageSize = 100;

        private int _pageSize = 100;

        public int PageNumber { get; set; } = 1;

        public int PageSize
        {
            get
            {
                return _pageSize;
            }
            set
            {
                _pageSize = (value > maxPageSize) ? maxPageSize : value;
            }
        }
    }
}