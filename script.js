function getFormValue() {
    // Get the form element
    var form = document.getElementById('myForm');
    
    // Get the values of first and last name from the form
    var firstName = form.elements['fName'].value;
    var lastName = form.elements['lastName'].value;
    
    // Alert the first and last name
    alert("First Name: " + fName + "\nLast Name: " + lastName);
}