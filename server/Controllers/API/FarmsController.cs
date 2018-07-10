using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server.Data;
using server.Helpers;
using server.Models.Entities;

namespace server.Controllers.API
{

    public class FarmsController : CrudController<Farm>
    {
        public FarmsController(IRepository<Farm> Repo) : base(Repo) { }
    }
}