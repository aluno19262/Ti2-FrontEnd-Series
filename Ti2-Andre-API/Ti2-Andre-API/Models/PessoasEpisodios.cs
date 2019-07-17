﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Ti2_Andre_API.Models
{
    public class PessoasEpisodios
    {
        [Key]
        public int ID { get; set; }

        public enum TipoDePapel
        {
            Ator,
            Realizador,
        };

        public TipoDePapel Papel { get; set; }

        [ForeignKey("Pessoa")]
        public int PessoaFK { get; set; }
        public virtual Pessoas Pessoa { get; set; }

        [ForeignKey("Episodio")]
        public int EpisodioFK { get; set; }
        public virtual Episodios Episodio { get; set; }
    }
}

/*
    Tabela PessoasEpisodios (papeis)
            - Id : id do papel (int)
            - tipoDePapel : uma pessoa ser ator ou realizador (enumerable)
            - papel : representa 1 papel 
            - PessoaFK : chave forasteira para a tabela Pessoas (int)
            - EpisodioFk : chave forasteira para a tabela Episodios (int)
*/
