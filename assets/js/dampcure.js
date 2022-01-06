// Fetch all the forms we want to apply custom Bootstrap validation styles to
let forms = document.getElementsByClassName('needs-validation');
// Loop over them and prevent submission
Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    }, false);
});

$(function() {
    $('#main-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        animateIn: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('#testimonials-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        smartSpeed: 450,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1024: {
                items: 3
            }
        }
    });

    $('#designs-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: false,
        smartSpeed: 450,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    });

    $('.accordion-button').on('click', function() {
        $('.accordion-button>.accordion-btn-text').removeClass('active');
        $(this).children(':first').addClass('active');
    });
});