using GestionCovid.Entities;
using GestionCovid.Entities.Enum;
using System;

namespace GestionCovid.DTOs
{
    public class InternalUserResponse
    {
        public string Key { get; set; }
        public string Password { get; set; }

        public string Email { get; set; }
        public InternalUserStatus Status { get; set; }

        public DateTime RegisterDate { get; set; }

    }
}