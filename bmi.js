let wt = document.querySelector("#weight");
let ht = document.querySelector("#height");
let calcbttn = document.querySelector("#calc");
let info = document.querySelector(".info");
let clear = document.querySelector("#clear");

calcbttn.addEventListener("click", ()=>{
    if(wt.value == "" || ht.value == ""){
        alert("Enter Weight and Height both");
    }else{
        calculation();
    }
});

function calculation(){
    let bmi = document.createElement("div");
    bmi.setAttribute("class","bmi");
    let res = wt.value / ( (ht.value/100)*(ht.value/100) );
    bmi.innerText = "BMI = "+res.toFixed(2); 
    info.appendChild(bmi);
    
    let category = document.createElement("div");
    category.setAttribute("class","category");
    info.appendChild(category);
    category.innerText = "You are";
    if(res < 18.5){
        category.innerText += " Underweight";
        category.style.backgroundColor = "brown";
        category.style.color = "white";
    }else if(res >= 18.5 && res <= 24.9){
        category.innerText += " Healthyweight";
        category.style.backgroundColor = "lightgreen";
    }else if(res >= 25 && res <= 29.9){
        category.innerText += " Overweight";
        category.style.backgroundColor = "orange";
    }else{
        category.innerText += " Obese";
        category.style.backgroundColor = "red";
        category.style.color = "white";
    }

    calcbttn.disabled = true;
}

clear.addEventListener("click", ()=>{
    wt.value = "";
    ht.value = "";
    info.removeChild(info.lastChild);
    info.removeChild(info.lastChild);
    calcbttn.disabled = false;
});