using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using server.Identity;
using server.Models.Entities;
using System;

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


        //List of Entities
        public DbSet<Fruit> Fruit { get; set; }
        public DbSet<Farm> Farm { get; set; }
        public DbSet<User> User { get; set; }
    }
}