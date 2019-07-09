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
    [Route("api/values/Serie/")]
    [ApiController]
    public class TemporadasController : ControllerBase
       {
        private ApplicationDbContext db;

        public TemporadasController(ApplicationDbContext db)
        {
            this.db = db;
        }
        //get das temporadas de 1 série especifica , com id fornecido
        // GET api/values
        [HttpGet("{id}/Temporadas")]
        [Produces("application/json")]
        public ActionResult GetTemporadas(int? id)
        {

            return Ok(db.Temporadas.Where(t => t.SerieFK == id));
        }
    }
}
