let input = document.querySelector("input");
let button = document.querySelector("button");
let box = document.querySelector(".box");

let taskdiv = document.createElement("div");
box.appendChild(taskdiv);

button.addEventListener("click", ()=>{

    let task = document.createElement("div");
    taskdiv.appendChild(task);
    let taskname = document.createElement("div");
    let check = document.createElement("button");
    let trash = document.createElement("button");
    task.appendChild(taskname);
    task.appendChild(check);
    task.appendChild(trash);
    taskname.innerText = input.value;
    check.innerHTML = `<i class="fa-solid fa-check"></i>`;
    trash.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    task.style.width = "350px";
    task.style.display = "flex";
    task.style.justifyContent = "space-evenly";
    task.style.alignItems = "center";
    task.style.margin = "10px 0 10px 0";
    taskname.style.width = "200px";
    taskname.style.height = "30px";
    taskname.style.borderRadius = "10px";
    taskname.style.paddingLeft = "10px";
    taskname.style.fontSize = "23px";
    taskname.style.textTransform = "capitalize";
    taskname.style.backgroundColor = "#BA0D1A";
    taskname.style.color = "white";

    check.addEventListener("click", ()=>{
        taskname.style.textDecoration = "line-through";
    });

    trash.addEventListener("click", ()=>{
        taskdiv.removeChild(task);
    });

    input.value="";
});