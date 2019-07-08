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

        // GET api/values
        [HttpGet("Series")]
        [Produces("application/json")]
        public ActionResult GetSeries()
        {

            return Ok(db.Series);
        }
        // GET api/values
        [HttpGet("Temporadas/{id}")]
        [Produces("application/json")]
        public ActionResult GetTemporadas(int? id)
        {

            return Ok(db.Temporadas.Where(t => t.SerieFK == id));
        }

        // GET api/values
        [HttpGet("Episodios/{id}")]
        [Produces("application/json")]
        public ActionResult GetEpisodios(int? id)
        {

            return Ok(db.Episodios.Where(i => i.TemporadaFK == id));
        }

        // GET api/values
        [HttpGet("EpisodiosDetails/{id}")]
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

        // GET api/values
        [HttpGet("Comentarios/{id}")]
        [Produces("application/json")]
        public ActionResult GetComentarios(int? id)
        {

            return Ok(db.Comentarios.Where(i => i.EpisodioFK == id));
        }

        // GET api/values
        [HttpGet("Editoras")]
        [Produces("application/json")]
        public ActionResult GetEditora()
        {

            return Ok(db.Editoras);
        }

        // GET api/values
        [HttpGet("Pessoas")]
        [Produces("application/json")]
        public ActionResult GetPessoas()
        {

            return Ok(db.Pessoas);
        }

        //---------------------Post-----------------------
        [Route("api/CreateComment/{id}")]
        [HttpPost]
        public IActionResult CreateComment([FromBody] Comentarios comentario, int id)
        {
            // Guardar o agente na BD.
            var novoComentario = new Comentarios
            {
                Texto = comentario.Texto,
                EpisodioFK = id,
            };

            db.Comentarios.Add(novoComentario);

            db.SaveChanges();

            var resultado = new
            {
                novoComentario.ID,
                novoComentario.Texto,
                novoComentario.EpisodioFK
            };


            return Ok(resultado);
        }
        //------------------------------------------------

        // DELETE api/values/5
        [HttpDelete("DeleteComentario/{id}")]
        public IActionResult DeleteComentario(int id)
        {
            var comentario = db.Comentarios.Find(id);

            if (comentario == null)
            {
                return NotFound("Não é possível apagar o comentário");
            }         

            // Apagar da BD...
            db.Comentarios.Remove(comentario);

            db.SaveChanges();

            return NoContent();
        }
    }
    public class Value
    {
        public int Id { get; set; }
        public string Text { get; set; }
    }
}
