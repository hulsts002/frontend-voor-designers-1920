/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

const section = document.querySelector("section");
var button = document.querySelector("button");
//var article = document.querySelector("article");

let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();


/* Gelijk laden als je pagina opent */
request.onload = function () {
    const movies = request.response;
    showMovies(movies);
}

/* Laden wanneer je op knop klikt */
//button.addEventListener('click', function () {
//
//    const movies = request.response;
//    showMovies(movies);
//
//});


function showMovies(jsonObj) {
    const movie = jsonObj;

    for (let i = 0; i < movie.length; i++) {
        const myArticle = document.createElement('article');
        const Titel = document.createElement('h2');
        const smallPlot = document.createElement('p');
        const ReleaseDate = document.createElement('p');
        const Genre = document.createElement('p');
        const image = document.createElement('img');

        Titel.textContent = movie[i].title;
        smallPlot.textContent = movie[i].simple_plot;
        ReleaseDate.textContent = 'Release Date: ' + movie[i].release_date;
        Genre.textContent = 'Genre: ' + movie[i].genres;
        image.src = movie[i].cover;

        myArticle.setAttribute("id", 'Article' + i);
        smallPlot.setAttribute("id", 'sP' + i);
        ReleaseDate.setAttribute("id", 'rD' + i);
        Genre.setAttribute("id", 'g' + i);

        myArticle.appendChild(Titel);
        myArticle.appendChild(smallPlot);
        myArticle.appendChild(ReleaseDate);
        myArticle.appendChild(Genre);
        myArticle.appendChild(image);

        section.appendChild(myArticle);
    }
}


section.addEventListener('click', function (e) {

        if (e.target.id == 'Article0') {
            console.log("Article here");
            const info = request.response;
            showInfo(info);
        }

//    console.log("Article here");
//    const info = request.response;
//    showInfo(info);

});


function showInfo(jsonObj) {
    const movie = jsonObj;

    var img = document.querySelector('#Article0 img');
    var sP = document.querySelector('#sP0');
    var rD = document.querySelector('#rD0');
    var g = document.querySelector('#g0');

    var bigPlot = document.createElement('p');
    bigPlot.textContent = movie[0].plot;

    img.parentNode.removeChild(img);
    rD.parentNode.removeChild(rD);
    g.parentNode.removeChild(g);
    sP.parentNode.replaceChild(bigPlot, sP);

//
//    for (let i = 0; i < movie.length; i++) {
//
//         var p = document.querySelector('h2');
//
//         const bigPlot = document.createElement('p');
//
//         bigPlot.textContent = movie[i].plot;
//
//         p.parentNode.replaceChild(bigPlot, p);
//
//    }

}
