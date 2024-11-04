const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

const result = document.getElementById("result");
const ispair = document.getElementById("ispair");

function addition() {
    result.innerText = "Résultat: "+(Number(num1.value)+Number(num2.value)).toString();
};

function soustraction() {
    result.innerText = "Résultat: "+(Number(num1.value)-Number(num2.value)).toString();
};

function division() {
    result.innerText = "Résultat: "+(Number(num1.value)/Number(num2.value)).toString();
};

function multiplication() {
    result.innerText = "Résultat: "+(Number(num1.value)*Number(num2.value)).toString();
};

function parite() {
    var num = Number(num1.value);
    if(num%2 == 0) {
        ispair.innerText = "Pair";
        ispair.style = "color: green;";
    } else {
        ispair.innerText = "Impair";
        ispair.style = "color: red;";
    }
};

function premuter() {
    var num1_static = num1.value;
    var num2_static = num2.value;
    num1.value = num2_static;
    num2.value = num1_static;
};