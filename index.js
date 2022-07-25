const buttons = document.querySelectorAll(".btn");
const submit = document.querySelector(".submit");
const main = document.querySelector(".main");
const thankYou = document.querySelector(".thank-you");
const text = document.querySelector(".selected");
let selected;


buttons.forEach((button,index)=>{
   button.addEventListener("click",()=>{
    buttons.forEach((button)=>{
        button.classList.remove("active");
    });
    button.classList.add("active");
    selected = index + 1;
    submit.disabled = false;
    submit.style.backgroundColor = "hsl(25, 97%, 53%)";
   })
});


submit.addEventListener("click",()=>{
   main.style.display = "none";
   thankYou.style.display = "block";
   text.textContent = `You selected ${selected} out of 5`;
});
