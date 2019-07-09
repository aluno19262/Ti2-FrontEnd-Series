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
            // Linq - queries dinâmicas.
            // Muitas vezes, os parâmetros de pesquisa são opcionais.
            // Logo, podemos compor uma query Linq começando a partir da
            // tabela dos agentes.
            IQueryable<Temporadas> query = db.Temporadas;

            // Se o termo de pesquisa estiver definido, então compõe-se
            // a query com um .Where para filtrar no nome, usando o .Contains
            // (LIKE em SQL)
            // O string.IsNullOrWhiteSpace(texto) devolve verdadeiro se
            // texto != null && texto != "" && texto.Trim() != ""
            if (!string.IsNullOrWhiteSpace(pesquisa))
            {
                pesquisa = pesquisa.ToLower().Trim();
                // Como queries são imutáveis, guardamos a nova query na variável acima.
                // Convém fazer o lower case (minúsculas) para facilitar as pesquisas.
                query = query.Where(a => a.Nome.ToLower().Contains(pesquisa)&&a.SerieFK==id);
            }

            // Usar o .Select para remover as referências circulares
            // Agentes <-> Multas, que iriam fazer com que ocorressem
            // erros ao produzir o JSON.
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
