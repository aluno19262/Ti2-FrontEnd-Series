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
    public class PessoasEpisodiosController : ControllerBase
    {
        private ApplicationDbContext db;

        public PessoasEpisodiosController(ApplicationDbContext db)
        {
            this.db = db;
        }


        [HttpGet("Papel/{id}")]
        public IActionResult GetAll(int id)
        {
            //query linq na tabela das PessoasEpisodios
            IQueryable<PessoasEpisodios> queryPapeis = db.PessoasEpisodios;
            //query linq na tabela das temporadas
            IQueryable<Pessoas> queryPessoas = db.Pessoas;

            queryPapeis = queryPapeis.Where(e => e.EpisodioFK == id);


            var resultado = queryPapeis
                .Select(a => new
                {
                    a.PessoaFK,
                })
                .ToList();

            queryPessoas = foreach { queryPessoas.Select(m => new { m.Nome, m.Foto, m.ID }).Where(p => p.ID == queryPapeis.id); };



            return Ok(resultado);
        }

    }

}
