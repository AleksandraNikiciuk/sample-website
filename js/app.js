document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------------------------------------------------------------------------*/
    /*                                                                                                */
    /*      Banner                                                                            */
    /*                                                                                                */
    /* -----------------------------------------------------------------------------------------------*/

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

    /* -----------------------------------------------------------------------------------------------*/
    /*                                                                                                */
    /*      DROP DOWN LIST                                                                            */
    /*                                                                                                */
    /* -----------------------------------------------------------------------------------------------*/

    var arrows = document.querySelectorAll(".list_arrow"); // tablica
    var dropListPanel = document.querySelectorAll(".list_panel"); // tablica
    var form = document.querySelector(".app_form");
    var listLabels = document.querySelectorAll(".list_label"); // tablica



    form.addEventListener("click", function (event) {

        if (event.target === arrows[0]) {  // jesli kliknieta pierwsza lista drop down WYBIERZ RODZAJ
            dropListPanel[0].classList.toggle("active_arrow");


            document.querySelector(".active_arrow").addEventListener("click", function (event) {

                if (event.target === dropListPanel[0].children[0]) { // jesli kliknieta pierwsza pozycja listy
                    listLabels[0].innerText = dropListPanel[0].children[0].innerText;
                    dropListPanel[0].classList.remove("active_arrow");
                    document.querySelector(".panel_left .title").innerText = dropListPanel[0].children[0].innerText;
                    document.querySelector(".panel_right .title\.value").innerText = "280";


                } else if (event.target === dropListPanel[0].children[1]) { // jesli kliknieta druga pozycja listy
                    listLabels[0].innerText = dropListPanel[0].children[1].innerText;
                    dropListPanel[0].classList.remove("active_arrow");
                    document.querySelector(".panel_left .title").innerText = dropListPanel[0].children[1].innerText;
                    document.querySelector(".panel_right .title\.value").innerText = "320";

                } else if (event.target === dropListPanel[0].children[2]) { // jesli kliknieta trzecia pozycja listy
                    listLabels[0].innerText = dropListPanel[0].children[2].innerText;
                    dropListPanel[0].classList.remove("active_arrow");
                    document.querySelector(".panel_left .title").innerText = dropListPanel[0].children[2].innerText;
                    document.querySelector(".panel_right .title\.value").innerText = "350";
                }
            });

        } else if (event.target === arrows[1]) { // jesli kliknieta druga lista drop down WYBIERZ KOLOR
            dropListPanel[1].classList.toggle("active_arrow");

            document.querySelector(".active_arrow").addEventListener("click", function (event) {

                if (event.target === dropListPanel[1].children[0]) { // jesli kliknieta pierwsza pozycja listy
                    listLabels[1].innerText = dropListPanel[1].children[0].innerText;
                    dropListPanel[1].classList.remove("active_arrow");
                    document.querySelector(".panel_left .color").innerText = dropListPanel[1].children[0].innerText;
                    document.querySelector(".panel_right .color\.value").innerText = "50";


                } else if (event.target === dropListPanel[1].children[1]) { // jesli kliknieta druga pozycja listy
                    listLabels[1].innerText = dropListPanel[1].children[1].innerText;
                    dropListPanel[1].classList.remove("active_arrow");
                    document.querySelector(".panel_left .color").innerText = dropListPanel[1].children[1].innerText;
                    document.querySelector(".panel_right .color\.value").innerText = "0";

                } else if (event.target === dropListPanel[1].children[2]) { // jesli kliknieta trzecia pozycja listy
                    listLabels[1].innerText = dropListPanel[1].children[2].innerText;
                    dropListPanel[1].classList.remove("active_arrow");
                    document.querySelector(".panel_left .color").innerText = dropListPanel[1].children[2].innerText;
                    document.querySelector(".panel_right .color\.value").innerText = "50";
                }
            });

        } else if (event.target === arrows[2]) {  // jesli kliknieta trzecia lista drop down WYBIERZ MATERIAŁ
            dropListPanel[2].classList.toggle("active_arrow");

            document.querySelector(".active_arrow").addEventListener("click", function (event) {

                if (event.target === dropListPanel[2].children[0]) { // jesli kliknieta pierwsza pozycja listy
                    listLabels[2].innerText = dropListPanel[2].children[0].innerText;
                    dropListPanel[2].classList.remove("active_arrow");
                    document.querySelector(".panel_left .pattern").innerText = dropListPanel[2].children[0].innerText;
                    document.querySelector(".panel_right .pattern\.value").innerText = "0";


                } else if (event.target === dropListPanel[2].children[1]) { // jesli kliknieta druga pozycja listy
                    listLabels[2].innerText = dropListPanel[2].children[1].innerText;
                    dropListPanel[2].classList.remove("active_arrow");
                    document.querySelector(".panel_left .pattern").innerText = dropListPanel[2].children[1].innerText;
                    document.querySelector(".panel_right .pattern\.value").innerText = "200";

                }
            });
        }

        //Jesli wybrana opcja TRANSPORT //

        if (document.querySelector(".checkbox input:checked ")) {
            document.querySelector(".panel_left .transport").innerText = "Transport";
            document.querySelector(".panel_right .transport\.value").innerText = "50";
        } else {
            document.querySelector(".panel_left .transport").innerText = null;
            document.querySelector(".panel_right .transport\.value").innerText = null;

        };


        //Suma //
        var values = document.querySelectorAll(".panel_right .value");
        var sum = 0;
        for (var i = 0; i < values.length; i++) {

            sum += Number(values[i].innerText);
        };
        document.querySelector(".sum strong").innerText = sum;

    });

});