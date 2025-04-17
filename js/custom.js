/* JavaScript coming soon! */
let container = document.querySelector(".parentfour");

let form = document.querySelector("form");
form.addEventListener("submit", onFormSubmit);
console.log("form:", form);

function onFormSubmit() {
  event.preventDefault();
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());
  console.log(dataObject);

  form.reset();

  let name = dataObject.name;
  let email = dataObject.email;
  let phone = dataObject.phone;
  let origin = dataObject.origin;
  let radio = dataObject.radio;
  let comment = dataObject.comment;

  let message = `Thank you ${name} for submitting your email ${email} and phone number ${phone}. ${origin} is a great choice! We will get back to you about ${radio} shortly. `;

  console.log("first message to user:", message);

  let messageParagraph = document.createElement("p");
  messageParagraph.textContent = message;
  container.appendChild(messageParagraph);
}
