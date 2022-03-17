# Contents
1. `webui` - contains the web page and web server scripts
2. `whitespace-removal-service` - responsible for receiving strings with whitespace and returning a response with whitespace removed
3. `whitespace-counter-service` - responsible for receiving strings with whitespace and returning a response with the number of whitespace characters in the string 

# Some Example API Calls
- `httprepl http://localhost:5000`
- `curl http://localhost:5000/WhitespaceRemovalService/{some%20String} -v`

# References
- [Microsoft ASP.Net Web API Getting Started Guide](https://docs.microsoft.com/en-us/learn/modules/build-web-api-aspnet-core/3-exercise-create-web-api)
