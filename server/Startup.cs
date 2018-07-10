﻿using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using server.Data;
using server.Interfaces;
using server.Middleware;
using server.Services;
using Swashbuckle.AspNetCore.Swagger;

namespace server
{
    public class Startup
    {
        private readonly IHostingEnvironment Env;

        public Startup(IConfiguration configuration, IHostingEnvironment env)
        {
            Env = env;
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //inmemory DataBase for testing (wipes data on re-compile or server restart)
            // services.AddDbContextPool<DataContext>(options =>
            //     options.UseInMemoryDatabase("server")
            // );
            services.AddDbContextPool<DataContext>(options =>
                        options
                        // enable lazy loading of navigatio n properties(foreign keys in database)
                        .UseLazyLoadingProxies()
                        .UseSqlite("Data Source=database.db"));


            // add cross origin resource sharing for serving API requests
            services.AddCors();
            // adds repository patterns for each DbSet
            services.AddScoped(typeof(IRepository<>), typeof(EfRepository<>));
            // adds Whois Service
            services.AddScoped<IWhoisService, WhoisService>();
            // adds Whois Service
            services.AddScoped<IDnsService, DnsService>();

            // add MVC with automatic CSRF protection
            services.AddMvc(options =>
            {

                // add antiforgery when authentication is configured
                // not yet enabled untill authentication/authorization is configured
                // options.Filters.Add(new AutoValidateAntiforgeryTokenAttribute());
            })
            //handle JSON cycle loops with related EF core entities
            .AddJsonOptions(
                options =>
                {
                    options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                }
            );

            //add API documentation to JSON
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "My API", Version = "v1", Description = "Test API for the testing tests" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            //allow MVC Routes to be accessed outside of server
            app.UseCors(
                options => options.AllowAnyOrigin()
                                    .AllowAnyMethod()
                                    .AllowAnyHeader()
                                    .AllowCredentials()
            );

            // catch internal server errors and send as response
            app.UseMiddleware(typeof(ErrorHandlingMiddleware));
            app.UseMvc();

            // add swagger ui for API
            app.UseSwagger();

            // add API documentation at root URL
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API");
                //set swagger page at '/' route
                c.RoutePrefix = string.Empty;
            });
        }
    }
}