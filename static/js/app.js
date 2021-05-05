// DOM Events Manipulation

document.body.addEventListener("click", function (e) {
  // Open and Close Modal
  if (e.target.classList.contains("open-modal-1")) {
    e.preventDefault();
    document.querySelector(".modal-2").style.display = "none";
    document.querySelector(".modal-1").style.display = "block";
    document.querySelector(".modal-3").style.display = "none";
  }

  if (e.target.classList.contains("open-modal-2")) {
    e.preventDefault();
    document.querySelector(".modal-2").style.display = "block";
    document.querySelector(".modal-1").style.display = "none";
    document.querySelector(".modal-3").style.display = "none";
  }

  if (e.target.classList.contains("open-modal-3")) {
    e.preventDefault();
    document.querySelector(".modal-2").style.display = "none";
    document.querySelector(".modal-1").style.display = "none";
    document.querySelector(".modal-3").style.display = "block";
  }

  if (e.target.classList.contains("close-modal")) {
    e.preventDefault();
    document.querySelector(".modal-1").style.display = "none";
    document.querySelector(".modal-2").style.display = "none";
    document.querySelector(".modal-3").style.display = "none";
    location.reload();
  }

  // Manage the category buttons
  if (e.target.classList.contains("button-label")) {
    e.preventDefault();
    let buttons = document.querySelectorAll(".button-label");

    for (let button of buttons) {
      button.classList.remove("button-selected");
    }

    e.target.classList.add("button-selected");
    let categoria = e.target.value;
    let checkbox = document.querySelectorAll(".category-checkbox");

    checkbox.forEach(function (check) {
      check.setAttribute("value", categoria);
      check.checked = true;
    });
  }
});

var ctx = document.getElementById("LineChart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: ["Working"],
    datasets: [
      {
        label: "Balance on Last Months - Still Working",
        backgroundColor: "#2ecc71",
        borderColor: "#2ecc71",
        data: [0, 100],
      },
    ],
  },

  // Configuration options go here
  options: {},
});

// Generate Calendar

let calendar = document.querySelector(".calendar");

for (let i = 1; i < 31; i++) {
  let day = document.createElement("span");
  day.textContent = i;
  // Generate Mark GREEN
  if (i == 3) {
    let mark = document.createElement("span");
    mark.className = "mark-green";
    day.append(mark);
  }

  // Generate Mark RED
  if (i == 5) {
    let mark = document.createElement("span");
    mark.className = "mark-red mark-green";
    day.append(mark);
  }

  calendar.appendChild(day);
}
