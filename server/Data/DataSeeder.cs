using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Data
{
    public static class DataSeeder
    {
        /// <summary>
        /// runs database migrations on startup
        /// </summary>
        /// <param name="app"></param>
        public static void InitializeData(this IApplicationBuilder app)
        {
            using (var ServiceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {

                using (var context = ServiceScope.ServiceProvider.GetService<DataContext>())
                {
                    context.Database.Migrate();
                }
            }


        }
    }
}
