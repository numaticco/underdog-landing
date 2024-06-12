// source/scripts/index.js
var aboutContainer = document.querySelector(".about");
var peopleContainer = document.querySelector(".people");
var brandContainer = document.querySelector(".brand");
var activityContainer = document.querySelector(".activity");
var peopleContainerTitle = document.querySelector(".people__title");
var partnersContainer = document.querySelector(".activity__partners");
var quoteContainer = document.querySelector(".activity__quote-wrapper");
var brandContainerTitle = document.querySelector(".brand__title-logo");
var activityDescriptionListImages = document.querySelector(".activity__description-list-images");
var activityDescriptionList = document.querySelector(".activity__description-list");
var activityArticlesDescriptionBlock = document.querySelector(".activity__articles-description-block");
var mainScrollWrapper = document.querySelector(".main__scroll-wrapper");
var aboutColorImages = document.querySelectorAll(".about__image-color");
var activityDescriptionItems = document.querySelectorAll(".activity__description-item");
var activityDescriptionImages = document.querySelectorAll(".activity__description-item-image");
var activityArticlesItems = document.querySelectorAll(".activity__articles-item");
AOS.init({
  disable: "phone",
  easing: "ease-in-out-back"
});
new Splide("#partners", {
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
new Splide("#images", {
  arrows: false,
  pagination: false,
  type: "fade",
  rewind: true,
  speed: 1e3,
  autoplay: "play",
  perPage: 1,
  pauseOnHover: false,
  interval: 2e3
}).mount();
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
  if (activityContainer.getBoundingClientRect().top < 300) {
    activityDescriptionListImages.classList.add("aos-animate");
    activityDescriptionList.classList.add("aos-animate");
  }
  if (activityContainer.getBoundingClientRect().top < -20) {
    activityArticlesDescriptionBlock.classList.add("aos-animate");
  }
  if (activityContainer.getBoundingClientRect().top < 100) {
    mainScrollWrapper.style["scroll-snap-type"] = "unset";
  }
  if (activityContainer.getBoundingClientRect().top > 100) {
    if (window.innerWidth > 720) {
      mainScrollWrapper.style["scroll-snap-type"] = "y mandatory";
    }
  }
  if (activityContainer.getBoundingClientRect().top < -600) {
    activityArticlesItems.forEach((item) => {
      item.classList.add("aos-animate");
    });
  }
  if (activityContainer.getBoundingClientRect().top < -800) {
    partnersContainer.classList.add("aos-animate");
  }
  if (activityContainer.getBoundingClientRect().top < -1200) {
    quoteContainer.classList.add("aos-animate");
  }
});
activityDescriptionItems.forEach((item) => {
  item.addEventListener("click", () => {
    activityDescriptionItems.forEach((descriptionItem) => {
      descriptionItem.classList.remove("activity__description-item--active");
    });
    item.classList.add("activity__description-item--active");
  });
});
//# sourceMappingURL=index.js.map
