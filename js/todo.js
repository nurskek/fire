const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todo = document.querySelector(".todoList");
const num = document.querySelector(".pendingNum");
const delBtn = document.querySelector(".footer button");
// const inputBox = document.querySelector("");

inputBox.onkeyup = () => {
    // console.log(inputBox.value);
    let indata =inputBox.value;
    if(indata.trim() != 0){
        addBtn.classList.add("active");
    } else {
        addBtn.classList.remove("active");
    }
}

addBtn.onclick = () => {
    let data = inputBox.value;
    // let's first of all build in localstorage
    let getLocalStorage = localStorage.getItem("newToDo");
    if(getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(data);
    localStorage.setItem("newToDo", JSON.stringify(listArr));
    tasks();
    addBtn.classList.remove("active");
}

delBtn.onclick = () => {
    listArr = [];
    localStorage.setItem("newToDo", JSON.stringify(listArr));
    tasks();
}

function tasks(){
    let getLocalStorage = localStorage.getItem("newToDo");
    if(getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }

    if(listArr.length > 0) {
        delBtn.classList.add("active");
    } else {
        delBtn.classList.remove("active");
    }

    let newLi = '';
    listArr.forEach((element, index) => {
        newLi += `<li> ${element} <span onclick="deleteTask(${index})";><i class="fas fa-trash"></i></span></li>`;
    })
    num.textContent = listArr.length;
    todo.innerHTML = newLi;
    inputBox.value = '';
}

function deleteTask(index){
    let getLocalStorage = localStorage.getItem("newToDo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);

    localStorage.setItem("newToDo", JSON.stringify(listArr));
    tasks();
} 

