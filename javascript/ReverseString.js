function reverseString() {
    input = document.getElementById("inputText").value;
    if(input == '') {
    document.getElementById("reveserStringResult").innerHTML = '';
    document.getElementById("result").style.color = "red";
    document.getElementById("result").innerHTML = "Please Enter a Valid Text ";
    return;
    }
    let reverseResult = "";
    document.getElementById("result").innerHTML = '';
    for ( var i = input.length -1; i >= 0; i--) {
    reverseResult = reverseResult + input[i];
    }
    document.getElementById("result").style.color = "blue";
    document.getElementById("reveserStringResult").innerHTML = "Reversed String: " + reverseResult;
}

