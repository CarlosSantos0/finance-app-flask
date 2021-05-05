// Send Form Managegment
SetTodayDate();

function SetTodayDate() {
  let current = new Date();
  let dates = document.querySelectorAll("input[type=date]");
  dates.forEach((date) => (date.value = current.toISOString().substr(0, 10)));
}
document
  .querySelector("#form-income")
  .addEventListener("submit", (e) => FormSend(e));
document
  .querySelector("#form-expense")
  .addEventListener("submit", (e) => FormSend(e));
document
  .querySelector("#form-account")
  .addEventListener("submit", (e) => FormSend(e));

function FormSend(e) {
  e.preventDefault();
  let account = 0;
  if (e.target.id == "form-account") {
    account = 1;
  } else {
    account = e.target.querySelector(".account").value;
  }

  let category = e.target.querySelector(".category-checkbox").value;

  if (account != 0 && category != 0) {
    document.querySelector("#amount-expense").value *= -1;
    const action = e.target.getAttribute("action");
    const data = new FormData(e.target);
    const inputs = document.querySelectorAll("input");

    inputs.forEach((input) => {
      input.value = "";
    });

    fetch(action, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json)
      .catch((error) => console.log(error))
      .then((response) => console.log(response));

    SetTodayDate();
    let buttons = document.querySelectorAll(".button-label");

    for (let button of buttons) {
      button.classList.remove("button-selected");
    }
  } else {
    let alert = document.querySelectorAll(".alert-field");
    alert.forEach((value) => (value.style.display = "block"));
    setTimeout(() => {
      alert.forEach((value) => (value.style.display = "none"));
    }, 2000);
  }
}
