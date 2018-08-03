using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using server.Data;
using server.Identity;
using server.Interfaces;
using server.Middleware;
using server.Services;
using Swashbuckle.AspNetCore.Swagger;
using System;
using System.Text;

namespace server
{
    public class Startup
    {
        private readonly IHostingEnvironment _env;

        public Startup(IConfiguration configuration, IHostingEnvironment env)
        {
            _env = env;
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {



            //add Database to app
            services.AddDbContext<DataContext>();


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


            // Add Identity
            // TODO move glob to separate file
            services.AddIdentity<User, IdentityRole>()
                .AddEntityFrameworkStores<DataContext>()
                .AddDefaultTokenProviders();


            services
                .AddAuthentication(options =>
                {
                    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

                })
                .AddJwtBearer(cfg =>
                {
                    cfg.RequireHttpsMetadata = false;
                    cfg.SaveToken = true;
                    cfg.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidIssuer = Configuration["JwtIssuer"],
                        ValidAudience = Configuration["JwtIssuer"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JwtKey"])),
                        ClockSkew = TimeSpan.Zero
                    };
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

            //use authentication
            app.UseAuthentication();

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