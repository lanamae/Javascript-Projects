const menuBar = document.querySelector('.menu-bar');
const toggle = document.querySelector('.toggle-menu');
const close = document.querySelector('#close');

close.addEventListener('click', () =>{
    console.log("testing1");
    menuBar.classList.add(".hide");
    menuBar.classList.remove(".show");
})

toggle.addEventListener('click', () =>{
    console.log("testing 0");
    menuBar.classList.add(".show");
    menuBar.classList.remove(".hide");
})