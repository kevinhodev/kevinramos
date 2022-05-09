const items = document.querySelectorAll(".item");

// Loop through items and set each item translateX property to index * 110%
// except for the first one, which is 100%.
items.forEach((item, index) => {
  if (index === 0) item.style.transform = `translateX(${index * 100}%)`;
  else item.style.transform = `translateX(${index * 110}%)`;
});

const nextItemButton = document.querySelector(".btn-next");
const previousItemButton = document.querySelector(".btn-prev");

let currentSlide = 0;
let maxItems = items.length - 1;
let moveDirection = "";

console.log(maxItems);

nextItemButton.addEventListener("click", function () {
  moveDirection = "right";
  go();
});

previousItemButton.addEventListener("click", function () {
  moveDirection = "left";
  go();
});

const go = (index) => {
  if (moveDirection === "right") {
    if (currentSlide === maxItems) currentSlide = 0;
    else currentSlide++;
  }

  if (moveDirection === "left") {
    if (currentSlide === 0) currentSlide = maxItems;
    else currentSlide--;
  }

  items.forEach((slide, indx) => {
    slide.style.transform = `translateX(${110 * (indx - currentSlide)}%)`;
  });

  console.log(currentSlide);
};
