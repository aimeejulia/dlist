
// calls the exisiting tasks from the local storage and displays them on the page
function existingTaskList () {
  document.getElementById("li").innerHTML = localStorage.getItem("key");
}

// Create a new list item when clicking on the "Add" button or pressing the return key
function newElement() {
  var li = document.createElement("li");
  li.className = "list-item";
  var inputValue = document.getElementById("taskInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
//create a span for delBtn
  var delBtn = document.createElement("span");
  delBtn.className = "delBtn";
  delBtn.innerHTML = "<i class='fas fa-minus'></i>";
  li.appendChild(delBtn);
//create a span for checkedBtn
  var checkedBtn = document.createElement("span");
  checkedBtn.className = "checkedBtn";
  checkedBtn.innerHTML = "<i class='fas fa-check'></i>";
  li.appendChild(checkedBtn);

//on clicking checkedBtn, toggleChecked function is called
  checkedBtn.addEventListener("click", toggleChecked);

//on clickingthe add button while the input is empty it will trigger an alert else it will append the content to the list
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("taskUL").appendChild(li);
  }
  document.getElementById("taskInput").value = "";
};

//Deletes the tasks permanently from the to do list and  the localStorage
var task = document.querySelector("#taskUL");
task.addEventListener("click", removeTask);
function removeTask(e){
if(e.target.parentElement.classList.contains('delBtn')){
  if(confirm("Are you sure you want to delete this task?")){
    e.target.parentElement.parentElement.remove();
    //removing it from localStorage
    localStorage.removeItem("key");
  }
}
}

//marks tasks as complete
function toggleChecked (e) {
  e.target.parentElement.parentElement.classList.toggle('taskCompleted');
}

//saving tasks to localStorage
function addToLocalStorage () {
  localStorage.setItem("key", "value");
}
