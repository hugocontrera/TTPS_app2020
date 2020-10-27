using GestionCovid.DTOs.Response;
using System;


namespace GestionCovid.Infrastructure.Exceptions
{
    public class ValidationException : ArgumentException
    {
        public BaseResponse _baseResponse { get; set; }

        public ValidationException(BaseResponse baseResponse, ArgumentException inner = null)  
        {
            _baseResponse = baseResponse;
        }
    }
}
