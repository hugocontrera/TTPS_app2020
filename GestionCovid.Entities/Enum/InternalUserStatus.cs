using Newtonsoft.Json;


namespace GestionCovid.Entities.Enum
{
    [JsonConverter(typeof(GenericEnumConverter))]
    public enum InternalUserStatus
    {
        Disabled = 0,
        Enabled = 1 
    }
}
