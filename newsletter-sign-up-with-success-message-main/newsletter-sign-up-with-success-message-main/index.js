const form = document.querySelector("form");
const main= document.querySelector(".main");
const aside = document.querySelector(".aside");
const submitBtn = document.getElementById("submit");
const dismissBtn = document.querySelector(".submit__btn")
const email= document.querySelector(".your__email");
const inputEmail = document.querySelector(".email");
const error = document.querySelector(".error_email")
//watch input
window.onload = function(){
    inputEmail.value = ""
}

//display the aside part of my code
function handleInputsubmit(e){
    
    e.preventDefault();
    const myEmail= inputEmail.value;
   

    localStorage.setItem("userEmail", myEmail)
    setTimeout(()=>{
       aside.classList.toggle("active");
       main.classList.toggle("hide");
       
    }, 1000);
    const userEmail = localStorage.getItem("userEmail");

    if (userEmail){
        email.textContent = userEmail;
    }

    //email regexp

} 
form.addEventListener("submit", handleInputsubmit)

//dismiss button redirects back to main page
dismissBtn.addEventListener("click", ()=>{
    inputEmail.value = "" 
    localStorage.removeItem("userEmail");
       main.classList.toggle("hide");
       aside.classList.toggle("active")
});
