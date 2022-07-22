ScrollReveal().reveal('#right', {
    origin: 'right',
    distance: '200px',
    delay: 300
});

ScrollReveal().reveal('#left', {
    origin: 'left',
    distance: '200px',
    delay: 300
});

var swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 8,
    spaceBetween: 30,
});

var swiper = new Swiper(".myProjects", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        360: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        960: {
            slidesPerView: 4,
        }
    },
});

var swiper = new Swiper(".neflo", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
        360: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        960: {
            slidesPerView: 4,
        }
    },
});

var swiper = new Swiper(".wizard", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
        360: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        960: {
            slidesPerView: 4,
        }
    },
});