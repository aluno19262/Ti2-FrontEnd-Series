using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Ti2_Andre_API.Models
{
    public class Episodios
    {
        [Key]
        public int ID { get; set; }

        public int Numero { get; set; }

        public string Nome { get; set; }

        public string Sinopse { get; set; }

        public string Foto { get; set; }

        public string Trailer { get; set; }

        public double Classificacao { get; set; }

        [ForeignKey("Temporadas")]
        public int TemporadaFK { get; set; }
        public virtual Temporadas Temporadas { get; set; }

        public virtual ICollection<Comentarios> ListaDeComentarios { get; set; }

        public virtual ICollection<PessoasEpisodios> PessoasEpisodios { get; set; }
    }
}

/*
    Tabela Episodios
            - ID : id do episódio (int)
            - Numero : numero do episódio (int)
            - Nome : nome do episódio (string)
            - Sinopse : sinopse/descirção do episódio (string)
            - Foto : fotografia/imagem do episódio (string)
            - Trailer : trailer do episódio (string)
            - Classificacao : Classificação do episódio (double)
            - TemporadaFK : chave forasteira para a tabela Temporadas (int)
            - ListaDeComentarios : lista de comentários (ICollection)
*/
