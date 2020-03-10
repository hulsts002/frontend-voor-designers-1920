/*
  Wat doe je ook alweer in Javascript voor een micro-interactie?
  1. Gebruik de querySelector om een element in je html te selecteren
  2. Koppel een evenListener aan het element om een mouse-event te detecteren
  3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen.
*/

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var columnsContainer = document.querySelector(".columns");
var darkModeContainer = document.querySelector(".darkMode");
var filterContainer = document.querySelector(".filters");

// Set Columns
columnsContainer.addEventListener('change', function (event) {

    document.body.setAttribute("data-columns", event.target.id);

});

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

    if (event.keyCode == 50) {
        document.body.setAttribute("data-columns", "twee");
        var input2 = document.querySelector("#twee");
        input2.checked = true;
        input2.focus();
    } else if (event.keyCode == 51) {
        document.body.setAttribute("data-columns", "drie");
        var input3 = document.querySelector("#drie");
        input3.checked = true;
        input3.focus();
    } else if (event.keyCode == 52) {
        document.body.setAttribute("data-columns", "vier");
        var input4 = document.querySelector("#vier");
        input4.checked = true;
        input4.focus();
    } else if (event.keyCode == 76) {
        document.body.setAttribute("data-darkMode", "off");
        var inputOff = document.querySelector("#checkbox");
        inputOff.checked = false;
        inputOff.focus();
    } else if (event.keyCode == 68) {
        document.body.setAttribute("data-darkMode", "on");
        var inputOn = document.querySelector("#checkbox");
        inputOn.checked = true;
        inputOn.focus();
    } else if (event.keyCode == 65) {
        document.body.setAttribute("data-filter", "all");
        var inputAll = document.querySelector("#all");
        inputAll.checked = true;
        inputAll.focus();
    } else if (event.keyCode == 77) {
        document.body.setAttribute("data-filter", "movie");
        var inputM = document.querySelector("#movie");
        inputM.checked = true;
        inputM.focus();
    } else if (event.keyCode == 80) {
        document.body.setAttribute("data-filter", "poster");
        var inputP = document.querySelector("#poster");
        inputP.checked = true;
        inputP.focus();
    }


});
