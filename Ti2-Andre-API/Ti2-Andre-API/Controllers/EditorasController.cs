using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Ti2_Andre_API.Models;

namespace Ti2_Andre_API.Controllers
{
    [Route("api/values/")]
    [ApiController]
    public class EditorasController : ControllerBase
    {
        private ApplicationDbContext db;

        public EditorasController(ApplicationDbContext db)
        {
            this.db = db;
        }

        // GET api/values
        [HttpGet("Editoras")]
        [Produces("application/json")]
        public ActionResult GetEditora()
        {
            return Ok(db.Editoras);
        }
    }
}
