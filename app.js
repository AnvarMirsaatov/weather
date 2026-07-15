let addTodo_Input = document.querySelector(".addTodo_Input");
let send_btn = document.querySelector(".send");
let checkbox_input = document.querySelector(".checkbox");
let toDo_Item = document.querySelector(".toDo_Item");
let edit_btn = document.querySelector(".edit");
let trash_btn = document.querySelector(".trash");
let todo_list_container = document.querySelector(".todo-list");
let theme = document.querySelector(".theme");
let theme_icon = theme.querySelector(".fa-regular");
let todos = [];

send_btn.addEventListener("click", (e) => {
  let input_value = addTodo_Input.value;

  if (input_value.trim() == "") {
    addTodo_Input.classList.add("validation");
    return;
  } else {
    e.preventDefault();
    todos.push(input_value);
    console.log(todos);
    input_value = "";
  }

  render(todos);
});

function render(data) {
  todo_list_container.innerHTML = "";
  todos.forEach((e, i) => {
    let list = document.createElement("div");
    list.classList.add("todo");
    list.innerHTML = `
    <div class="left">
                    <span class="toDo_Item">${i + 1}</span>
                    <span class="toDo_Item">${e}</span>
                </div>

                <div class="right">
                    <i onclick=editTodos(${i}) class="edit fa-solid fa-pen"></i>
                    <i onclick=deleteTodos(${i}) class=" trash fa-regular fa-trash-can"></i>
                </div>
`;

    todo_list_container.appendChild(list);
  });
}

function editTodos(index) {
  console.log(index);
  console.log("asdf");
  let editTodo = prompt("todoni yangilash", todos[index]);
  todos[index] = editTodo;
  render(todos);
}
function deleteTodos(index) {
  console.log(index);
  console.log("asdf");
  todos.splice(index, 1);
  render(todos);
}

theme.addEventListener("click", () => {
  if (theme_icon.classList.contains("fa-moon")) {
    theme_icon.classList.remove("fa-moon");
    theme_icon.classList.add("fa-sun");
    document.body.style.background = "gray";
  } else {
    theme_icon.classList.remove("fa-sun");
    theme_icon.classList.add("fa-moon");
    document.body.style.background = "white";
  }
});

let modal_btn = document.querySelector("#modal");
let text = document.querySelector(".text");

modal_btn.addEventListener("click", () => {
  //   text.classList.toggle("none");

  if (text.classList.contains("red")) {
    text.classList.remove("red");
  } else {
    text.classList.add("red");
  }
});
