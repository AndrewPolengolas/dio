"use strict";
let valorAny;
valorAny = 3;
valorAny = 'olá';
valorAny = true;
let valoString = 'teste';
valoString = valorAny;
let valorString2 = 'testao';
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valoString, valorString2);
