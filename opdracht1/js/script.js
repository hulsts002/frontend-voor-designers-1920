/*
  Wat doe je ook alweer in Javascript voor een micro-interactie?
  1. Gebruik de querySelector om een element in je html te selecteren
  2. Koppel een evenListener aan het element om een mouse-event te detecteren
  3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen.
*/

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


// Watchlist
var Movies = document.getElementsByClassName("Movie");
var checked0 = false;
var checked1 = false;
var checked2 = false;
var checked3 = false;
var checked4 = false;

var Nummer = 0;
var WatchlistNumber = document.querySelector("li a span");

var MovieDropdown = document.querySelector("ul li ul");
var i = [0, 1, 2, 3, 4, 5];

Movies[0].addEventListener('click', function () {

    Movies[0].classList.toggle('clicked');

    if (checked0 === false) {

        MovieDropdown.innerHTML += '<li id="MovieNr.' + i[0] + '">Into the Badlands</li>';

        Nummer++;
        checked0 = true;
    } else {

        var Remove0 = document.getElementById('MovieNr.0');
        Remove0.parentNode.removeChild(Remove0);

        Nummer--;
        checked0 = false;
    }

    WatchlistNumber.textContent = Nummer;

});


Movies[1].addEventListener('click', function () {


    Movies[1].classList.toggle('clicked');

    if (checked1 === false) {

        MovieDropdown.innerHTML += '<li id="MovieNr.' + i[1] + '">Shaft</li>';

        Nummer++;
        checked1 = true;
    } else {

        var Remove1 = document.getElementById('MovieNr.1');
        Remove1.parentNode.removeChild(Remove1);

        Nummer--;
        checked1 = false;
    }

    WatchlistNumber.textContent = Nummer;

});

Movies[2].addEventListener('click', function () {


    Movies[2].classList.toggle('clicked');

    if (checked2 === false) {

        MovieDropdown.innerHTML += '<li id="MovieNr.' + i[2] + '">Underworld</li>';

        Nummer++;
        checked2 = true;
    } else {

        var Remove2 = document.getElementById('MovieNr.2');
        Remove2.parentNode.removeChild(Remove2);

        Nummer--;
        checked2 = false;
    }

    WatchlistNumber.textContent = Nummer;

});

Movies[3].addEventListener('click', function () {


    Movies[3].classList.toggle('clicked');

    if (checked3 === false) {

        MovieDropdown.innerHTML += '<li id="MovieNr.' + i[3] + '">Spiderman</li>';

        Nummer++;
        checked3 = true;
    } else {

        var Remove3 = document.getElementById('MovieNr.3');
        Remove3.parentNode.removeChild(Remove3);

        Nummer--;
        checked3 = false;
    }

    WatchlistNumber.textContent = Nummer;

});

Movies[4].addEventListener('click', function () {


    Movies[4].classList.toggle('clicked');

    if (checked4 === false) {

        MovieDropdown.innerHTML += '<li id="MovieNr.' + i[4] + '">Deadpool</li>';

        Nummer++;
        checked4 = true;
    } else {

        var Remove4 = document.getElementById('MovieNr.4');
        Remove4.parentNode.removeChild(Remove4);

        Nummer--;
        checked4 = false;
    }

    WatchlistNumber.textContent = Nummer;

});
