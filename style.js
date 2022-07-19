let formBox = document.querySelector('.form-box');
let searchBtn = document.querySelector('#search-btn');


window.scroll = () => {
    searchBtn.classList.remove('fa-times');
    formBox.classList.remove('active');
}

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    formBox.classList.toggle('active');
})

let themeToggler = document.querySelector('.theme-toggler');
document.querySelector('.toggle-btn').onclick = () => {
    themeToggler.classList.toggle('active');

}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn => {

    btn.onclick = () => {
        let color = btn.style.background;
        document.querySelector(':root').style.setProperty('--pink-color', color);
    }
});


let navBar = document.querySelector('.navbar');
let menuBar = document.querySelector('#menu-bar');

menuBar.addEventListener('click' , () =>{
    menuBar.classList.toggle('fa-times');
    navBar.classList.toggle('active');

})