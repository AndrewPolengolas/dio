let valorAny: any;

valorAny = 3;
valorAny = 'olá';
valorAny = true;

let valoString: string = 'teste';
valoString = valorAny;

let valorString2 = 'testao'
valorString2 = valorAny;

function somarString(string1: string, string2: string){
    console.log(string1 + string2);
}

somarString(valoString, valorString2)