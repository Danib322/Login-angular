using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using SistemaGestionAuditoriaBackend.Exceptions;
using SistemaGestionAuditoriaBackend.Interfaces;
using SistemaGestionAuditoriaBackend.Models;
using SistemaGestionAuditoriaBackend.Models.Enums;

namespace SistemaGestionAuditoriaBackend.Services
{
    public class AuthService : IAuthService
    {
        private readonly UserManager<Usuario> userManager;
        private readonly SignInManager<Usuario> signInManager;

        public AuthService(UserManager<Usuario> userManager, SignInManager<Usuario> signInManager)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
        }

        public async Task<string> Authenticate(string userName, string password)
        {
            var user = await userManager.FindByNameAsync(userName);
            if (user == null)
            {
                throw new UserNotFoundException();
            }

            var signInResult = await signInManager.PasswordSignInAsync(userName, password, false, false);
            if(!signInResult.Succeeded)
            {
                throw new InvalidPasswordException();
            }

            //var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
            //var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
            //var tokeOptions = new JwtSecurityToken(issuer: "Daniel", expires: DateTime.Now.AddMinutes(6), signingCredentials: signinCredentials);
            //var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
            //return tokenString;
            var x = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345")), SecurityAlgorithms.HmacSha256Signature);
            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenDescriptor = new SecurityTokenDescriptor()
            {
                Expires = DateTime.UtcNow.AddMinutes(6),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345")), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        public async Task Register(string userName, string password, string cedula, TipoUsuario tipo)
        {
            var registerResult = await userManager.CreateAsync(new Usuario(userName, cedula, tipo), password);
            if (!registerResult.Succeeded)
            {
                throw new RegisterException(registerResult.Errors);
            }
        }
    }
}

