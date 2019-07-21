using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Ti2_Andre_API.Models;
using Ti2_Andre_API.ViewModels;
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

        [HttpGet("PapelEpisodio/{id}")]
        //id do Episódio
        public IActionResult GetEpisodios(int id)
        {
            /*
             É lhe dado o id do episódio , e a query devolve as pessoas que estão 
             associadas a ele devolvendo ( o papel , pessoaFK,episodioFK,Foto e Nome)
             */
            var resultado = db.Episodios.Where(e => e.ID == id).SelectMany(e => e.PessoasEpisodios).Select(papel => new ListaPessoas { ID = papel.ID, Nome = papel.Pessoa.Nome, Foto = papel.Pessoa.Foto , ListaEpisodiosPessoas = papel.Pessoa.PessoasEpisodios.Select(p => new ListaEpisodiosPessoas { Papel = Enum.GetName(typeof(TipoDePapel),p.Papel),EpisodioFK=p.EpisodioFK,PessoaFK=p.PessoaFK }).ToList()});

            return Ok(resultado);
        }

        [HttpGet("PapelPessoa/{id}")]
        //id da Pessoa
        public IActionResult GetPessoas(int id)
        {
            /*
             É lhe dado o id da pessoa , e a query devolve os episódios que estão 
             associadas a ela, devolvendo ( o id da série , nome da série,id da temporada, nome da temporada, numero da temporada, foto do episódio, numero do episódio, nome do episódio e id do episódio)
             */

            var resultado = db.Pessoas.Where(e => e.ID == id).SelectMany(e => e.PessoasEpisodios).Select(info => new Episodios { Nome = info.Episodio.Nome , Numero = info.Episodio.Numero , ID = info.Episodio.ID,Foto =info.Episodio.Foto , Temporadas = new Temporadas { Nome = info.Episodio.Temporadas.Nome, Numero = info.Episodio.Temporadas.Numero,ID = info.Episodio.Temporadas.ID, Series = new Series { Nome = info.Episodio.Temporadas.Series.Nome , ID = info.Episodio.Temporadas.Series.ID } } });

            return Ok(resultado);
        }
    }

}
