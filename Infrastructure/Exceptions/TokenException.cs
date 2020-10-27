using System;
using System.Collections.Generic;
using System.Text;

namespace GestionCovid.Infrastructure.Exceptions
{
    public class TokenException: ArgumentException
    {
        public TokenException(string msg = null, ArgumentException inner = null) : base("Error de autenticación de la aplicación", inner)
        {

        }
    }
}
