function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phoneNumber = document.getElementById("username").value;

    var namePattern = /^[A-Za-z]+$/; // Regex to match letters only
    var phonePattern = /^[0-9]+$/;   // Regex to match numbers only

    if (!namePattern.test(firstName)) {
        alert("Please enter a valid first name with letters only.");
        return false;
    }

    if (!namePattern.test(lastName)) {
        alert("Please enter a valid last name with letters only.");
        return false;
    }

    if (!phonePattern.test(phoneNumber)) {
        alert("Please enter a valid phone number with numbers only.");
        return false;
    }

    return true;
}