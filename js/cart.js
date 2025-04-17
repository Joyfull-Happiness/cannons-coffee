/* JavaScript coming soon! */
let containerCart = document.querySelector(".parentCart");

let form = document.querySelector("form");
form.addEventListener("submit", onFormSubmit);
console.log("form:", form);

function onFormSubmit() {
  event.preventDefault();
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());
  console.log(dataObject);

  form.reset();

  let nameCart = dataObject.nameCart;
  let emailCart = dataObject.emailCart;
  let passwordCart = dataObject.passwordCart;

  let messageCart = `Welcome ${nameCart}! You are loged in!`;

  console.log("first message to user:", messageCart);

  let messageParagraph = document.createElement("p");
  messageParagraph.textContent = messageCart;
  containerCart.appendChild(messageParagraph);
}
