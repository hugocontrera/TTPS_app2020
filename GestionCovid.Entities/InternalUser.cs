using GestionCovid.Entities.Enum;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace GestionCovid.Entities
{
    public class InternalUser
    {
        public InternalUser()
        {
            Key = Guid.NewGuid().ToString();
        }

        [Key]
        public long Id { get; set; }
        public string Key { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string Email { get; set; }
        public InternalUserStatus Status { get; set; }

    }
}
