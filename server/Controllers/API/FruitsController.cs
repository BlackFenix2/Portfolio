using Microsoft.AspNetCore.Mvc;
using server.Controllers;
using server.Data;
using server.Helpers;
using server.Models.Entities;
using System;
using System.Threading.Tasks;

namespace server.API.Controllers
{

    public class FruitsController : CrudController<Fruit>
    {
        public FruitsController(IRepository<Fruit> Repo) : base(Repo) { }
    }
}