// const h4Element = document.querySelectorAll("h4")[1];
// let counter = 0;
// function callback() {
//     const h4Element = document.querySelectorAll("h4")[1].innerHTML = counter;
// counter++;
// }
// setInterval(callback, 1000)
 



    let counter = 5;
    function deleteTodo(index) {
        const element = document.getElementById("todo-" + index)
        element.parentNode.removeChild(element);
    
    }
function addTodo() {
    const inpEl = document.getElementById("inp");
    const newText = document.createElement("div");
    newText.setAttribute("id", "todo-"+counter)
    counter = counter + 1;
    newText.innerHTML = "<div> <h4>"+ inpEl.value +" </h4></div> <button onclick='deleteTodo("+ (counter-1) +")'>delete</button>";
    mainParent.appendChild(newText);
}


        
