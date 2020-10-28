using GestionCovid.DTOs;
using GestionCovid.DTOs.Request;
using GestionCovid.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GestionCovid.Services
{
    public interface IInternalUserService
    {
        string Login(InternalUserLoginRequest internalUserLoginRequest);
        InternalUserResponse GetInternalUserInformation(InternalUserLoginRequest internalUserLoginRequest);
        IEnumerable<InternalUserDto> GetAll();
        InternalUserDto Get(string key);

        //InternalUserDto Update(InternalUserRequest updateInternalUserRequest);
        void Create(string Email, string Password);
        //void Remove(string key);
    }
}
