const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));//JSON.stringify = array든 뭐든 string으로 저장시켜줌
}

function deleteToDo(event){//list 삭제
   const deletLi = event.target.parentElement;
   toDos = toDos.filter((todo) => todo.id !== parseInt(deletLi.id));
   deletLi.remove(); 
    
   saveToDos();
}



function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

}

function handleToDoSubmit(event){//todo리스트 작성 후 엔터(submit)시 작동
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {//삭제를 위해 사용자가 입력한 값에 랜덤(랜덤은아니고) id를 부여하여 그것을 찾아서 삭제
        text : newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);//작성한 todo리스트를 배열형태로 저장
    paintToDo(newTodoObj);
    saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}