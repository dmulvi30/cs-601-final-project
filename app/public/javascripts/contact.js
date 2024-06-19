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

    let n_regex = /^[a-zA-Z]+$/;
    let email_regex = /^[\w-\.]+@([\w-]+\.)+[\w]{2,3}$/;
    let first_name = document.getElementById("first-name").value;
    let last_name = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    
    //errors
    function errorMessage(e_message_div, e_message) {

        //create errors
        let error = document.createElement("p");
        document.createTextNode(e_message);

        //style errors 
        error.textContent = e_message;
        error.style.fontWeight = "bold";
        error.style.color = "blue";

        //add errors
        e_message_div.appendChild(error);
    }

    //error styles
    function errorStyle(element_id, e_message) {
        let error_element_div = document.getElementById("errors");
        let e_message_div = document.createElement("div");
        error_label = document.getElementById(element_id);
        e_message_div.setAttribute("id", "error-messages");
        error_element_div.appendChild(e_message_div);
        error_label.style.color = "blue";
        error_label.style.fontWeight = "bold";
        errorMessage(e_message_div, e_message);
    }

    //validation pass
    function validationPass(element_id) {
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
        let e_message = "This field is required!";
        errorStyle(element_id, e_message);
        return;
    } else {
        validationPass(element_id);
        reset();
    }
    if ((first_name.length < 2) && (first_name.length > 0)) {
        reset()
        let e_message = "First name must contain only two or more alphabetic characters!";
        errorStyle(element_id, e_message);
        return;
    } else {
        validationPass(element_id);
        reset();
    }
    if (n_regex.test(first_name) == false) {
        reset()
        let e_message = "First name must contain only alphabetic characters!";
        errorStyle(element_id, e_message);
        return;
    } else {
        validationPass(element_id);
        reset();
    }

    //validate last name
    element_id = "last-name-label"
    if (last_name.length == 0) {
        reset()
        let e_message = "This field is required!";
        errorStyle(element_id, e_message);
        return;
    } else {
        validationPass(element_id);
        reset();
    }
    if ((last_name.length < 2) && (last_name.length > 0)) {
        reset()
        let e_message = "Last name can only contain two or more alphabetic characters!";
        errorStyle(element_id, e_message);
        return;
    } else {
        validationPass(element_id);
        reset();
    }
    if (n_regex.test(last_name) == false) {
        reset()
        let e_message = "Last name can only contain alphabetic characters!";
        errorStyle(element_id, e_message);
        return;
    } else {
        validationPass(element_id);
        reset();
    }

    //validate email
    element_id = "email-label"
    if (email.length == 0) {
        reset()
        let e_message = "This field is required!";
        errorStyle(element_id, e_message);
        return;
    } else {
        validationPass(element_id);
        reset();
    }

    if (email_regex.test(email) == false) {
        reset()
        let e_message = "The email address is not valid!";
        errorStyle(element_id, e_message);
        return;

    } else {
        validationPass(element_id);
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
        let submit_message_element = document.getElementById("success");

        document.getElementById("contact-form").hidden = true;
        message1.appendChild(summary1);
        submit_message_element.appendChild(message1);        
    }
});
