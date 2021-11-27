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

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
    .add({
        targets: '.ml11 .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeInOutQuad",
        duration: 700
    })
    .add({
        targets: '.ml11 .line',
        translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
        easing: "easeInOutQuad",
        duration: 700,
        delay: 100
    }).add({
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 34 * (i + 1)
    })

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
        }
    },
});