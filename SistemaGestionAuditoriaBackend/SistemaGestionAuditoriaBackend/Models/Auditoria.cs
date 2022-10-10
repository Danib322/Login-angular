namespace SistemaGestionAuditoriaBackend.Models
{
    public partial class Auditoria
    {
        public int Id { get; set; }
        public string? Empresa { get; set; }
        public string? Estado { get; set; }
        public string? AuditorId { get; set; }
        public int CiudadId { get; set; }

        public virtual Usuario? Auditor { get; set; }
        public virtual Ciudad? Ciudad { get; set; }
    }
}
