using Microsoft.EntityFrameworkCore;
using server.Models.Entities;

namespace server.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            //check for in-memory database before updating database
            if (!Database.IsInMemory())
            {
                Database.MigrateAsync();
            }
        }

        public DbSet<Fruit> Fruit { get; set; }
    }
}