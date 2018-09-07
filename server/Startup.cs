
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using server.Data;
using server.Helpers;
using server.Identity;
using server.Interfaces;
using server.Middleware;
using server.Services;
using Swashbuckle.AspNetCore.Filters;
using Swashbuckle.AspNetCore.Swagger;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
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
            // adds Token Service
            services.AddScoped<ITokenService, TokenService>();

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
                c.SwaggerDoc("v1", new Info
                {
                    Title = "My API",
                    Version = "v1",
                    Description = "Test API for the testing tests"
                }
                );

                try
                {
                    // handle secure API Endpoints for SwaggerUI
                    c.OperationFilter<SecurityRequirementsOperationFilter>();

                    // handle JWT Bearer for API
                    c.AddSecurityDefinition("oauth2", new ApiKeyScheme
                    {
                        Description = "Standard Authorization header using the Bearer scheme. Example: \"bearer {token}\"",
                        In = "header",
                        Name = "Authorization",
                        Type = "apiKey"
                    });


                    // Set the comments path for the Swagger JSON and UI.
                    var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                    var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                    c.IncludeXmlComments(xmlPath);
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Exception setting up Swagger JWT: " + ex.Message);
                }


            });




            // Add Identity
            // TODO move glob to separate file
            services.AddIdentity<User, IdentityRole>()
                .AddEntityFrameworkStores<DataContext>()
                .AddDefaultTokenProviders();

            //Add JWT Authentication
            services.AddJwtAuthentication();



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



            // testing new exception handler for .net core 2.1
            // Handle global uncaught exceptions
            app.UseExceptionHandler(errorApp =>
            {
                errorApp.Run(async context =>
                {

                    var exception = context.Features.Get<IExceptionHandlerFeature>().Error;

                    //Create new JSON Object
                    var result = JsonConvert.SerializeObject(new
                    {
                        error = exception.StackTrace,
                        message = exception.Message
                    });

                    // parse the response for JSON
                    context.Response.ContentType = "application/json";
                    await context.Response.WriteAsync(result);
                });
            });

            //use JWT authentication
            app.UseAuthentication();


            //use MVC routing
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