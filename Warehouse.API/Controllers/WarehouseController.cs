using Microsoft.AspNetCore.Mvc;
using Warehouse.Entities;

namespace Warehouse.API.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class WarehouseController : ControllerBase
    {
        private readonly ILogger<WarehouseController> _logger;

        public WarehouseController(ILogger<WarehouseController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Car> GetCars()
        {
            return Enumerable.Range(1, 5).Select(index => new Car
            {
            })
            .ToArray();
        }
    }
}