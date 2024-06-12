const aboutContainer = document.querySelector('.about')
const peopleContainer = document.querySelector('.people')
const brandContainer = document.querySelector('.brand')
const activityContainer = document.querySelector('.activity')
const peopleContainerTitle = document.querySelector('.people__title')
const partnersContainer = document.querySelector('.activity__partners')
const quoteContainer = document.querySelector('.activity__quote-wrapper')
const brandContainerTitle = document.querySelector('.brand__title-logo')
const activityDescriptionListImages = document.querySelector('.activity__description-list-images')
const activityDescriptionList = document.querySelector('.activity__description-list')
const activityArticlesDescriptionBlock = document.querySelector('.activity__articles-description-block')
const mainScrollWrapper = document.querySelector('.main__scroll-wrapper')
const aboutColorImages = document.querySelectorAll('.about__image-color')
const activityDescriptionItems = document.querySelectorAll('.activity__description-item')
const activityDescriptionImages = document.querySelectorAll('.activity__description-item-image')
const activityArticlesItems = document.querySelectorAll('.activity__articles-item')

AOS.init({
    disable: 'phone',
    easing: 'ease-in-out-back'
});

new Splide('#partners', {
    arrows: false,
    pagination: false,
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    autoWidth: true,
    perPage: 8,
    autoScroll: {
        speed: 1,
        pauseOnHover: false,
    },
}).mount(window.splide.Extensions);

new Splide('#images', {
    arrows: false,
    pagination: false,
    type   : 'fade',
    rewind: true,
    speed: 1000,
    autoplay: 'play',
    perPage : 1,
    pauseOnHover: false,
    interval: 2000
}).mount();

const showColoredAboutImages = () => {
    aboutColorImages.forEach(item => {
        item.classList.remove('about__image-color--hide')
    })
}

mainScrollWrapper.addEventListener('scroll', () => {
    if (aboutContainer.getBoundingClientRect().top < 80 && aboutContainer.getBoundingClientRect().top > 0) {
        showColoredAboutImages()
    };

    if (brandContainer.getBoundingClientRect().top < 300) {
        brandContainerTitle.classList.add('aos-animate')
    }

    if (peopleContainer.getBoundingClientRect().top < 300) {
        peopleContainerTitle.classList.add('aos-animate')
    }

    if (activityContainer.getBoundingClientRect().top < 300) {
        activityDescriptionListImages.classList.add('aos-animate')
        activityDescriptionList.classList.add('aos-animate')
    }

    if (activityContainer.getBoundingClientRect().top < -20) {
        activityArticlesDescriptionBlock.classList.add('aos-animate')
    }

    if (activityContainer.getBoundingClientRect().top < 100) {
        mainScrollWrapper.style['scroll-snap-type'] = 'unset'
    }

    if (activityContainer.getBoundingClientRect().top > 100) {
        if(window.innerWidth > 720) {
            mainScrollWrapper.style['scroll-snap-type'] = 'y mandatory'
        }
    }

    if (activityContainer.getBoundingClientRect().top < -600) {
        activityArticlesItems.forEach(item => {
            item.classList.add('aos-animate')
        })
    }

    if (activityContainer.getBoundingClientRect().top < -800) {
        partnersContainer.classList.add('aos-animate')
    }

    if (activityContainer.getBoundingClientRect().top < -1200) {
        quoteContainer.classList.add('aos-animate')
    }
})

activityDescriptionItems.forEach(item => {
    item.addEventListener('click', () => {
        activityDescriptionItems.forEach(descriptionItem => {
            descriptionItem.classList.remove('activity__description-item--active')
        })
        item.classList.add('activity__description-item--active')
    })
})
