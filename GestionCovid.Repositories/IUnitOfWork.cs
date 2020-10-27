using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GestionCovid.Repositories
{
    public interface IUnitOfWork
    {

        IInternalUserRepository InternalUserRepository { get; }

        void GenerateBaseData();

        int Complete();
        Task<int> CompleteAsync();
        void CreateMigrations();
    }
}
