let form=document.querySelector("#task-area");
console.log(form)
let inputText=document.querySelector("#single-task");
console.log(inputText)

let todos=document.querySelector(".todos");

form.addEventListener("submit",(e)=>{

    console.log("btn is clicked");
    e.preventDefault();

    let task=inputText.value;
    // console.log(task);

    if(task===''){
        alert("No Input  ");
    }

    let tododiv=document.createElement("div");
    tododiv.classList.add("todo");
    todos.appendChild(tododiv);

    tododiv.style.display="flex";

    let todoContent=document.createElement("div");
    todoContent.classList.add("todo-content");
    tododiv.appendChild(todoContent);

    let todoInput=document.createElement("input");
    todoInput.classList.add("text");
    todoInput.type="text";
    todoInput.value=task;
    todoInput.setAttribute("readonly","readonly");
    todoContent.appendChild(todoInput);

    let todoAction=document.createElement("div");
    todoAction.classList.add("todo-action");
    tododiv.appendChild(todoAction);
    todoAction.style.display="flex";

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML ="<font size='2px'>Delete</font>";
    deleteButton.classList.add("delete");
    todoAction.appendChild(deleteButton);
    deleteButton.style.color="white";

    let editButton = document.createElement("button");
    editButton.innerHTML ="<font size='2px'>Edit</font>";
    editButton.classList.add("edit");
    todoAction.appendChild(editButton);


})