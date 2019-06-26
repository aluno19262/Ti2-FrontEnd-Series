using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Ti2_Andre_API.Models
{
    public class Comentarios
    {
        [Key]
        public int ID { get; set; }

        public string Texto { get; set; }

        [ForeignKey("Episodios")]
        public int EpisodioFK { get; set; }
        public virtual Episodios Episodios { get; set; }

        //[ForeignKey("Utilizadores")]
        //public int UtilizadorFK { get; set; }
        //public virtual Utilizadores Utilizadores { get; set; }
    }
}
