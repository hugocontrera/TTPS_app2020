using GestionCovid.Entities;
using Microsoft.EntityFrameworkCore;

namespace GestionCovid.Context
{
    public partial class DB_GestionCovidContext : DbContext
    {
        public DB_GestionCovidContext()
        {
        }

        public DB_GestionCovidContext(DbContextOptions<DB_GestionCovidContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.4-servicing-10062");

        }

        public virtual DbSet<InternalUser> InternalUsers { get; set; }
    }
}
