document.addEventListener("DOMContentLoaded", function () {

    var btn_prev = document.querySelector(".banner-prev");
    var btn_next = document.querySelector(".banner-next");


    btn_next.addEventListener("click", function (event) {

        var active = document.querySelector(".banner-slide-actives");
        active.classList.remove("banner-slide-actives");

        if (active.nextElementSibling) {
            active.nextElementSibling.classList.add("banner-slide-actives");
        } else {
            document.querySelector(".banner-sliders").firstElementChild.classList.add("banner-slide-actives");
        };

    });

    btn_prev.addEventListener("click", function (event) {

        var active = document.querySelector(".banner-slide-actives");
        active.classList.remove("banner-slide-actives");

        if (active.previousElementSibling) {
            active.previousElementSibling.classList.add("banner-slide-actives");
        } else {
            document.querySelector(".banner-sliders").lastElementChild.classList.add("banner-slide-actives");
        };

    });


});