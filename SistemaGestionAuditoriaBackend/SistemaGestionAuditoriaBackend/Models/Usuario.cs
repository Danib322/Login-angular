using Microsoft.AspNetCore.Identity;
using SistemaGestionAuditoriaBackend.Models.Enums;

namespace SistemaGestionAuditoriaBackend.Models
{
    public class Usuario : IdentityUser
    {
        public Usuario() { }

        public Usuario(string userName, string cedula, TipoUsuario tipo)
        {
            this.UserName = userName;
            this.Cedula = cedula;
            this.Tipo = tipo;
        }

        public string? Cedula { get; set; }
        public TipoUsuario Tipo { get; set; }

        public virtual ICollection<Auditoria>? Auditoria { get; set; }
    }
}
