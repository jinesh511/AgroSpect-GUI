console.log("Ajax tutorial");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  console.log("You have clicked the fetchBtn");
  const xhr = new XMLHttpRequest();

  // Open the object
  xhr.open("GET", "harry.txt", true);

  // What to do on progress
  xhr.onprogress = function () {
    console.log("On Progress");
  };
  // What to do when response is ready
  xhr.onload = function () {
    console.log(this.responseText);
  };

  xhr.send();
}
