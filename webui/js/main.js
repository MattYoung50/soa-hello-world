document.getElementById('submit-button').addEventListener('click', function() {
    var value = document.getElementById('input').value;
    // Do what you want with the value
});  

function myFunction() {
    var inputString = document.getElementById("inputString").value;
    document.getElementById("stripped-whitespace-result").innerHTML = "Stripped Whitespace: " + inputString;
    document.getElementById("whitespace-count-result").innerHTML = "Number of Whitespace Characters: 3";
}