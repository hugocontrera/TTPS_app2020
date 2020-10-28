using AutoMapper;
using GestionCovid.DTOs;
using GestionCovid.DTOs.Request;
using GestionCovid.Entities;
using GestionCovid.Entities.Common;
using GestionCovid.Entities.Enum;
using GestionCovid.Infrastructure;
using GestionCovid.Repositories;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;


namespace GestionCovid.Services.Implementation
{
    public class InternalUserService : IInternalUserService
    {
        private readonly ILogger<InternalUserService> _logger;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private TokenHelper _tokenHelper;

        public InternalUserService(ILogger<InternalUserService> logger, IUnitOfWork unitOfWork, IMapper mapper, TokenHelper tokenHelper)
        {
            _logger = logger;
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _tokenHelper = tokenHelper;
        }

        public string Login(InternalUserLoginRequest internalUserLoginRequest)
        {
            InternalUserResponse internalUser = this.GetInternalUserInformation(internalUserLoginRequest);
            if (internalUser == null)
                throw new Exception("Unauthorized");

            var tokenString = _tokenHelper.GenerateToken(internalUser);

            return tokenString;
        }

        public InternalUserDto Get(string key)
        {
            InternalUser internalUser = _unitOfWork.InternalUserRepository.FindEntity(x => x.Key == key);
            internalUser.ThrowNotFoundIfNull();

            return _mapper.Map<InternalUserDto>(internalUser);
        }

        public IEnumerable<InternalUserDto> GetAll()
        {
            IEnumerable<InternalUser> internalUsers =
                _unitOfWork.InternalUserRepository.GetAll();

            return _mapper.Map<IEnumerable<InternalUserDto>>(internalUsers);
        }

        public InternalUserResponse GetInternalUserInformation(InternalUserLoginRequest internalUserLoginRequest)
        {
            InternalUser internalUser = _unitOfWork.InternalUserRepository.FindEntity(
               x => x.Email == internalUserLoginRequest.Email && x.Password == internalUserLoginRequest.Password);

            

            return _mapper.Map<InternalUserResponse>(internalUser);
        }

        public void Create(string Email, string Password)
        {
            InternalUser internalUser = _unitOfWork.InternalUserRepository.FindEntity(x => x.Email == Email);
            internalUser.ThrowIfNotNull();

            var newInternalUser = new InternalUser();
            newInternalUser.Password = Password;
            newInternalUser.Email = Email;
            newInternalUser.Status = InternalUserStatus.Enabled;

            _unitOfWork.InternalUserRepository.Add(newInternalUser);
            _unitOfWork.Complete();
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