using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Ti2_Andre_API.Models;
using Ti2_Andre_API.ViewModels;

namespace Ti2_Andre_API.Controllers
{
    [Route("api/values/")]
    [ApiController]
    public class EditorasController : ControllerBase
    {
        private ApplicationDbContext db;

        public EditorasController(ApplicationDbContext db)
        {
            this.db = db;
        }

        //get de todas as editoras
        // GET api/values
        [HttpGet("Editoras")]
        [Produces("application/json")]
        public ActionResult GetEditora()
        {
            return Ok(db.Editoras);
        }

        [HttpPost("Editoras/Create")]
        [Produces("application/json")]
        public IActionResult Create([FromForm] CreateEditora model)
        {
            // Da mesma forma que no MVC valido erros, faço o mesmo na API.
            // A diferença é que geramos uma "exceção" (400 Bad Request) em vez de
            // mostrarmos uma view.
            if (!ModelState.IsValid)
            {
                // Passar o ModelState para o BadRequest() faz 
                // com que os erros de validação fiquem no output.
                return BadRequest(ModelState);
            }

            var pastaFotografias = CaminhoParaFotos();

            if (!Directory.Exists(pastaFotografias))
            {
                Directory.CreateDirectory(pastaFotografias);
            }

            // Gerar caminho da fotografia (FotosAgentes/<guid>.jpg)
            var nomeFicheiroFoto = Guid.NewGuid().ToString() + Path.GetExtension(model.Logo.FileName);

            var caminhoFoto = Path.Combine(pastaFotografias, nomeFicheiroFoto);

            // Guardar os dados num ficheiro, copiando o output para o stream
            // infelizmente não existe o método SaveAs().
            using (Stream output = System.IO.File.OpenWrite(caminhoFoto))
            {
                model.Logo.CopyTo(output);
            }

            // Guardar o agente na BD.
            var novaEditora = new Editora
            {
                Nome = model.Nome,
                Logo = nomeFicheiroFoto,
            };

            db.Add(novaEditora);

            db.SaveChanges();

            // Criar o output.
            // Apesar de, neste caso, não existir risco de 
            // referências circulares, não custa nada fazer um output correto.
            var resultado = new
            {
                novaEditora.ID,
                novaEditora.Nome,
                novaEditora.Logo
            };

            // Se quisermos ser 100% corretos numa API,
            // então devemos indicar ONDE foi criado o objeto que 
            // se submeteu, usando o Status Code 201 Created.
            // Isto indica sucesso, tal como o 200 OK, mas também indica
            // no cabeçalho "Location", o link para o novo objeto.
            // Se quiserem simplificar, usem 200 OK.
            // O CreatedAtAction pode ser usado para isto. Tem os seguintes parâmetros:
            // 1. Nome do Action do controller.
            // 2. Parâmetros a enviar (para construir o link)
            // 3. Dados a enviar (como se fosse no OK)
            //return CreatedAtAction("GetOneById", new { id = resultado.ID }, resultado);
            return Ok(resultado);
        }
        /// <summary>
        /// Devolve o caminho ABSOLUTO para a pasta das fotos dos agentes.
        /// </summary>
        /// <returns></returns>
        private string CaminhoParaFotos()
        {
            var fullPath = Path.GetFullPath("wwwroot/Imagens");

            return fullPath;
        }
    }
}
