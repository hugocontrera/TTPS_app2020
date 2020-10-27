using System;

namespace GestionCovid.Infrastructure
{
    public class AppToken
    {
        public string Token { get; private set; }
        public double ExpiresIn { get; set; }
        private DateTime Date { get; set; }

        public void setToken(String newToken)
        {
            Date = DateTime.Now;
            Token = newToken;
        }

        public bool isValid()
        {
            if (String.IsNullOrEmpty(Token))
            {
                return false;
            }
            else
            {
                double result = DateTime.Now.Subtract(Date).TotalSeconds;

                if (result > ExpiresIn)
                    return false;
            }
            return true;
        }
    }
}
