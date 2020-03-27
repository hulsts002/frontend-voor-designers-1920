/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/
const section = document.querySelector("section");
var button = document.querySelector("button");
//var article = document.querySelector("article");


/* Doen als de pagina geladen is */
window.onload = function () {
    let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    /* Doen als de server geantwoord heeft */
    request.onload = function () {
        const movies = request.response;
        showMovies(movies);
    }
};

function showMovies(jsonObj) {
    const movie = jsonObj;

    for (let i = 0; i < movie.length; i++) {
        const myArticle = document.createElement('article');

        vulMetBasics(myArticle, movie[i]);

        /* bij het aanmaken van een film gelijk ook een eventListener toevoegen */
        myArticle.addEventListener('click', function (event) {
            vulFilmMetInfo(this);
        });

        section.appendChild(myArticle);
    }
}



function vulFilmMetInfo(deFilm) {
    /* het nummer van de film bepalen */
    let filmID = deFilm.id;
    let volgNummer = filmID.substring(7);


    /* de info van alleen die film ophalen */
    let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies' + volgNummer + '.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    /* dit doen als de info van de film binnenkomst */
    request.onload = function () {
        const filmInfo = request.response;

        /* als de film de class "details" heeft */
        if (deFilm.classList.contains("details")) {
            /* de class "details" verwijderen */
            deFilm.classList.remove("details");
            /* de film vullen met de basics */
            vulMetBasics(deFilm, filmInfo);
        }
        /* als de film de class "details" niet heeft */
        else {
            /* de class "details" toevoegen */
            deFilm.classList.add("details");
            /* de film vullen met de details */
            vulMetDetails(deFilm, filmInfo);
        }
    }
}


/* een film met de basics vullen */
function vulMetBasics(myArticle, filmInfo) {
    let Titel = document.createElement('h2');
    let smallPlot = document.createElement('p');
    let ReleaseDateGenre = document.createElement('p');
    //    let Genre = document.createElement('p');
    let image = document.createElement('img');

    Titel.textContent = filmInfo.title;
    smallPlot.textContent = filmInfo.simple_plot;
    image.src = filmInfo.cover;
    var date = new Date(filmInfo.release_date);
    ReleaseDateGenre.textContent = date.getFullYear() + " | " + filmInfo.genres.join(' / ');
    //    Genre.textContent = 'Genre: ' + filmInfo.genres;

    myArticle.setAttribute("id", 'Article' + filmInfo.id);
    smallPlot.setAttribute("id", 'sP' + filmInfo.id);
    ReleaseDateGenre.setAttribute("id", 'rDg' + filmInfo.id);
    //    Genre.setAttribute("id", 'g' + filmInfo.id);

    /* article leeg maken */
    myArticle.textContent = "";
    /* article vullen */
    myArticle.appendChild(Titel);
    myArticle.appendChild(smallPlot);
    myArticle.appendChild(image);
    myArticle.appendChild(ReleaseDateGenre);
    //    myArticle.appendChild(Genre);
}


/* een film met details vullen */
function vulMetDetails(myArticle, filmInfo) {

    let title = document.createElement('h2');
    let plot = document.createElement('p');

    title.textContent = filmInfo.title;
    plot.textContent = filmInfo.plot;

    /* article leeg maken */
    myArticle.textContent = "";
    /* article vullen */
    myArticle.appendChild(title);
    myArticle.appendChild(plot);
}




var darkModeContainer = document.querySelector(".darkMode");
var filterContainer = document.querySelector(".filters");

// Set Dark Mode
darkModeContainer.addEventListener('change', function (event) {

    if (event.target.checked) {
        document.body.setAttribute("data-darkMode", "on");
    } else {
        document.body.setAttribute("data-darkMode", "off");
    }

});

// Set Filters
filterContainer.addEventListener('change', function (event) {

    document.body.setAttribute("data-filter", event.target.id);

});


// Set Columns and Dark Mode with Keyboard Input
document.body.addEventListener('keydown', function (event) {

    if (event.keyCode == 76) {
        document.body.setAttribute("data-darkMode", "off");
        var inputOff = document.querySelector("#checkbox");
        inputOff.checked = false;
        inputOff.focus();
    } else if (event.keyCode == 68) {
        document.body.setAttribute("data-darkMode", "on");
        var inputOn = document.querySelector("#checkbox");
        inputOn.checked = true;
        inputOn.focus();
    }


});


