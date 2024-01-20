const inputbox = document.getElementById("inputbox");
const listcont = document.getElementById("list");

function addTask() {
  if (inputbox === "") {
    alert("you should write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    //display under the listcont
    listcont.appendChild(li);

    //add cross icon within span tag
    let span = document.createElement("span");
    //cross icon code
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputbox.value = " ";
  saveData();
}

listcont.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
//to stoe data after  refreshing

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}
// list.innerHTM content stored in 'data'

//displa dstore data
function showTask() {
  listcont.innerHTML = localStorage.getItem("data");
}
showTask();
