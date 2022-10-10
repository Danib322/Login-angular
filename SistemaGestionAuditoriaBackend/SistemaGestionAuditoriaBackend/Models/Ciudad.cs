namespace SistemaGestionAuditoriaBackend.Models
{
    public class Ciudad
    {
        public int Id { get; set; }
        public string? Nombre { get; set; }

        public virtual ICollection<Auditoria>? Auditoria { get; set; }
    }
}
