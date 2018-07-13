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

        public IEnumerable<RosterDay> SearchDays(DateTime startDate, DateTime endDate)
        {
            var result = new List<RosterDay>();
            int serial = 1;

            var date = startDate.Date;
            while(date <= endDate)
            {
                result.Add(new RosterDay
                {
                    SerialNo = serial,
                    Date = date
                });
                serial++;
                date = date.AddDays(1);
            }

            return result;
        }

        public IEnumerable<Shift> SearchShifts(DateTime startDate, DateTime endDate)
        {
            var result = new List<Shift>();

            result.Add(new Shift
            {
                Id = 1,
                EmployeeId = 101,
                Date = startDate,
                StartTime = new TimeSpan(9, 0, 0),
                EndTime = new TimeSpan(14, 30, 0),
                JobKey = "Kitchen"
            });


            result.Add(new Shift
            {
                Id = 2,
                EmployeeId = 101,
                Date = startDate,
                StartTime = new TimeSpan(11, 30, 0),
                EndTime = new TimeSpan(16, 00, 0),
                JobKey = "Clean"
            });

            result.Add(new Shift
            {
                Id = 3,
                EmployeeId = 102,
                Date = endDate,
                StartTime = new TimeSpan(11, 0, 0),
                EndTime = new TimeSpan(15, 30, 0),
                JobKey = "Kitchen"
            });

            return result;
        }
    }
}
