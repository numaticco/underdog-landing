// source/scripts/index.js
var aboutContainer = document.querySelector(".about");
var peopleContainer = document.querySelector(".people");
var brandContainer = document.querySelector(".brand");
var peopleContainerTitle = document.querySelector(".people__title");
var brandContainerTitle = document.querySelector(".brand__title-logo");
var mainScrollWrapper = document.querySelector(".main__scroll-wrapper");
var aboutColorImages = document.querySelectorAll(".about__image-color");
var activityDescriptionItems = document.querySelectorAll(".activity__description-item");
var activityDescriptionImages = document.querySelectorAll(".activity__description-item-image");
AOS.init({
  disable: "phone",
  easing: "ease-in-out-back"
});
new Splide(".splide", {
  arrows: false,
  pagination: false,
  type: "loop",
  drag: "free",
  focus: "center",
  autoWidth: true,
  perPage: 8,
  autoScroll: {
    speed: 1,
    pauseOnHover: false
  }
}).mount(window.splide.Extensions);
var showColoredAboutImages = () => {
  aboutColorImages.forEach((item) => {
    item.classList.remove("about__image-color--hide");
  });
};
mainScrollWrapper.addEventListener("scroll", () => {
  if (aboutContainer.getBoundingClientRect().top < 80 && aboutContainer.getBoundingClientRect().top > 0) {
    showColoredAboutImages();
  }
  ;
  if (brandContainer.getBoundingClientRect().top < 300) {
    brandContainerTitle.classList.add("aos-animate");
  }
  if (peopleContainer.getBoundingClientRect().top < 300) {
    peopleContainerTitle.classList.add("aos-animate");
  }
});
activityDescriptionItems.forEach((item) => {
  item.addEventListener("click", () => {
    activityDescriptionItems.forEach((descriptionItem) => {
      descriptionItem.classList.remove("activity__description-item--active");
    });
    item.classList.add("activity__description-item--active");
    activityDescriptionImages.forEach((descriptionImage) => {
      descriptionImage.classList.remove("activity__description-item-image--active");
      if (descriptionImage.id.includes(item.id)) {
        descriptionImage.classList.add("activity__description-item-image--active");
      }
    });
  });
});
//# sourceMappingURL=index.js.map
