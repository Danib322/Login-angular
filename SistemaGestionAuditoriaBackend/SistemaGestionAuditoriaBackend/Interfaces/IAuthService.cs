using System;
using SistemaGestionAuditoriaBackend.Models.Enums;

namespace SistemaGestionAuditoriaBackend.Interfaces
{
    public interface IAuthService
    {
        public Task<string> Authenticate(string userName, string password);
        public Task Register(string userName, string password, string cedula, TipoUsuario tipo);
    }
}

