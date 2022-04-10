// Your code goes here

document.addEventListener("DOMContentLoaded", () => {
  let id = document.querySelector("#text"); 
  // console.log(id); returns <p>
  id.textContent = "This is really cool!"
  // console.log(id); returns <p> with new text inside
}
)