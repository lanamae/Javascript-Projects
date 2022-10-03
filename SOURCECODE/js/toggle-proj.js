// toggle menu
const menubar = document.querySelector('.menu-bar');
const toggle = document.querySelector('.toggle-menu');
const close = document.querySelector('#close');

toggle.addEventListener('click', () =>{
    console.log('sidebar open');
    menubar.classList.add('show');
    menubar.classList.remove('hide');
})


close.addEventListener('click', () =>{
    console.log('sidebar close 123');
    menubar.classList.add('hide');
    menubar.classList.remove('show');
})


