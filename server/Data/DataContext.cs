using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using server.Attributes;
using server.Data.Entities;
using server.Identity;
using System;
using System.Linq;

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
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {



            if (_env.IsDevelopment())
            {
                // create local SQL Database
                var connStr = "Server=(localdb)\\mssqllocaldb;Database=DevData;Trusted_Connection=True;MultipleActiveResultSets=True";
                options.UseLazyLoadingProxies().UseSqlServer(connStr);
            }
            else
            {
                var connStr = "Server=tcp:fhs-db.database.windows.net,1433;Initial Catalog=PortfolioDB;Persist Security Info=False;User ID=Devin_98{@}msn.com;Password={Has9eduv};MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
                options.UseLazyLoadingProxies().UseSqlServer(connStr);

            }
        }

        /// <summary>
        /// enable data enctyption at rest for properties with [Encrypted] Attribute
        /// </summary>
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //run base model creation
            base.OnModelCreating(modelBuilder);


            //check for [Encrypted] attribute
            foreach (var entityType in modelBuilder.Model.GetEntityTypes())
            {
                foreach (var property in entityType.GetProperties())
                {
                    var attributes = property.PropertyInfo?.GetCustomAttributes(typeof(EncryptedAttribute), false) ?? new object[0];
                    if (attributes.Any())
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