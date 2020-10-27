using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;

namespace GestionCovid.Entities.Enum
{
    public class GenericEnumConverter : StringEnumConverter
    {
        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            return base.ReadJson(reader, objectType, existingValue, serializer);
        }
    }
}
