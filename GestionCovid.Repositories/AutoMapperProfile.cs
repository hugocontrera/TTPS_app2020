using AutoMapper;
using GestionCovid.DTOs;
using GestionCovid.Entities;

namespace GestionCovid.Repositories
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {

            CreateMap<InternalUser, InternalUserDto>(MemberList.None);

            CreateMap<InternalUser, InternalUserResponse>(MemberList.None);

            CreateMap<Paciente, PacienteDto>(MemberList.None);
        }

    }
}
