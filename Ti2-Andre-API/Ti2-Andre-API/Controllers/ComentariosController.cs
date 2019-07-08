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
    public class ComentariosController : ControllerBase
    {
        private ApplicationDbContext db;

        public ComentariosController(ApplicationDbContext db)
        {
            this.db = db;
        }

        // GET api/values
        [HttpGet("Get/{id}")]
        [Produces("application/json")]
        public ActionResult GetComentarios(int? id)
        {
            var comentarios = db.Comentarios.FindAsync(id);

            if (comentarios == null)
            {
                return NotFound();
            }

            return Ok(db.Comentarios.Where(i => i.EpisodioFK == id));
        }

        //---------------------Post-----------------------
        [Route("Create/{id}")]
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
        [HttpDelete("Delete/{id}")]
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
        //------------------------------------------------
    }
}

