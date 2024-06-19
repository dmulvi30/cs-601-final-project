//Contact form validation

//form variable
const contact_form = document.getElementById("contact-form");

//reset error function
function reset() {
    if (document.getElementById("error-messages") != null) {
        document.getElementById("error-messages").remove();
    }
}

//form validation
contact_form.addEventListener("submit", (event) => {
    event.preventDefault();

    let name_regex = /^[a-zA-Z]+$/;
    let email_regex = /^[\w-\.]+@([\w-]+\.)+[\w]{2,3}$/;
    let first_name = document.getElementById("first-name").value;
    let last_name = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    
    //error messages
    function errorMessage(error_message_div, error_message) {

        //create error message elements
        let error = document.createElement("p");
        document.createTextNode(error_message);

        //style error message
        error.textContent = error_message;
        error.style.fontWeight = "bold";
        error.style.color = "blue";

        //add error message to element
        error_message_div.appendChild(error);
    }

    //error message styling
    function styleErrors(element_id, error_message) {
        let error_element_div = document.getElementById("errors");
        let error_message_div = document.createElement("div");
        error_label = document.getElementById(element_id);
        error_message_div.setAttribute("id", "error-messages");
        error_element_div.appendChild(error_message_div);
        error_label.style.color = "blue";
        error_label.style.fontWeight = "bold";
        errorMessage(error_message_div, error_message);
    }

    //passing validation
    function passValidation(element_id) {
        error_label = document.getElementById(element_id);
        error_label.style.color = "black";
        validation_count += 1;
    }

    //form validation
    let validation = false;
    let validation_count = 0;

    //validate first name
    let element_id = "first-name-label"
    if (first_name.length == 0) {
        reset()
        let error_message = "No value was entered for 'First Name'. This field is required!";
        styleErrors(element_id, error_message);
        return;
    } else {
        passValidation(element_id);
        reset();
    }
    if ((first_name.length < 2) && (first_name.length > 0)) {
        reset()
        let error_message = "First name must consist of two or more alphabetic characters. Please try again!";
        styleErrors(element_id, error_message);
        return;
    } else {
        passValidation(element_id);
        reset();
    }
    if (name_regex.test(first_name) == false) {
        reset()
        let error_message = "First name must consist of only alphabetic characters. Please try again!";
        styleErrors(element_id, error_message);
        return;
    } else {
        passValidation(element_id);
        reset();
    }

    //validate last name
    element_id = "last-name-label"
    if (last_name.length == 0) {
        reset()
        let error_message = "No value was entered for 'Last Name'. This field is required!";
        styleErrors(element_id, error_message);
        return;
    } else {
        passValidation(element_id);
        reset();
    }
    if ((last_name.length < 2) && (last_name.length > 0)) {
        reset()
        let error_message = "Last name must consist of two or more alphabetic characters. Please try again!!";
        styleErrors(element_id, error_message);
        return;
    } else {
        passValidation(element_id);
        reset();
    }
    if (name_regex.test(last_name) == false) {
        reset()
        let error_message = "Last name must consist of only alphabetic characters. Please try again!";
        styleErrors(element_id, error_message);
        return;
    } else {
        passValidation(element_id);
        reset();
    }

    //validate email
    element_id = "email-label"
    if (email.length == 0) {
        reset()
        let error_message = "No value was entered for 'Email'. This field is required!";
        styleErrors(element_id, error_message);
        return;
    } else {
        passValidation(element_id);
        reset();
    }

    if (email_regex.test(email) == false) {
        reset()
        let error_message = "The email address must be a valid email address. Please try again!";
        styleErrors(element_id, error_message);
        return;

    } else {
        passValidation(element_id);
        reset();
    }

    //verfity all validations
    if (validation_count == 8) {
        validation = true;
    }

    //return success message
    if (validation == true) {

        let message1 = document.createElement("p");
        let summary1 = document.createTextNode("Thanks for reaching out to me, " + first_name + " ! I will reach out to you shortly.");
        let submit_message_element = document.getElementById("submit-message");

        document.getElementById("contact-form").hidden = true;
        message1.appendChild(summary1);
        submit_message_element.appendChild(message1);        
    }
});
