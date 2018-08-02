const form = document.getElementsByTagName("form")[0];
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let text = document.querySelector("#text");

const error = document.querySelector(".notification");

email.addEventListener(
  "input",
  function(event) {
    // Each time the user types something, we check if the
    // email field is valid.
    if (email.validity.valid) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      error.innerHTML = ""; // Reset the content of the message
      error.className = "notification is-hidden"; // Reset the visual state of the message
    }
  },
  false
);
form.addEventListener(
  "submit",
  function(event) {
    // Each time the user tries to send the data, we check
    // if the email field is valid.
    if (!name.validity.valid || !email.validity.valid || !text.validity.valid) {
      // If the field is not valid, we display a custom
      // error message.
      error.innerHTML =
        "<img src='../img/alert.png'> Molimo popunite sva polja!";
      error.className = "notification is-danger";
      // And we prevent the form from being sent by canceling the event
      event.preventDefault();
    } else {
      error.innerHTML =
        "<img src='../img/success_icon.png'> Vasa poruka je uspjesno poslana!";
      error.className = "notification is-success"; // Reset the visual state of the message
    }
  },
  false
);
