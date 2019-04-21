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

  complete.classList.remove("invisible");

  const li = document.createElement("li");
  li.classList.add("list-group-item", "my-2");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("mr-2");
  li.appendChild(checkbox);

  // adding evnetlistner to Input CheckBox
  checkbox.addEventListener("change", inputCheckClicked);

  //calling function inputCheckClicked
  function inputCheckClicked(e) {
    const checkbox = this;
    const item = this.parentNode;
    console.log(item)


    if (checkbox.checked == true) {
      completed.appendChild(item);
      item.remove();




    }





  }

  const text = document.createElement("h5");
  text.classList.add("d-inline");
  text.innerText = inputValue;
  li.appendChild(text);

  const buttons = document.createElement("span");
  buttons.classList.add("float-right");
  li.appendChild(buttons);

  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.classList.add("btn", "btn-success", "btn-sm", "mx-2");
  buttons.appendChild(editBtn);

  //addeventlistner to editBtn
  editBtn.addEventListener("click", editBtnClicked);

  //calling function editBtn
  function editBtnClicked(e) {
    e.preventDefault();

    // const li = this.parentNode.parentNode;
    // const text = li.childNodes[1].innerText;

    // if (complete.children.length > -1) {
    //   inputTab.value = text;
    //   complete.removeChild(li);
    // } else {

    //   complete.parentNode.removeChild(element);
    // }
  }

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("btn", "btn-danger", "btn-sm", "mx-2");
  buttons.appendChild(deleteBtn);

  // adding eventlistner on deleteBtn
  deleteBtn.addEventListener("click", deleteBtnClicked);
  //calling function deleteBtnClicked
  function deleteBtnClicked(e) {
    e.preventDefault();
    const item = this.parentNode.parentNode;
    item.remove();
  }

  complete.insertBefore(li, complete.childNodes[0]);

  //making inputTab empty after submit
  inputTab.value = "";
}