// Create a new list item when clicking on the "Add" button or pressing the return key
function newElement() {
  var li = document.createElement("li");
  li.className = "list-item";
  var inputValue = document.getElementById("taskInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  //create a span
  var delBtn = document.createElement("span");
  delBtn.className = "delBtn";
  delBtn.innerHTML = "<i class='fas fa-minus'></i>";
  li.appendChild(delBtn);


  var checkedBtn = document.createElement("span");
  checkedBtn.className = "checkedBtn";
  checkedBtn.innerHTML = "<i class='fas fa-check'></i>";
  li.appendChild(checkedBtn);

  checkedBtn.addEventListener("click", toggleChecked);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("taskUL").appendChild(li);
  }
  document.getElementById("taskInput").value = "";
};

//Deletes the tasks permanently from the to do list
var task = document.querySelector("#taskUL");
task.addEventListener("click", removeTask);
function removeTask(e){
if(e.target.parentElement.classList.contains('delBtn')){
  if(confirm("Are you sure you want to delete this task?")){
    e.target.parentElement.parentElement.remove();
  }
}
}

//marks tasks as complete
function toggleChecked (e) {
  e.target.parentElement.parentElement.classList.add('taskCompleted')
}
