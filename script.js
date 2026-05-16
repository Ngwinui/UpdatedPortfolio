// FORM VALIDATION
document.getElementById("reachout").addEventListener("submit", function (e) {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill all fields!");
    e.preventDefault();
  }
});

//HERO ANIMATION
document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed("#typed", {
    strings: ["Your plug for perfect websites👌"],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true,
    showCursor: true,
    cursorChar: "|",
  });
});
