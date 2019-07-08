using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Ti2_Andre_API.Models
{
    public class Temporadas
    {
        public int ID { get; set; }

        public int Numero { get; set; }

        public string Nome { get; set; }


        public string Foto { get; set; }

        public string Trailer { get; set; }

        [ForeignKey("Series")]
        public int SerieFK { get; set; }
        public virtual Series Series { get; set; }

        public virtual ICollection<Episodios> Episodios { get; set; }
    }
}

/*
    Tabela Temporadas
            - Id : id da temporada (int)
            - Numero : numeor da temporada (int)
            - Nome : nome da temporada (string)
            - Foto : fotografia/imagem da temporada (string)
            - Trailer : trailler da temporada (string)
            - SeriesFK : chave forasteira para a tabela Series (int)
            - Episodios : lista de Episódios  (ICollection)
*/

