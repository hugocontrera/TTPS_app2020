using GestionCovid.DTOs;
using System.Collections.Generic;

namespace GestionCovid.Services
{
    public interface IPacienteservice
    {
        
        IEnumerable<PacienteDto> GetAll();
        PacienteDto Get(string key);

    }
}
