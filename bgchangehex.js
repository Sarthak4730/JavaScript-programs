let body = document.querySelector("body");
let input = document.querySelector("input");
let button = document.querySelector("button");

button.addEventListener("click", ()=>{
    if(input.value.length < 7 || input.value.charAt(0) != '#'){
        alert("Invalid Hexcode\nUse # and 6-hex-digits");
    }else{
        body.style.backgroundColor = `${input.value}`;
    }
    input.value = "";
});