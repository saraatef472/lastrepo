// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// nav menu
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
        .querySelector(".custom_menu-btn")
        .classList.toggle("menu_btn-style");
}
var x = document.getElementById("on");
var z = document.getElementById("off");
var y = document.getElementById("on2");

var a = document.getElementById("alll");
var b = document.getElementById("vision5");
var c = document.getElementById("mission5");

function on() {

    if (x.style.display === "none") {
        x.style.display = "flex";
        z.style.display = "none";

    } else {

        z.style.display = "flex";
        x.style.display = "none";
    }
}


function off() {
    // var x = document.getElementById("on");
    // var z = document.getElementById("off");
    if (z.style.display === "none") {
        z.style.display = "flex";
        x.style.display = "none";

    } else {
        x.style.display = "flex";
        z.style.display = "none";


    }
}



function on() {
    // var x = document.getElementById("on");
    // var z = document.getElementById("off");
    if (y.style.display === "none" && z.style.display === "flex" && x.style.display === "none") {
        y.style.display = "flex";
        x.style.display = "none";
        z.style.display = "none";

    } else if (y.style.display === "none" && x.style.display === "flex" && z.style.display === "none") {
        z.style.display = "flex";
        x.style.display = "none";
        y.style.display = "none";


    } else if (x.style.display === "none" && y.style.display === "flex" && z.style.display === "none") {
        x.style.display = "flex";
        z.style.display = "none";
        y.style.display = "none";


    } else {
        x.style.display = "flex";
        z.style.display = "none";
        y.style.display = "none";
    }
}

function off2() {
    // var x = document.getElementById("on");
    // var z = document.getElementById("off");
    if (y.style.display === "none" && z.style.display === "flex" && x.style.display === "none") {
        y.style.display = "flex";
        x.style.display = "none";
        z.style.display = "none";

    } else if (y.style.display === "none" && x.style.display === "flex" && z.style.display === "none") {
        z.style.display = "flex";
        x.style.display = "none";
        y.style.display = "none";


    } else if (x.style.display === "none" && y.style.display === "flex" && z.style.display === "none") {
        x.style.display = "flex";
        z.style.display = "none";
        y.style.display = "none";


    } else {
        x.style.display = "flex";
        z.style.display = "none";
        y.style.display = "none";
    }
}


function all() {
    // var x = document.getElementById("on");

    a.style.display = "flex";
    c.style.display = "none";
    b.style.display = "none";

}


function vision() {
    // var x = document.getElementById("on");
    // var z = document.getElementById("off");
    if (a.style.display === "none" && b.style.display === "flex" && c.style.display === "none") {
        b.style.display = "flex";
        c.style.display = "none";
        a.style.display = "none";

    } else if (a.style.display === "none" && c.style.display === "flex" && b.style.display === "none") {
        b.style.display = "flex";
        c.style.display = "none";
        a.style.display = "none";


    } else if (c.style.display === "none" && a.style.display === "flex" && b.style.display === "none") {
        b.style.display = "flex";
        c.style.display = "none";
        a.style.display = "none";


    } else {
        b.style.display = "flex";
        c.style.display = "none";
        a.style.display = "none";
    }
}







function mission() {
    // var x = document.getElementById("on");
    // var z = document.getElementById("off");
    if (a.style.display === "none" && b.style.display === "flex" && c.style.display === "none") {
        c.style.display = "flex";
        c.style.display = "none";
        b.style.display = "none";

    } else if (a.style.display === "none" && c.style.display === "flex" && b.style.display === "none") {
        c.style.display = "flex";
        a.style.display = "none";
        b.style.display = "none";


    } else if (c.style.display === "none" && a.style.display === "flex" && b.style.display === "none") {
        c.style.display = "flex";
        b.style.display = "none";
        a.style.display = "none";


    } else {
        c.style.display = "flex";
        b.style.display = "none";
        a.style.display = "none";
    }
}