using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace server.Controllers
{

    public class RootController : ApiController
    {
        // GET: api/Root
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Root/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Root
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Root/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}