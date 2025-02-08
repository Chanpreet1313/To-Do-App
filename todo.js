const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === "") {
        alert("Please enter a task");
    } 
    else {
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;

        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML = "\u00d7";
        
        li.appendChild(span);
    }
    
    
    saveData(inputBox.value);
    inputBox.value = "";
}

function deleteTask() {
    const li = document.querySelector("li");
    li.remove();
    saveData();
}    

listContainer.addEventListener("click", function(e){
     if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
       
     }
     else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
     }
}, false);

function showTask(){
    arr = JSON.parse(localStorage.getItem("data"));
    arr.forEach((ele)=>{
        const li = document.createElement("li");
        li.innerText = ele;
        listContainer.appendChild(li);

    })
}
showTask();

function saveData(text){
    
    checkLs();
    
    arr= JSON.parse(localStorage.getItem("data"));
    console.log(arr);


    arr.push(text);
    localStorage.setItem("data", JSON.stringify());
}

function checkLs(){
    if(localStorage.getItem("data")==null)
        localStorage.setItem("data","[]");
}

function removeEventListener(){
    if(Event==checked);
}