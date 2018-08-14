﻿using Microsoft.AspNetCore.Mvc;
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
        /// <summary>
        /// Testing Extension to API Routes
        /// </summary>
        /// <param name="resource"></param>
        /// <returns></returns>
        [HttpGet("test/whyme")]
        public async Task<IActionResult> Test([FromQuery]ResourceParameters resource)
        {
            var model = await _repo.PagedListAsync(resource);
            return Ok(model);
        }
    }
}