
// using innerhtml

function say_hi() {
    var fname = document.getElementById('first_name').value;
    var lname = document.getElementById('last_name').value;
 
    var html = 'Hello <b>' + fname + '</b> ' + lname;
 
    document.getElementById('result').innerHTML = html;
}
 
document.getElementById('say').addEventListener('click', say_hi);

// using alert
function getInputValue() {
    // Selecting the input element and get its value 
    let inputVal = document.getElementsByClassName("inputClass")[0].value;
    // Displaying the value
    alert(inputVal);
}


// using prompt 
document.getElementById("name").onclick = function(){
	var name = prompt("Enter your name");
  document.getElementById("outputName").innerText = name;
}

document.getElementById("city").onclick = function(){
	var city = prompt("Enter your city");
  document.getElementById("outputCity").innerText = city;
}