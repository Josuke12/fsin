const burger = document.querySelector('.menu-burger');
const burgerList = document.querySelector('.header__list');

burger.addEventListener('click', (event) => {
	burger.classList.toggle('burger-active');
	burgerList.classList.toggle('header__list-active');
	event.preventDefault();
});