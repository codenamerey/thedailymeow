const svg = document.querySelector('#svg');
const menu = document.querySelector('.mobile-menu');
const x_button = document.querySelector('#x-button');

svg.addEventListener('click', showMobileMenu);
x_button.addEventListener('click', () => {
    menu.classList.remove('navigate');
});

function showMobileMenu()
{
    menu.classList.add("navigate");
}