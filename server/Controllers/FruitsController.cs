using Microsoft.AspNetCore.Mvc;
using server.Data;
using server.Helpers;
using server.Models.Entities;
using System;
using System.Threading.Tasks;

namespace server.Controllers
{

    public class FruitsController : ApiController
    {
        private IRepository<Fruit> _repo;

        public FruitsController(IRepository<Fruit> Repo)
        {
            _repo = Repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetList(ResourceParameters resource)
        {
            var list = await _repo.ListAsync(resource);

            return Ok(list);
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
        public async Task<IActionResult> Post([FromBody]Fruit value)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            await _repo.AddAsync(value);
            return Created("Test", value);
        }

        // PUT api/fruits/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(Guid id, [FromBody]Fruit value)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            await _repo.UpdateAsync(value);
            return Ok();
        }

        // DELETE api/fruitss/5
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
    }
}