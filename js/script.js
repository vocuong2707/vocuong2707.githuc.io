let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    
    cartItem.classList.remove('active');
    seacrchForm.classList.remove('active');
}

let seacrchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () => {
    seacrchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    
}



let cartItem = document.querySelector('.cart-times-container')

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    seacrchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    seacrchForm.classList.remove('active');
}