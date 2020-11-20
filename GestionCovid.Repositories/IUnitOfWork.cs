using System.Threading.Tasks;

namespace GestionCovid.Repositories
{
    public interface IUnitOfWork
    {

        IInternalUserRepository InternalUserRepository { get; }

        IPacienteRepository PacienteRepository { get; }

        void GenerateBaseData();

        int Complete();
        Task<int> CompleteAsync();
        void CreateMigrations();
    }
}
