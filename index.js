// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
var copyOfCats = new Array;
var copyOfCats1 = new Array;
var copyOfCats2 = new Array;
var copyOfCats3 = new Array;

//var cats1 = [...cats, "Broom"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const copyOfCats = [...cats, "Broom"];
    return copyOfCats;
}

function prependCat(name) {
    const copyOfCats1 = ["Arnold", ...cats];
    return copyOfCats1;
}

function removeLastCat() {
    const copyOfCats2 = cats.slice(0, -1);
    return copyOfCats2;
}

function removeFirstCat() {
    const copyOfCats3 = cats.slice(1);
    return copyOfCats3;
}