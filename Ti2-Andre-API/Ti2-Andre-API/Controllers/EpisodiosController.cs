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
    public class EpisodiosController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public EpisodiosController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Episodios
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Episodios>>> GetEpisodios()
        {
            return await _context.Episodios.ToListAsync();
        }

        // GET: api/Episodios/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Episodios>> GetEpisodios(int id)
        {
            var episodios = await _context.Episodios.FindAsync(id);

            if (episodios == null)
            {
                return NotFound();
            }

            return episodios;
        }

        // PUT: api/Episodios/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEpisodios(int id, Episodios episodios)
        {
            if (id != episodios.ID)
            {
                return BadRequest();
            }

            _context.Entry(episodios).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EpisodiosExists(id))
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

        // POST: api/Episodios
        [HttpPost]
        public async Task<ActionResult<Episodios>> PostEpisodios(Episodios episodios)
        {
            _context.Episodios.Add(episodios);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEpisodios", new { id = episodios.ID }, episodios);
        }

        // DELETE: api/Episodios/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Episodios>> DeleteEpisodios(int id)
        {
            var episodios = await _context.Episodios.FindAsync(id);
            if (episodios == null)
            {
                return NotFound();
            }

            _context.Episodios.Remove(episodios);
            await _context.SaveChangesAsync();

            return episodios;
        }

        private bool EpisodiosExists(int id)
        {
            return _context.Episodios.Any(e => e.ID == id);
        }
    }
}
