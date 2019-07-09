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
        //get dos comentarios de 1 episódio com id fornecido
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
        // post de 1 comentário
        [Route("Create/{id}")]
        [HttpPost]
        public IActionResult CreateComment([FromBody] Comentarios comentario, int id)
        {
            //novo comentario com Texto e EpisodioFK como atributos (id é adicionado automaticamente)
            var novoComentario = new Comentarios
            {
                Texto = comentario.Texto,
                EpisodioFK = id,
            };
            //guardar na bd as alterações
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
        //delete de 1 comentário
        // DELETE api/values/5
        [HttpDelete("Delete/{id}")]
        public IActionResult DeleteComentario(int id)
        {
            var comentario = db.Comentarios.Find(id);
            //se nao existir comentário , apresenta uma mensagem de erro 
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

