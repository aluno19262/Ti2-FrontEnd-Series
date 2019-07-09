using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Ti2_Andre_API.Models;
using Ti2_Andre_API.ViewModels;

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

        //get dos epsiodios de 1 temporada especifica , com id fornecido
        // GET api/values
        [HttpGet("Temporadas/{id}/Episodios")]
        [Produces("application/json")]
        public ActionResult GetEpisodios(int? id)
        {
            return Ok(db.Episodios.Where(i => i.TemporadaFK == id).Select(i => new EpisodioDetails
            {
                ID = i.ID,
                Classificacao = i.Classificacao,
                Foto = i.Foto,
                Nome = i.Nome,
                Numero = i.Numero,
                Sinopse = i.Sinopse,
                TemporadaFK = i.TemporadaFK,
                SerieFK = i.Temporadas.SerieFK,
                Trailer = i.Trailer

            }));
        }

        //get de 1 comentário
        // GET api/values
        [HttpGet("Episodio/{id}/EpisodiosDetails")]
        [Produces("application/json")]
        public ActionResult GetEpisodiosDetails(int? id)
        {
            var episodio = db.Episodios
                .Select( i=> new EpisodioDetails {
                    ID=i.ID,
                    Classificacao = i.Classificacao,
                    Foto = i.Foto,
                    Nome=i.Nome,
                    Numero=i.Numero,
                    Sinopse=i.Sinopse,
                    TemporadaFK=i.TemporadaFK,
                    SerieFK=i.Temporadas.SerieFK,
                    Trailer=i.Trailer

                })
                .FirstOrDefault(i => i.ID == id);

            if (episodio == null)
            {
                return NotFound("Episódio " + id + " não encontrado.");
            }

            return Ok(episodio);
        }
    }
}
