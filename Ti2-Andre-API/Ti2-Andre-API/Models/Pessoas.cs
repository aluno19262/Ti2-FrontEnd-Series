using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Ti2_Andre_API.Models
{
    public class Pessoas
    {
        public int ID { get; set; }

        [Required(ErrorMessage = "O {0} é de preenchimento obrigatório!")]
        public string Nome { get; set; }

        public string Foto { get; set; }

        public virtual ICollection<PessoasEpisodios> PessoasEpisodios { get; set; }
    }
}

/*
    Tabela Pessoas:
            - ID : id da pessoa (int)
            - Nome : nome da pessoa (string)
            - Foto : fotografia/imagem da pessoa (string)
*/
