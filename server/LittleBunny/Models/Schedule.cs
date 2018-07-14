using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LittleBunny.Models
{
    public class Schedule
    {
        public string Site { get; set; }

        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        public IEnumerable<RosterDay> Days { get; set; }
        public IEnumerable<Employee> Employees { get; set; }
        public IEnumerable<Shift> Shifts { get; set; }
    }
}
