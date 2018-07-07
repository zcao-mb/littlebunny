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
    public class EmployeeController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<Employee>> Get()
        {
            var repo = new Repo();
            return repo.SearchEmployees().ToArray();
        }
    }
}