using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LittleBunny.Models
{
    public class Shift
    {
        public int Id { get; set; }
        public int EmployeeId { get; set; }
        public DateTime Date { get; set; }
        public TimeSpan StartTime { get; set; }
        public TimeSpan EndTime { get; set; }
        public string JobKey { get; set; }
    }
}
