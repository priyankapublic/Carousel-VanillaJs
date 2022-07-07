import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

class Carousel {
  constructor(items) {
    this.currentIndex = 0;
    this.carouselItems = items;
    this.size = this.carouselItems.length - 1;
    this.showCarouselItem();
  }

  showCarouselItem() {
    this.carouselItems.forEach((slide, indx) => {
      slide.style.transform = `translateX(${
        100 * (indx - this.currentIndex)
      }%)`;
    });
  }
  nextButtonClick() {
    this.currentIndex++;
    // if (this.currentIndex > this.size) {
    //   this.currentIndex = 0;
    // }
    this.showCarouselItem();
  }

  prevButtonClick() {
    this.currentIndex--;
    // if (this.currentIndex < 0) {
    //   this.currentIndex = this.size;
    // }
    this.showCarouselItem();
  }
}

var carouselItems = document.querySelectorAll(".carousel-item");

const car = new Carousel(carouselItems);
var prevButton = document.querySelector("#prev");
var nextButton = document.querySelector("#next");

if (car.currentIndex === 0) {
  prevButton.setAttribute("disabled", true);
}

prevButton.addEventListener("click", function () {
  car.prevButtonClick();
  if (car.currentIndex < 1) {
    prevButton.setAttribute("disabled", true);
  }

  if (car.currentIndex < carouselItems.length) {
    nextButton.removeAttribute("disabled");
  }
});
nextButton.addEventListener("click", function () {
  car.nextButtonClick();
  if (car.currentIndex > 0) {
    prevButton.removeAttribute("disabled");
  }
  if (car.currentIndex === carouselItems.length - 1) {
    nextButton.setAttribute("disabled", true);
  }
});
