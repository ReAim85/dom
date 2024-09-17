let counter = 1;

function addTodo() {
    let inputEl = document.getElementById("inp").value;

    let divEl = document.createElement("div");
    let divEl2 = document.createElement("div")
    let h4El = document.createElement("h4");

    h4El.textContent = `${counter}. ${inputEl}`;

    divEl.appendChild(divEl2);
    divEl2.appendChild(h4El);

    let deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    deletebtn.style.margin = "20px 10px";
    let currentCounter = counter;
    deletebtn.onclick = function(){
        deleteTodo(currentCounter);
    }
    divEl2.appendChild(deletebtn);

    document.getElementById("mainParent").appendChild(divEl);
    divEl.setAttribute("id", "todo-"+counter);
    divEl2.style.display= "flex";
    counter ++;
    
}

function deleteTodo(id) {
    let element = document.getElementById("todo-" + id);
    if (element) {
        element.remove();  // Removes the entire todo element
    }
}