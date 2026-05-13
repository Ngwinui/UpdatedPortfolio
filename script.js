// FORM VALIDATION
document.getElementById("reachout").addEventListener("submit", function (e) {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill all fields!");
    e.preventDefault();
  }
});
