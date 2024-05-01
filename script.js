function getFormValue() {
    // Get the form element
    var form = document.getElementById('myForm');
    
    // Get the values of first and last name from the form
    var firstName = form.elements['fname'].value;
    var lastName = form.elements['lname'].value;
    
    // Alert the first and last name
    alert("First Name: " + fname + "\nLast Name: " + lname);
}