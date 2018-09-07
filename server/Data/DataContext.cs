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
                Database.EnsureCreated();
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
                //use postgres database, load env variables due to Heroku servers
                var pgUserId = Environment.GetEnvironmentVariable("POSTGRES_USER_ID");
                var pgPassword = Environment.GetEnvironmentVariable("POSTGRES_PASSWORD");
                var pgHost = Environment.GetEnvironmentVariable("POSTGRES_HOST");
                var pgPort = Environment.GetEnvironmentVariable("POSTGRES_PORT");
                var pgDatabase = Environment.GetEnvironmentVariable("POSTGRES_DB");

                var connStr = $"Server={pgHost};Port={pgPort};User Id={pgUserId};Password={pgPassword};Database={pgDatabase}";
                options.UseLazyLoadingProxies().UseNpgsql(connStr);

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