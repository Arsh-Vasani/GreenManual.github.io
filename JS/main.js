const nexticon = '<img src="./images/next-btn.png" />';
const previcon = '<img src="./images/prev-btn.png" />';
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: [
        previcon,
        nexticon
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})