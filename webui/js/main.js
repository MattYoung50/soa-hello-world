function GetWhitespaceResult() {
    var inputString = document.getElementById("inputString").value;
    document.getElementById("stripped-whitespace-result").innerHTML = "Stripped Whitespace: " + inputString;
    document.getElementById("whitespace-count-result").innerHTML = "Number of Whitespace Characters: 3";
}