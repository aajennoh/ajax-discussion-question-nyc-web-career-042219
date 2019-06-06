const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const street = document.getElementById("street");
const city = document.getElementById("city");
const state = document.getElementById("state");
const postcode = document.getElementById("postcode");
const phone = document.getElementById("phone");
const cell = document.getElementById("cell");
const dob = document.getElementById("date_of_birth");
const image = document.getElementById("profile_picture")


console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementsByClassName('btn-primary')[0]

  button.addEventListener('click', () => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(newresponse => newresponse["results"][0])
      .then(results => {
        fullname.innerText = results["name"]["first"] + " " + results["name"]["last"];
        email.innerText = results["email"];
        street.innerText = results["location"]["street"];
        city.innerText = results["location"]["city"];
        state.innerText = results["location"]["state"];
        postcode.innerText = results["location"]["postcode"];
        phone.innerText = results["phone"];
        cell.innerText = results["cell"];
        dob.innerText = results["dob"]["date"];
        image.setAttribute("src", results["picture"]["large"]);
        image.setAttribute("alt", `profile picture of ${results["name"]["first"]}`)

    })

      // .then(response => console.log(response))
  
  })
  console.log("CONTENT LOADED!");
});
