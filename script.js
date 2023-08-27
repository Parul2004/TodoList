const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

function addTodo(params) {
  const todoName = input.value;
  const li = document.createElement("li");

  ul.appendChild(li);

  const p = document.createElement("p");
  p.textContent = todoName;
  li.appendChild(p);

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.classList.add("del");

  
  li.appendChild(delBtn);
  input.value = "";

}

function removeTodo(params) {
    const clicked = event.target;
    const clickedIsDelBtn = clicked.matches(".del");
    if(clickedIsDelBtn == false) return;
    else{
        console.log(clicked);
        const delLi = clicked.parentElement;
        console.log(delLi);
        delLi.style.display = "none";
    }
}
button.addEventListener("click", addTodo);
ul.addEventListener("click",removeTodo);