using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LittleBunny.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LittleBunny.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RosterController : ControllerBase
    {
        [HttpGet("employees")]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees()
        {
            await Task.Delay(2000);

            var repo = new Repo();
            return repo.SearchEmployees().ToArray();
        }

        [HttpPost("days")]
        public async Task<ActionResult<IEnumerable<RosterDay>>> SearchDays( [FromBody] SearchDaysRequest request)
        {
            await Task.Delay(1000);

            var repo = new Repo();
            return repo.SearchDays(request.StartDate, request.EndDate).ToArray();
        }

        [HttpPost("shifts")]
        public async Task<ActionResult<IEnumerable<Shift>>> SearchShifts( [FromBody] SearchShiftsRequest request)
        {
            await Task.Delay(2000);

            var repo = new Repo();
            return repo.SearchShifts(request.StartDate, request.EndDate).ToArray();
        }
    }

    public class SearchDaysRequest
    {
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }

    public class SearchShiftsRequest
    {
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}