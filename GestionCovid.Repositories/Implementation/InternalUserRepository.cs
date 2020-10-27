using GestionCovid.Context;
using GestionCovid.Entities;

namespace GestionCovid.Repositories.Implementation
{
    public class InternalUserRepository : Repository<InternalUser>, IInternalUserRepository
    {
        public DB_GestionCovidContext _dbContext => _context as DB_GestionCovidContext;

        public InternalUserRepository(DB_GestionCovidContext context) : base(context)
        {
        }
    }
}
