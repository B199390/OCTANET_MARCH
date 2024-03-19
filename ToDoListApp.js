let Task=document.getElementById("Task");
let todolist = [
    {
        text: "Learn HTMl",
        uniqueValue: 1
    },
    {
        text: "Learn css",
        uniqueValue: 2
    },
    {
        text: "Learn javascript",
        uniqueValue: 3

    }
];
let c=todolist.length;
let countElement=document.getElementById("Count");
let prevCount=c;
countElement.textContent=prevCount;

function onToDoChangeStyle(checkboxId,labelId) {
    let checkElement=document.getElementById(checkboxId);
    let labelElement=document.getElementById(labelId);
    if(checkElement.checked === true){
        labelElement.classList.add("checker");
    }
    else {
        labelElement.classList.remove("checker");
    }
   
}
function onRemovetodo(todoId) {
    let todoItem=document.getElementById(todoId);
    Task.removeChild(todoItem);
    prevCount=prevCount-1;
    countElement.textContent=prevCount;

}


function createandappend(todo) {



let checkboxId="mycheckbox"+todo.uniqueValue;
let labelId="label"+todo.uniqueValue;
let todoId="todo"+todo.uniqueValue;
let taskContainer=document.createElement('div');
taskContainer.classList.add("task-container","d-flex","flex-row","justify-content-between","ml-5","mr-5");
taskContainer.id=todoId;
Task.appendChild(taskContainer);

let checkboxContainer=document.createElement("div");
checkboxContainer.classList.add("checkbox-container");
taskContainer.appendChild(checkboxContainer);

let checkboxElement=document.createElement("input");
checkboxElement.type="checkbox";
checkboxElement.id=checkboxId;
checkboxElement.classList.add("checkboxProp");
checkboxContainer.appendChild(checkboxElement);
checkboxContainer.onclick = function() {
    onToDoChangeStyle(checkboxId,labelId);
}

let labelElement=document.createElement("label");
labelElement.setAttribute("for",checkboxId);
labelElement.classList.add("Label-text");
labelElement.textContent= todo.text;
labelElement.id=labelId;
checkboxContainer.appendChild(labelElement);

let iconContainer=document.createElement('div');
iconContainer.classList.add("icons");
taskContainer.appendChild(iconContainer);

let iconEdit=document.createElement("i");
iconEdit.classList.add("fa-regular","fa-pen-to-square","ml-2");
iconContainer.appendChild(iconEdit);
let iconDelete=document.createElement("i");
iconDelete.classList.add("fa-solid","fa-trash","ml-2");
iconContainer.appendChild(iconDelete);
iconDelete.onclick = function() {
    onRemovetodo(todoId);
}
}
createandappend(todolist[0]);
createandappend(todolist[1]);
createandappend(todolist[2]);
function  onAddTodoItem() {
    prevCount=prevCount+1;
    countElement.textContent=prevCount;
    let inputElement=document.getElementById("userInputValue").value;
    c=c+1;
    let newToDo = {
        text: inputElement,
        uniqueValue: c
    };
    createandappend(newToDo);

}
let buttonElement=document.getElementById("addButton");
buttonElement.onclick= function() {
    onAddTodoItem();

}

