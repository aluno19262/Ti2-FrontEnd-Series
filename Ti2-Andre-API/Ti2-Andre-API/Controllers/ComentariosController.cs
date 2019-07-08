﻿using System;
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
    public class ComentariosController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ComentariosController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Comentarios
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Comentarios>>> GetComentarios()
        {
            return await _context.Comentarios.ToListAsync();
        }

        // GET: api/Comentarios/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Comentarios>> GetComentarios(int id)
        {
            var comentarios = await _context.Comentarios.FindAsync(id);

            if (comentarios == null)
            {
                return NotFound();
            }

            return comentarios;
        }

        // PUT: api/Comentarios/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutComentarios(int id, Comentarios comentarios)
        {
            if (id != comentarios.ID)
            {
                return BadRequest();
            }

            _context.Entry(comentarios).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ComentariosExists(id))
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

        // POST: api/Comentarios
        [HttpPost]
        public async Task<ActionResult<Comentarios>> PostComentarios(Comentarios comentarios)
        {
            _context.Comentarios.Add(comentarios);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetComentarios", new { id = comentarios.ID }, comentarios);
        }

        // DELETE: api/Comentarios/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Comentarios>> DeleteComentarios(int id)
        {
            var comentarios = await _context.Comentarios.FindAsync(id);
            if (comentarios == null)
            {
                return NotFound();
            }

            _context.Comentarios.Remove(comentarios);
            await _context.SaveChangesAsync();

            return comentarios;
        }

        private bool ComentariosExists(int id)
        {
            return _context.Comentarios.Any(e => e.ID == id);
        }
    }
}
