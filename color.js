const input = document.querySelector("input");
const body = document.querySelector("body");
const divInput = document.querySelector("div")

input.addEventListener('keyup', () => {
    body.style.background = input.value;
    if(!(body.style.background==input.value)){
        return false
    }
    else {
        divInput.innerHTML = input.value;
   body.style.background = input.value;
   setTimeout(() => {
       input.value= ""; }, 1000)
    }
})