﻿using System;
using System.Text;
using Microsoft.AspNetCore.Identity;

namespace SistemaGestionAuditoriaBackend.Exceptions
{
    public class RegisterException : Exception
    {
        public readonly string errors;

        public RegisterException(IEnumerable<IdentityError> identityErrors)
        {
            StringBuilder sb = new StringBuilder();
            foreach(var error in identityErrors)
            {
                sb.Append(error.Description + "\n");
            }
            errors = sb.ToString();
        }


    }
}

