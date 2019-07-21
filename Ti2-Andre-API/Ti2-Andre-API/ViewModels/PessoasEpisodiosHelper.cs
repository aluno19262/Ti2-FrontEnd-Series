using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ti2_Andre_API.ViewModels
{
    //class auxiliar á queri que disponibiliza os episódios associados a 1 pessoa
    public class ListaPessoas
    {
        public int ID { get; set; }

        public string Nome { get; set; }

        public string Foto { get; set; }

        public virtual IEnumerable<ListaEpisodiosPessoas> ListaEpisodiosPessoas { get; set; }
    }
    public class ListaEpisodiosPessoas
    {

        public int PessoaFK { get; set; }

        public int EpisodioFK { get; set; }

        public string Papel { get; set; }

    }
}
