const aboutContainer = document.querySelector('.about')
const peopleContainer = document.querySelector('.people')
const brandContainer = document.querySelector('.brand')
const peopleContainerTitle = document.querySelector('.people__title')
const brandContainerTitle = document.querySelector('.brand__title-logo')
const mainScrollWrapper = document.querySelector('.main__scroll-wrapper')
const aboutColorImages = document.querySelectorAll('.about__image-color')
const activityDescriptionItems = document.querySelectorAll('.activity__description-item')
const activityDescriptionImages = document.querySelectorAll('.activity__description-item-image')

// window. scrollTo(0, 0)

AOS.init({
    disable: 'phone',
    easing: 'ease-in-out-back'
});

new Splide('.splide', {
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
})

activityDescriptionItems.forEach(item => {
    item.addEventListener('click', () => {
        activityDescriptionItems.forEach(descriptionItem => {
            descriptionItem.classList.remove('activity__description-item--active')
        })
        item.classList.add('activity__description-item--active')

        activityDescriptionImages.forEach(descriptionImage => {
            descriptionImage.classList.remove('activity__description-item-image--active')

            if (descriptionImage.id.includes(item.id)) {
                descriptionImage.classList.add('activity__description-item-image--active')
            }
        })
    })
})



