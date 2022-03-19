let WHITESPACE_REMOVAL_SERVICE_URL = 'http://192.168.1.127:5000/WhitespaceRemovalService/'
let WHITESPACE_COUNTER_SERVICE_URL = 'http://192.168.1.127:5001/WhitespaceCounterService/'

function GetWhitespaceResult() {
    var inputString = document.getElementById("inputString").value;
    GetWhitespaceRemovalResult(inputString)
    GetWhitespaceCountResult(inputString)
}

function GetWhitespaceRemovalResult(inputString) {
  httpGetAsync(WHITESPACE_REMOVAL_SERVICE_URL + inputString, function(result){
    console.log("Received whitespace removal service response: " + result);
    document.getElementById("stripped-whitespace-result").innerHTML = "Stripped Whitespace: " + result;
  });
}

function GetWhitespaceCountResult(inputString) {
  httpGetAsync(WHITESPACE_COUNTER_SERVICE_URL + inputString, function(result){
    console.log("Received whitespace count service response: " + result);
    document.getElementById("whitespace-count-result").innerHTML = "Number of Whitespace Characters: " + result;
  });
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
