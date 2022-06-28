const create_acc = document.querySelector(".create_acc");
const close = document.querySelector(".close")
const sign_up = document.querySelector(".sign_up");

create_acc.addEventListener("click", () =>{
    sign_up.classList.add("active")
})

close.addEventListener("click", () =>{
    sign_up.classList.remove("active")
})
