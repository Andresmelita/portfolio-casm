window.onscroll = function() {
    var position = window.pageYOffset || document.documentElement.scrollTop;

    var elemento1 = document.getElementById("project1")
    var elemento2 = document.getElementById("project1")
    var elemento3 = document.getElementById("project1")
    var elemento4 = document.getElementById("project1")
    var elemento5 = document.getElementById("project1")

    elemento1.style.bottom = position * 0.1 + "px";
    elemento2.style.bottom = position * 0.1 + "px";
    elemento3.style.bottom = position * 0.1 + "px";
    elemento4.style.bottom = position * 0.1 + "px";
    elemento5.style.bottom = position * 0.1 + "px";
}