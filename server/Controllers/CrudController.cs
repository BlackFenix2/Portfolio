﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using server.Data;
using server.Helpers;
using server.Models;

namespace server.Controllers
{

    public abstract class CrudController<T> : ApiController where T : BaseEntity
    {
        private IRepository<T> _repo;

        public CrudController(IRepository<T> Repo)
        {
            _repo = Repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetList(ResourceParameters resource)
        {
            var PagedList = await _repo.PagedListAsync(resource);


            var previousPageLink = PagedList.HasPrevious ?
                CreateResourceUri(resource,
                ResourceUriType.PreviousPage) : null;

            var nextPageLink = PagedList.HasNext ?
                CreateResourceUri(resource,
                ResourceUriType.NextPage) : null;

            var paginationMetadata = new
            {
                totalCount = PagedList.TotalCount,
                pageSize = PagedList.PageSize,
                currentPage = PagedList.CurrentPage,
                totalPages = PagedList.TotalPages,
                previousPageLink,
                nextPageLink
            };

            Response.Headers.Add("X-Pagination",
                JsonConvert.SerializeObject(paginationMetadata));

            return Ok(PagedList);
        }

        // GET api/fruits/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(Guid id)
        {
            var item = await _repo.GetByIdAsync(id);
            return Ok(item);
        }

        // POST api/fruits
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]T value)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            await _repo.AddAsync(value);


            return CreatedAtAction(nameof(Get), new { id = value.Id }, value);
        }

        // PUT api/fruits/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(Guid id, [FromBody]T value)
        {
            if (!await _repo.FindByIdAsync(id))
            {
                return NotFound();
            }

            if (!ModelState.IsValid || value == null)
            {
                return BadRequest(ModelState);
            }
            await _repo.UpdateAsync(id, value);
            return NoContent();
        }

        // PATCH api/fruits/5
        [HttpPatch("{id}")]
        public async Task<IActionResult> Patch(Guid id, [FromBody]T value)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            await _repo.UpdateAsync(value);
            return Ok();
        }

        // DELETE api/fruits/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            await _repo.DeleteAsync(id);
            return Ok();
        }

        // DELETE api/fruits/5
        [HttpOptions]
        public async Task<IActionResult> Options()
        {
            await Task.Delay(0);
            Response.Headers.Add("Allow", "GET,OPTIONS,POST");
            return Ok();
        }

        [HttpOptions("{id}")]
        public async Task<IActionResult> IdOptions()
        {
            await Task.Delay(0);
            Response.Headers.Add("Allow", "DELETE,GET,OPTIONS,PUT");
            return Ok();
        }

        private string CreateResourceUri(
            ResourceParameters resource, ResourceUriType type)
        {
            switch (type)
            {
                case ResourceUriType.PreviousPage:
                    return Url.Action(nameof(GetList),
                      new
                      {

                          pageNumber = resource.PageNumber - 1,
                          pageSize = resource.PageSize
                      });
                case ResourceUriType.NextPage:
                    return Url.Action(nameof(GetList),
                      new
                      {

                          pageNumber = resource.PageNumber + 1,
                          pageSize = resource.PageSize
                      });

                default:
                    return Url.Action(nameof(GetList),
                    new
                    {

                        pageNumber = resource.PageNumber,
                        pageSize = resource.PageSize
                    });
            }
        }
    }
}