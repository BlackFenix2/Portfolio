using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using server.Attributes;
using server.Data.Entities;
using server.Identity;

namespace server.Data
{
    public class DataContext : IdentityDbContext
    {
        private readonly IHostingEnvironment _env;

        public DataContext(DbContextOptions<DataContext> options, IHostingEnvironment Env) : base(options)
        {
            //passing in hosting environment
            _env = Env;

            //check for in-memory database before updating database
            if (!Database.IsInMemory())
            {
                Database.Migrate();
            }
        }

        //configure Datacontext
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (_env.IsDevelopment())
            {
                // create local SQL Database
                const string connStr = "Server=(localdb)\\mssqllocaldb;Database=DevData;Trusted_Connection=True;MultipleActiveResultSets=True";
                optionsBuilder.UseLazyLoadingProxies().UseSqlServer(connStr);
            }
            else
            {
                const string connStr = "Server=tcp:fhs-db.database.windows.net,1433;Initial Catalog=Portfolio-DB;Persist Security Info=False;User ID=test.user;Password=Has9eduv;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
                optionsBuilder.UseLazyLoadingProxies().UseSqlServer(connStr);
            }
        }

        /// <summary>
        /// enable data enctyption at rest for properties with [Encrypted] Attribute
        /// </summary>
        protected override void OnModelCreating(ModelBuilder builder)
        {
            //run base model creation
            base.OnModelCreating(builder);

            //check for [Encrypted] attribute
            foreach (var entityType in builder.Model.GetEntityTypes())
            {
                foreach (var property in entityType.GetProperties())
                {
                    var attributes = property.PropertyInfo?.GetCustomAttributes(typeof(EncryptedAttribute), false) ?? new object[0];
                    if (attributes.Length > 0)
                    {
                        property.SetValueConverter(new EncryptedConverter());
                    }
                }
            }
        }

        //List of Entities
        public DbSet<Fruit> Fruit { get; set; }

        public DbSet<Farm> Farm { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<Secret> Secret { get; set; }
    }
}