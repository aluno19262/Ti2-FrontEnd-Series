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

        [HttpGet("{id}/Temporadas/{pesquisa}")]
        public IActionResult GetAll(int id, string pesquisa )
        {
            //query linq na tabela das temporadas
            IQueryable<Temporadas> query = db.Temporadas;

            //verificar se a pesquisa tem alguma letra (comparando se tem algum espaço branco ou se for null)
            if (!string.IsNullOrWhiteSpace(pesquisa))
            {
                //transformar a string de pesquisa com todos os caracteres em minusculas 
                //e retirando eventuais espaços em branco nos extremos da string
                pesquisa = pesquisa.ToLower().Trim();
                //query para saber quais os elementos que tem o mesmo serieFK 
                //e que contenham elementos da string pesquisa no seu conteudo (Nome)
                query = query.Where(a => a.Nome.ToLower().Contains(pesquisa) && a.SerieFK==id);
            }

            //resultado são os atributos ID ,numero,nome , foto e trailer 
            //dos registos que cumprem com a condiçao da query
            var resultado = query
                .Select(a => new
                {
                    a.ID,
                    a.Numero,
                    a.Nome,
                    a.Foto,
                    a.Trailer
                })
                .ToList();

            return Ok(resultado);
        }
    }
}
