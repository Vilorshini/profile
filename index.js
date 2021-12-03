
let burger = document.querySelector(".burger");
burger.addEventListener("click", () => burger.classList.toggle("activebrgr"));

//animated text//

let textType = document.querySelector('.typeing')
let textArray = textType.dataset.typeingtext.split("")
let typeCount = 0;

let autoTypeText = () => {
    if(typeCount < textType.dataset.typeingtext.length){
        textType.innerHTML += textType.dataset.typeingtext.charAt(typeCount)
        typeCount++
        textArray = textType.dataset.typeingtext.split("")
    }else {
        textArray.pop()
        textType.innerHTML = textArray.join("")
        if(textArray.length == 0){
            typeCount = 0
        }
    }  
}
setInterval(() => {
    autoTypeText()
},175)



