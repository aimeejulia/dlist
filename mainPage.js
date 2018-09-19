
// Create a new list item when clicking on the "Add" button or pressing the return key
function newElement() {
  var li = document.createElement("li");
  li.className = "list-item";
  var inputValue = document.getElementById("taskInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);


//create a span / new line for each task added
  var span = document.createElement("span");
  span.className = "delBtn";
  span.innerHTML = "<i class='fas fa-minus'></i>";
  li.appendChild(span);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("taskUL").appendChild(li);
  }
  document.getElementById("taskInput").value = "";


//Delete tasks permanentely from the list on pressing the minus button
var task = document.querySelector("#taskUL");
task.addEventListener("click", removeTask);
function removeTask(e){
if(e.target.parentElement.classList.contains('delBtn')){
  if(confirm("Are you sure you want to delete this task?")){
    e.target.parentElement.parentElement.remove();
  }
}
}
