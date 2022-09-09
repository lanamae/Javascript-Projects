// toggle menu
// toggle menu
const menubar = document.querySelector('.menubar');
const sidebar = document.querySelector('.sidebar');
const close = document.querySelector('.close');

menubar.addEventListener('click', () =>{
    console.log('sidebar open')
    sidebar.classList.add('show');
    sidebar.classList.remove('hide')
})


close.addEventListener('click', () =>{
    console.log('sidebar close')
    sidebar.classList.add('hide');
    sidebar.classList.remove('show')
})
