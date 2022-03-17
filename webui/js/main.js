let WHITESPACE_REMOVAL_SERVICE_URL = 'http://localhost:5000/WhitespaceRemovalService/'
let WHITESPACE_COUNTER_SERVICE_URL = 'http://localhost:5000/WhitespaceCounterService/'

function GetWhitespaceResult() {
    var inputString = document.getElementById("inputString").value;
    httpGetAsync(WHITESPACE_REMOVAL_SERVICE_URL + inputString, function(result){
        console.log(result);
    });
    document.getElementById("stripped-whitespace-result").innerHTML = "Stripped Whitespace: " + inputString;
    document.getElementById("whitespace-count-result").innerHTML = "Number of Whitespace Characters: 3";
}

function httpGetAsync(theUrl, callback) {
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.onreadystatechange = function () {
      if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200)
        callback(xmlHttpReq.responseText);
    }
    xmlHttpReq.open("GET", theUrl, true); // true for asynchronous 
    xmlHttpReq.send(null);
  }
