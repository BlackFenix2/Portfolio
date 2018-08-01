using Microsoft.AspNetCore.Mvc;
using server.Controllers;
using server.Data;
using server.Helpers;
using server.Models.Entities;
using System;
using System.Threading.Tasks;

namespace server.API.Controllers
{

    public class Fruits : CrudController<Fruit>
    {
        public Fruits(IRepository<Fruit> Repo) : base(Repo) { }
    }
}