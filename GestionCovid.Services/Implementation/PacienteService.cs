using AutoMapper;
using GestionCovid.DTOs;
using GestionCovid.Entities;
using GestionCovid.Entities.Common;
using GestionCovid.Repositories;
using System.Collections.Generic;


namespace GestionCovid.Services.Implementation
{
    public class PacienteService : IPacienteService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public PacienteService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public PacienteDto Get(string key)
        {
            Paciente paciente = _unitOfWork.PacienteRepository.FindEntity(x => x.Key == key);
            paciente.ThrowNotFoundIfNull();

            return _mapper.Map<PacienteDto>(paciente);
        }

        public IEnumerable<PacienteDto> GetAll()
        {
            IEnumerable<Paciente> pacientes =
                _unitOfWork.PacienteRepository.GetAll();

            return _mapper.Map<IEnumerable<PacienteDto>>(pacientes);
        }

        

        //public InternalUserDto Update(InternalUserRequest updateInternalUserRequest)
        //{
        //    InternalUser internalUser = _unitOfWork.InternalUserRepository.FindEntity(x.Key == updateInternalUserRequest.Key, source => source.Include(a => a.Role).ThenInclude(b => b.RolePermission));
        //    internalUser.ThrowNotFoundIfNull();

        //    _mapper.Map(updateInternalUserRequest, internalUser);
        //    _unitOfWork.InternalUserRepository.Update(internalUser);
        //    _unitOfWork.Complete();

        //    return _mapper.Map<InternalUserDto>(internalUser);
        //}


        //public void Remove(string key)
        //{
        //    InternalUser internalUser = _unitOfWork.InternalUserRepository.FindEntity(x => x.InternalUserType == InternalUserType.ActiveDirectory && x.Key == key);
        //    internalUser.ThrowNotFoundIfNull();

        //    _unitOfWork.InternalUserRepository.Remove(internalUser.Id);
        //    _unitOfWork.Complete();
        //}
    }
}