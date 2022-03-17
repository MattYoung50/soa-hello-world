using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace WhitespaceRemovalService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WhitespaceRemovalService : ControllerBase
    {
        private readonly ILogger<WhitespaceRemovalService> _logger;
        public WhitespaceRemovalService(ILogger<WhitespaceRemovalService> logger)
        {
            _logger = logger;
        }

        [HttpGet("{inputString}")]
        public string Get(string inputString)
        {
            _logger.LogInformation($"Received request to trim whitespace for {inputString}");
            _logger.LogInformation($"Trimmed whitespace string is {inputString.Replace(" ", string.Empty)}");
            return inputString.Replace(" ", string.Empty);
        }
    }
}
