let digits = document.querySelectorAll(".no");
let inp = document.querySelector(".inp");
let ops = document.querySelectorAll(".ops");
let equalto = document.querySelector("#equalto");
let ac = document.querySelector("#allclear");

let oprnd1="", oprnd2="", operator="";

//Digit Input and assigning Operands
for(let digit of digits){
    digit.addEventListener("click", () => {
        inp.innerText += digit.innerText;
        if(operator == ""){
            oprnd1 += digit.innerText;
        }else{
            oprnd2 += digit.innerText;
        }
    });
}

//Operator
for(let op of ops){
    op.addEventListener("click", () => {
        inp.innerText += operator = op.innerText;
    });
}

//Calculation
equalto.addEventListener("click", () => {
    inp.innerText += equalto.innerText;
    let result;
    switch(operator){
        case '+': 
            result = parseInt(oprnd1, 10) + parseInt(oprnd2, 10);
            break;
        case '-': 
            result = oprnd1 - oprnd2;
            break;
        case '*': 
            result = oprnd1 * oprnd2;
            break;
        case '/': 
            result = oprnd1 / oprnd2;
    }
    inp.innerText += result;
});

//All Clear
ac.addEventListener("click", () => {
    inp.innerText = "";
    oprnd1="";
    oprnd2="";
    operator="";
    result=""; 
});