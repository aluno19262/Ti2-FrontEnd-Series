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
    public class EpisodiosController : ControllerBase
    {
        private ApplicationDbContext db;

        public EpisodiosController(ApplicationDbContext db)
        {
            this.db = db;
        }

        // GET api/values
        [HttpGet("Temporadas/{id}/Episodios")]
        [Produces("application/json")]
        public ActionResult GetEpisodios(int? id)
        {
            return Ok(db.Episodios.Where(i => i.TemporadaFK == id));
        }

        // GET api/values
        [HttpGet("Episodio/{id}/EpisodiosDetails")]
        [Produces("application/json")]
        public ActionResult GetEpisodiosDetails(int? id)
        {
            var episodio = db.Episodios.FirstOrDefault(i => i.ID == id);

            if (episodio == null)
            {
                return NotFound("Episódio " + id + " não encontrado.");
            }

            //db.Episodios.Where(i => i.ID == id)
            return Ok(episodio);
        }
    }
}
