// Controller
//
// Get the string from the page
function getValue() {

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);

    displayString(revString);
}

// Logic
//
// Reverse the string
function reverseString(userString) {

    let revString = [];

    let strLen = userString.length;

    for (let index = strLen - 1; index >= 0; index--) {
        revString += userString[index];
    }

    return revString;
}

// View
//
// Display the reversed string to the user
function displayString(revString) {

    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;
    document.getElementById("alert").classList.remove("invisible");
}