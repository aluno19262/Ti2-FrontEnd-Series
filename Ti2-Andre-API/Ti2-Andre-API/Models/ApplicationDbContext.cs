using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ti2_Andre_API.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
    : base(options)
        {
        }

        //datasets de todas os models da bd

        public DbSet<Series> Series { get; set; }
        public DbSet<Temporadas> Temporadas { get; set; }
        public DbSet<Episodios> Episodios { get; set; }
        public DbSet<Pessoas> Pessoas { get; set; }
        public DbSet<Editora> Editoras { get; set; }
        public DbSet<Comentarios> Comentarios { get; set; }
        public object Editora { get; internal set; }

        internal object Find(int id)
        {
            throw new NotImplementedException();
        }
    }
}
