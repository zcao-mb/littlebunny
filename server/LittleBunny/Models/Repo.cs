using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LittleBunny.Models
{
    public class Repo
    {
        public IEnumerable<Employee> SearchEmployees()
        {
            return new List<Employee>()
            {
                new Employee{Id = 101, Name = "John" },
                new Employee{Id = 102, Name = "Jack" },
                new Employee{Id = 103, Name = "Abi" },
                new Employee{Id = 104, Name = "Alex" },
                new Employee{Id = 105, Name = "Tom" },
                new Employee{Id = 106, Name = "Apollo" },
                new Employee{Id = 107, Name = "Zeo" },
                new Employee{Id = 108, Name = "Sarah" },
                new Employee{Id = 121, Name = "Iris" },
                new Employee{Id = 122, Name = "Alina" },
                new Employee{Id = 124, Name = "Dula" }

            };
        }
    }
}
