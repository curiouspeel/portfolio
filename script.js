const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector(".menu-items");

function toggleBtn(){
    menu.classList.toggle('visible');
}

menuBtn.addEventListener('click', toggleBtn);