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
    public class ScheduleController : ControllerBase
    {
        [HttpPost("fetch")]
        public async Task<ActionResult<Schedule>> Fetch( [FromQuery]string site, FetchScheduleRequest request)
        {
            await Task.Delay(1000);

            var repo = new Repo();
            return repo.FetchSchedule(site, request.StartDate, request.EndDate);
        }
    }


    public class FetchScheduleRequest
    {
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}