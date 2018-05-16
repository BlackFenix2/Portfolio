using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using server.Data;
using server.Interfaces;
using server.Middleware;
using server.Services;
using Swashbuckle.AspNetCore.Swagger;

namespace server
{
    public class Startup
    {
        private IHostingEnvironment Env;

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
                        options.UseSqlite("Data Source=database.db"));



            services.AddCors();
            //adds repository patterns for each DbSet
            services.AddScoped(typeof(IRepository<>), typeof(EfRepository<>));
            //adds Whois Service
            services.AddScoped<IWhoisService, WhoisService>();
            //adds Whois Service
            services.AddScoped<IDnsService, DnsService>();

            services.AddMvc();

            // add API documentation to JSON
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "My API", Version = "v1", });
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
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseMiddleware(typeof(ErrorHandlingMiddleware));
            app.UseMvc();

            // add swagger ui for API
            app.UseSwagger();

            // add API documentation at root URL
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API");
                c.RoutePrefix = string.Empty;
            });
        }
    }
}