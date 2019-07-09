using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ti2_Andre_API.ViewModels
{
    public class EpisodioDetails
    {
        public int ID { get; set; }

        public int Numero { get; set; }

        public string Nome { get; set; }

        public string Sinopse { get; set; }

        public string Foto { get; set; }

        public string Trailer { get; set; }

        public double Classificacao { get; set; }
        
        public int TemporadaFK { get; set; }

        public int SerieFK { get; set; }
    }
}
