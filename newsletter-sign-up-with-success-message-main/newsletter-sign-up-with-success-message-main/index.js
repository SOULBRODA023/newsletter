const form = document.querySelector("form");
const main= document.querySelector(".main");
const aside = document.querySelector(".aside")
form.addEventListener("click", (e)=>{
    e.preventDefault();
    main.classList.toggle("hide");
    aside.classList.remove("hide");
})
