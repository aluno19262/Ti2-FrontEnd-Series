using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Ti2_Andre_API.Models;

namespace Ti2_Andre_API.Controllers
{
    [Route("api/values/")]
    [ApiController]
    public class PessoasController : ControllerBase
    {
        private ApplicationDbContext db;

        public PessoasController(ApplicationDbContext db)
        {
            this.db = db;
        }

        //get de todas as pessoas
        // GET api/values
        [HttpGet("Pessoas")]
        [Produces("application/json")]
        public ActionResult GetPessoas()
        {
            return Ok(db.Pessoas);
        }
    }
}
