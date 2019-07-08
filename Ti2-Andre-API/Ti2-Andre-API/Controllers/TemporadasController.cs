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
    [Route("api/[controller]")]
    [ApiController]
    public class TemporadasController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TemporadasController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Temporadas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Temporadas>>> GetTemporadas()
        {
            return await _context.Temporadas.ToListAsync();
        }

        // GET: api/Temporadas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Temporadas>> GetTemporadas(int id)
        {
            var temporadas = await _context.Temporadas.FindAsync(id);

            if (temporadas == null)
            {
                return NotFound();
            }

            return temporadas;
        }

        // PUT: api/Temporadas/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTemporadas(int id, Temporadas temporadas)
        {
            if (id != temporadas.ID)
            {
                return BadRequest();
            }

            _context.Entry(temporadas).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TemporadasExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Temporadas
        [HttpPost]
        public async Task<ActionResult<Temporadas>> PostTemporadas(Temporadas temporadas)
        {
            _context.Temporadas.Add(temporadas);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTemporadas", new { id = temporadas.ID }, temporadas);
        }

        // DELETE: api/Temporadas/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Temporadas>> DeleteTemporadas(int id)
        {
            var temporadas = await _context.Temporadas.FindAsync(id);
            if (temporadas == null)
            {
                return NotFound();
            }

            _context.Temporadas.Remove(temporadas);
            await _context.SaveChangesAsync();

            return temporadas;
        }

        private bool TemporadasExists(int id)
        {
            return _context.Temporadas.Any(e => e.ID == id);
        }
    }
}
