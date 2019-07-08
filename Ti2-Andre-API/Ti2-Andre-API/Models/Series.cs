using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Ti2_Andre_API.Models
{
    public class Series
    {

       public int ID { get; set; }

        public string Nome { get; set; }

        public string Genero { get; set; }

        public string Foto { get; set; }

        public string Sinopse { get; set; }

        public string Video { get; set; }

        public double Classificacao { get; set; }

        public virtual ICollection<Temporadas> Temporadas { get; set; }

        [ForeignKey("Editora")]
        public int EditoraFK { get; set; }
        public virtual Editora Editora { get; set; }
    }
}

/*
    Tabela Series
            - Id : id da série (int)
            - Nome : nome da série (string)
            - Genero : genero da série (string)
            - Foto : fotografia/imagem da série (string)
            - Sinopse : sinopse/descriçao da série (string)
            - Video : trailler da série (string)
            - Classificacao : classificação da série (double)
            - EditoraFK : chave forasteira para a tabela Editora (int)
*/
