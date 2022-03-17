using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;

namespace WhitespaceCounterService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WhitespaceCounterService : ControllerBase
    {
        private readonly ILogger<WhitespaceCounterService> _logger;
        public WhitespaceCounterService(ILogger<WhitespaceCounterService> logger)
        {
            _logger = logger;
        }

        [HttpGet("{inputString}")]
        public int Get(string inputString)
        {
            _logger.LogInformation($"Received request to count whitespace for {inputString}");
            _logger.LogInformation($"Counted {inputString.Count(Char.IsWhiteSpace)} whitespace characters");
            return inputString.Count(Char.IsWhiteSpace);
        }
    }
}
