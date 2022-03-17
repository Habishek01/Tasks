// Add your code here
function sub() {
  const input = document.getElementById("input").value;
  if (input === "") {
    return;
  }

  saveInput(input);
}
function saveInput(input) {
  const div = document.createElement("div");
  div.className = "sList";
  const p = document.createElement("p");
  const button = document.createElement("button");
  button.className = "buttond";
  p.innerHTML = input;
  button.innerHTML = "Delete";
  div.appendChild(p);
  div.appendChild(button);
  const cont = document.getElementById("List");
  cont.appendChild(div);
  eventFunc();
}
// 1.on click del button,
function eventFunc() {
  $(".buttond").click(function (event) {
    if ($(event.target).hasClass("buttond")) {
      $(event.target).parent().hide();
    }
  });
}
$(document).ready(function () {
  eventFunc();
});
