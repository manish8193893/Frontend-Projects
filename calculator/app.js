function display(num) {
    var screen = document.getElementById("screen");
    screen.value += num;
}

function insertSym(sym) {
    var screen = document.getElementById("screen");
    screen.value += sym;
}

function calculate() {
    var screen = document.getElementById("screen");
    var result = eval(screen.value);
    screen.value = result;
}

//The Cls (Clear Screen) function

function clr() {
    var screen = document.getElementById("screen");
    screen.value = "";
}

//The del() function

function del() {
    var screen = document.getElementById("screen");
    var exp = screen.value;
    var led = exp.substring(0, exp.length - 1);
    screen.value = led;
}