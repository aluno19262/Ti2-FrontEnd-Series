using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Ti2_Andre_API.Models;

namespace Ti2_Andre_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private ApplicationDbContext db;

        public ValuesController(ApplicationDbContext db)
        {
            this.db = db;
        }
    }
    public class Value
    {
        public int Id { get; set; }
        public string Text { get; set; }
    }
}
