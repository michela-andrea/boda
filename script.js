/* =========================
   MICHELA & ANDREA WEDDING
   Script principal
========================= */


/* =========================
   CUENTA REGRESIVA
   Formato: meses : semanas : días
========================= */


const weddingDate = new Date("September 18, 2027 12:00:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference = weddingDate - now;


    if (difference <= 0) {

        document.getElementById("countdown").innerHTML =
        "¡Hoy celebramos nuestro amor! ❤️";

        return;

    }


    const totalDays = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    const months = Math.floor(totalDays / 30.44);

    const remainingDaysAfterMonths =
        Math.floor(totalDays - (months * 30.44));


    const weeks =
        Math.floor(remainingDaysAfterMonths / 7);


    const days =
        Math.floor(remainingDaysAfterMonths % 7);



    document.getElementById("months").innerHTML = months;

    document.getElementById("weeks").innerHTML = weeks;

    document.getElementById("days").innerHTML = days;

}


setInterval(updateCountdown, 1000);

updateCountdown();



/* =========================
   CARRUSEL DE FOTOS
========================= */


const images = [

    "assets/images/portada-1.jpg",

    "assets/images/portada-2.jpg",

    "assets/images/portada-3.jpg"

];


let currentImage = 0;



function changeBackground(){

    currentImage++;

    if(currentImage >= images.length){

        currentImage = 0;

    }


    document.querySelector(".hero").style.backgroundImage =

    `
    linear-gradient(
    rgba(40,40,30,0.35),
    rgba(40,40,30,0.35)
    ),
    url('${images[currentImage]}')
    `;


}



setInterval(changeBackground, 6000);



/* =========================
   IDIOMA AUTOMÁTICO
========================= */


function detectLanguage(){


    const browserLanguage =
    navigator.language || navigator.userLanguage;



    if(browserLanguage.startsWith("it")){

        changeLanguage("it");

    }

    else if(browserLanguage.startsWith("es")){

        changeLanguage("es");

    }

    else {

        changeLanguage("en");

    }


}



/* =========================
   CAMBIO MANUAL DE IDIOMA
========================= */


function changeLanguage(language){


    if(typeof translations === "undefined"){

        return;

    }


    document.querySelectorAll("[data-key]").forEach(element => {


        const key = element.getAttribute("data-key");


        if(translations[language][key]){

            element.innerHTML =
            translations[language][key];

        }


    });


    localStorage.setItem(
        "preferredLanguage",
        language
    );


}



window.onload = function(){


    const savedLanguage =
    localStorage.getItem("preferredLanguage");


    if(savedLanguage){

        changeLanguage(savedLanguage);

    }

    else {

        detectLanguage();

    }


};
