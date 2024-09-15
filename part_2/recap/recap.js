let counter = 0;
function deleteTodo(index) {
    let element = document.getElementById("todo-" + index)
    element.parentNode.removeChild(element);
}

function addTodo() {
    let inputEl = document.getElementById("inp");
    let newText = document.createElement("div");
    newText.setAttribute("id", "todo-"+counter);
    newText.style.display= "flex";
    counter += 1;
    newText.innerHTML="<div><h4>"+counter+". "+inputEl.value+"</h4></div><button onclick='deleteTodo("+(counter-1)+")'style='margin:20px 10px;'>delete</button>";
    mainParent.appendChild(newText);
}