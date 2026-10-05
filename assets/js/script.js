$(document).ready(function () {


    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));

    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });



    $("#enviarCorreo").click(function (event) {

        event.preventDefault();

        alert("El mensaje fue enviado correctamente.");

    });


    $(".nav-link").click(function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            const hash = this.hash;

            $("html, body").animate({

                scrollTop: $(hash).offset().top - 70

            }, 800);

        }

    });


    $(window).scroll(function () {

        if ($(this).scrollTop() > 80) {

            $(".navbar").css({
                "background": "#0dcaf0"
            });

        } else {

            $(".navbar").css({
                "background": "transparent"
            });

        }

    });

});