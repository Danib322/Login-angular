using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace SistemaGestionAuditoriaBackend.Models
{
    public partial class AuditoriasDBContext : IdentityDbContext<Usuario>
    {
        public AuditoriasDBContext()
        {
        }

        public AuditoriasDBContext(DbContextOptions<AuditoriasDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Auditoria> Auditorias { get; set; } = null!;
        public virtual DbSet<Ciudad> Ciudades { get; set; } = null!;
        public virtual DbSet<Usuario> Usuarios { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
