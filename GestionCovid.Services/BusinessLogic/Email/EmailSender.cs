using System.Net;
using System.Net.Mail;
using Microsoft.Extensions.Configuration;
using GestionCovid.Configuration;
using GestionCovid.Constants;

namespace GestionCovid.Services.BusinessLogic
{
    public class EmailSender
    {
        private readonly IConfiguration _configuration;

        private SmtpConfiguration SmtpConfiguration => _configuration.GetSection(ConfigurationSections.SmtpConfiguration)
                                                            .Get<SmtpConfiguration>();

        public EmailSender(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        //public void SendRejectedRequestEmail(Organization organization)
        //{

        //    var client = CreateSmtpClient();

        //    MailMessage mailMessage = new MailMessage();
        //    mailMessage.To.Add(organization.ResponsableEmail);
        //    mailMessage.To.Add("marcos.sauer39@ethereal.email");
        //    mailMessage.Subject = "Solicitud rechazada - Banco de alimentos";
        //    mailMessage.Body = "Estimado/a " + organization.ResponsableFirstName + " " + organization.ResponsableLastName + ". Lamentamos informarle que su solicitud fué rechazada, por cualquier consulta, contáctenos mediante nuestra web";
        //    mailMessage.From = new MailAddress(SmtpConfiguration.Sender);
        //    client.SendAsync(mailMessage, "");
        //}

        private SmtpClient CreateSmtpClient()
        {
            SmtpClient client = new SmtpClient(SmtpConfiguration.ServerUrl);
            client.UseDefaultCredentials = false;

            client.Credentials = new NetworkCredential(SmtpConfiguration.User, SmtpConfiguration.Password);
            client.EnableSsl = SmtpConfiguration.Tls;
            client.Port = SmtpConfiguration.Port;

            return client;
        }
       


    }
}
