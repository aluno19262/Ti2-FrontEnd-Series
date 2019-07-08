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
    [Route("api/values/[controller]")]
    [ApiController]
    public class SeriesController : ControllerBase
    {
        private ApplicationDbContext db;

        public SeriesController(ApplicationDbContext db)
        {
            this.db = db;
        }

        // GET api/values
        [HttpGet("")]
        [Produces("application/json")]
        public ActionResult GetSeries()
        {
            return Ok(db.Series);
        }
    }
}
