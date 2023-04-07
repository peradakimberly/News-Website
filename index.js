const favorites = document.querySelectorAll(".heart");

favorites.forEach((favorite) => {
  favorite.addEventListener("click", () => {
    favorite.classList.toggle("on");
  });
});


const markedAsRead = document.querySelectorAll(".check");

markedAsRead.forEach((mark) => {
  mark.addEventListener("click", () => {
    mark.classList.toggle("check-show");
    mark.classList.toggle("on");
  });
});


const deleteBtn = document.querySelectorAll(".cards .delete");

deleteBtn.forEach((item) => {
  item.addEventListener("click", () => {
    const card = item.closest(".cards");
    card.parentNode.removeChild(card);
  });
});


const hamburg = document.querySelector("#hamburg");
const menu = document.querySelector(".navigation");

hamburg.addEventListener("click", () => {
  hamburg.classList.toggle('active');
  menu.classList.toggle('active');
});

