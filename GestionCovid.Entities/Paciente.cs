using System;
using System.ComponentModel.DataAnnotations;


namespace GestionCovid.Entities
{
    public class Paciente
    {
        public Paciente()
        {
            Key = Guid.NewGuid().ToString();
        }

        [Key]
        public long Id { get; set; }
        public string Key { get; set; }
        [Required]
        public string Nombre { get; set; }
        [Required]
        public string Apellido { get; set; }
        [Required]
        public int Dni { get; set; }
        [Required]
        public string Domicilio { get; set; }
        [Required]
        public DateTime FechaNacimiento { get; set; }
        public string Contacto { get; set; }
        [Required]
        public DateTime FechaInicioSintomas { get; set; }
        public string AntecedentesPersonales { get; set; }
        public string ObraSocial { get; set; }
        [Required]
        public string Mail { get; set; }
        [Required]
        public DateTime FechaDiagnostico { get; set; }
        public string Descripcion { get; set; }
    }
}
