using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Ti2_Andre_API.ViewModels
{
    //class auxiliar para fazer editde uma editora
    public class UpdateEditora
    {
        [Required]
        public string Nome { get; set; }
    }
}
