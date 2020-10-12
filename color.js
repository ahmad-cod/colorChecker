let input = document.querySelector("input");
const body = document.querySelector("body");
const divInput = document.querySelector("div")

input.addEventListener('keyup', () => {
    input.value = input.value.toLowerCase();
    body.style.background = input.value;
    if(!(body.style.background==input.value)){
        return false
    }
    else {
        body.style.background = input.value;
        divInput.innerHTML = input.value;
   setTimeout(() => {
       input.value= ""; }, 1100)
    }
})