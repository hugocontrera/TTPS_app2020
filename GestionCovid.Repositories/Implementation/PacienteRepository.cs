using GestionCovid.Context;
using GestionCovid.Entities;

namespace GestionCovid.Repositories.Implementation
{
    public class PacienteRepository : Repository<Paciente>, IPacienteRepository
    {
        public DB_GestionCovidContext _dbContext => _context as DB_GestionCovidContext;

        public PacienteRepository(DB_GestionCovidContext context) : base(context)
        {
        }
    }
}
