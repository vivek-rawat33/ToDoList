const input = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const button = document.querySelector("button");
const alert = document.querySelector(".msg");
var counter = 0;
const addTask = () => {
  if (input.value === "") {
    alert.textContent = "Please fill in the input box";
    alert.style.color = "red";
    alert.style.display = "block";
  } else {
    counter++;
    let li = document.createElement("li");
    li.textContent = `task ${counter} - ${input.value} `;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    input.value = "";
    alert.style.display = "none";
    msg.textContent = "";
  }
  saveData();
};
input.addEventListener("keydown", function () {
  if (event.key === "Enter") {
    addTask();
  }
});

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
      counter = 0;
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
