//Zadanie 1

const json = '{"name":"Mango","age":3,"isHappy":true}'

// Pary klucz-wartosc w tym pliku to:
"name":"Mango"
"age":3
"isHappy":true

//Typy danych dla każdej wartości to:
"name":"Mango" //parametr zapisany jako tekst (string)
"age":3 //parametr zapisany jako liczba (number)
"isHappy":true //parametr zapisany jako boolean

//Struktura JSON w tym przykładzie to obiekt, ktory zawiera trzy pary klucz-wartosc.
//Klucze sa napisami, a wartosci moga byc roznego typu, w tym tekstem, liczbami i wartosciami logicznymi.
//Obiekt JSON jest otoczony nawiasami klamrowymi, a pary klucz-wartosc sa oddzielone przecinkami.


//Zadanie 2


const json = '{"name":"Mango","age":3,"isHappy":true}'

console.log(JSON.parse(json))


//Zadanie 3

try {
    const dane = JSON.parse("Jakis dziwny format json");
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

console.log("Testowy log");
