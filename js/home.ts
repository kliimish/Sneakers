const showAddCart = document.querySelector(`.card-add-toCart`)! as HTMLElement;
const cards = document.querySelectorAll(`.card`)! as NodeListOf<HTMLElement>;

const addToCart = document.querySelectorAll(
  `.card-add-toCart`
)! as NodeListOf<HTMLElement>;

const menuIcon = document.querySelector(`.menu`);
menuIcon.addEventListener(`click`, (e) => {
  const menu = document.querySelector(`.nav-bar`)! as HTMLElement;
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
