using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Ti2_Andre_API.Models;
using static Ti2_Andre_API.Models.PessoasEpisodios;

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


        //[HttpGet("PapelEpisodio/{id}")]
        ////id do episodio
        //public IActionResult GetPessoas(int id)
        //{
        //    IQueryable<PessoasEpisodios> queryPapeis = db.PessoasEpisodios;
        //    IQueryable<Pessoas> queryPessoas = db.Pessoas;

        //    queryPapeis = queryPapeis.Where(e => e.EpisodioFK == id);
        //    var resultado = queryPapeis.Select(a => a.PessoaFK).ToList();

        //    queryPessoas = queryPessoas.Select(m => new Pessoas { Nome = m.Nome, Foto = m.Foto, ID = m.ID,PessoasEpisodios = m.PessoasEpisodios}).Where(p => resultado.Contains(p.ID));

        //    return Ok(queryPessoas);
        //}

        //[HttpGet("PapelPessoa/{id}")]
        ////id da Pessoa
        //public IActionResult GetEpisodios(int id)
        //{
        //    IQueryable<PessoasEpisodios> queryPapeis = db.PessoasEpisodios;
        //    IQueryable<Episodios> queryEpisodios = db.Episodios;

        //    queryPapeis = queryPapeis.Where(e => e.PessoaFK == id);
        //    var resultado = queryPapeis.Select(a => a.EpisodioFK).ToList();

        //    queryEpisodios = queryEpisodios.Select(m => new Episodios { Foto = m.Foto, Nome = m.Nome, Numero = m.Numero, ID = m.ID }).Where(p => resultado.Contains(p.ID)) ;

        //    return Ok(queryEpisodios);
        //}


        [HttpGet("PapelEpisodio/{id}")]
        //id da Pessoa
        public IActionResult GetEpisodios(int id)
        {

            var resultado = db.Episodios.Where(e => e.ID == id).SelectMany(e => e.PessoasEpisodios).Select(papel => new Pessoas { ID = papel.ID, Nome = papel.Pessoa.Nome, Foto = papel.Pessoa.Foto ,PessoasEpisodios = papel.Pessoa.PessoasEpisodios });

            return Ok(resultado);
        }

        [HttpGet("PapelPessoa/{id}")]
        //id da Pessoa
        public IActionResult GetPessoas(int id)
        {

            var resultado = db.Pessoas.Where(e => e.ID == id).SelectMany(e => e.PessoasEpisodios).Select(info => new Episodios { Nome = info.Episodio.Nome , Numero = info.Episodio.Numero , ID = info.Episodio.ID,Foto =info.Episodio.Foto , Temporadas = new Temporadas { Nome = info.Episodio.Temporadas.Nome, Numero = info.Episodio.Temporadas.Numero,ID = info.Episodio.Temporadas.ID, Series = new Series { Nome = info.Episodio.Temporadas.Series.Nome , ID = info.Episodio.Temporadas.Series.ID } } });

            return Ok(resultado);
        }
    }

}
