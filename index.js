// Taking elements from DOM
const complete = document.getElementById("complete");
const completed = document.getElementById("completed");
const inputTab = document.getElementById("inputTab");
const addBtn = document.getElementById("addBtn");
const form = document.querySelector("form");

// adding Eventlistener on addBtn
addBtn.addEventListener("click", buttonClicked);

// calling buttonClicked function
function buttonClicked(e) {
  e.preventDefault();
  const inputValue = inputTab.value;
  if (inputValue === "") {
    showfeedback();
  } else {
    addTolist(inputValue);
  }
}
// calling showfeedback function
function showfeedback() {
  alert("please give an input!");
}
//calling addtolist function
function addTolist(inputValue) {
  //creating element and adding classes and appending
  complete.style.display = "block";

  const li = document.createElement("li");
  li.setAttribute("id", "list");
  li.classList.add("list-group-item", "my-3");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("mr-2");
  li.appendChild(checkbox);

  // adding evnetlistner to Input CheckBox
  checkbox.addEventListener("change", inputCheckClicked);

  const text = document.createElement("h5");
  text.classList.add("d-inline");
  text.innerText = inputValue;
  li.appendChild(text);

  const buttons = document.createElement("span");
  buttons.classList.add("float-right");
  li.appendChild(buttons);

  const editBtn = document.createElement("button");
  editBtn.setAttribute("id", "editBtn");
  editBtn.innerText = "Edit";
  editBtn.classList.add("btn", "btn-success", "btn-sm", "mx-2");
  buttons.appendChild(editBtn);

  //addeventlistner to editBtn
  editBtn.addEventListener("click", editBtnClicked);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("btn", "btn-danger", "btn-sm", "mx-2");
  buttons.appendChild(deleteBtn);

  // adding eventlistner on deleteBtn
  deleteBtn.addEventListener("click", deleteBtnClicked);

  complete.insertBefore(li, complete.childNodes[0]);

  //making inputTab empty after submit
  inputTab.value = "";

  //calling function inputCheckClicked
  function inputCheckClicked(e) {
    const checked = e.target.checked;
    if (checked) {
      complete.removeChild(li);
      completed.style.display = "block";
      completed.appendChild(li);
    } else {
      complete.appendChild(li);
      completed.removeChild(li);
    }
  }

  //calling function editBtn
  function editBtnClicked(e) {
    e.preventDefault();
    inputTab.value = inputValue;
    const editedItem = this.parentNode.parentNode;
    if (editedItem) {
      complete.removeChild(editedItem);
      completed.removeChild(editedItem);
    }
  }
  //calling function deleteBtnClicked
  function deleteBtnClicked(e) {
    e.preventDefault();
    const liItem = this.parentNode.parentNode;
    liItem.remove();
    if (liItem.length < 0) {
      completed.classList.add("invisible");
    }
  }
}
