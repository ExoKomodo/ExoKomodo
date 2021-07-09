using System;

namespace ExoKomodo.Enums.Helpers
{
    public class EnumHelper<T>
    where T : Enum
    {
        public static bool Equals(T obj, string other)
        {
            return Equals(obj, ToEnum(other));
        }

        public static bool IsEnum(T obj)
        {
            return Enum.IsDefined(typeof(T), obj);
        }

        public static bool IsEnum(string obj)
        {
            return IsEnum(ToEnum(obj));
        }

        public static string ToString(T obj)
        {
            return Enum.GetName(typeof(T), obj);
        }

        public static T ToEnum(string obj)
        {
            return (T)Enum.Parse(typeof(T), obj);
        }
    }
}