const showAddCart = document.querySelector(`.card-add-toCart`);
const cards = document.querySelectorAll(`.card`);
const addToCart = document.querySelectorAll(`.card-add-toCart`);
const menuIcon = document.querySelector(`.menu`);
menuIcon.addEventListener(`click`, (e) => {
    const menu = document.querySelector(`.nav-bar`);
    menu.style.display = "none";
    menu.classList.add(`resp`);
});
cards.forEach((curr, i) => {
    curr.addEventListener(`mouseenter`, (e) => {
        addToCart[i].style.display = "flex";
    });
});
cards.forEach((curr, i) => {
    curr.addEventListener(`mouseleave`, (e) => {
        addToCart[i].style.display = "none";
    });
});
//# sourceMappingURL=home.js.map