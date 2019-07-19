using System.Linq;
using Microsoft.AspNetCore.Mvc;
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


        [HttpGet("PapelEpisodio/{id}")]
        //id do episodio
        public IActionResult GetPessoas(int id)
        {
            IQueryable<PessoasEpisodios> queryPapeis = db.PessoasEpisodios;
            IQueryable<Pessoas> queryPessoas = db.Pessoas;

            queryPapeis = queryPapeis.Where(e => e.EpisodioFK == id);
            var resultado = queryPapeis.Select(a => a.PessoaFK).ToList();

            queryPessoas = queryPessoas.Select(m => new Pessoas { Nome = m.Nome, Foto = m.Foto, ID = m.ID,PessoasEpisodios = m.PessoasEpisodios}).Where(p => resultado.Contains(p.ID));

            return Ok(queryPessoas);
        }

        [HttpGet("PapelPessoa/{id}")]
        //id da Pessoa
        public IActionResult GetEpisodios(int id)
        {
            IQueryable<PessoasEpisodios> queryPapeis = db.PessoasEpisodios;
            IQueryable<Episodios> queryEpisodios = db.Episodios;

            queryPapeis = queryPapeis.Where(e => e.PessoaFK == id);
            var resultado = queryPapeis.Select(a => a.EpisodioFK).ToList();

            queryEpisodios = queryEpisodios.Select(m => new Episodios { Foto=m.Foto,Nome = m.Nome, Numero = m.Numero, ID = m.ID }, new Temporadas { Nome = t.Episodios.Temporadas.Nome }).Where(p => resultado.Contains(p.ID)) }

            return Ok(queryEpisodios);
        }
    }

}
