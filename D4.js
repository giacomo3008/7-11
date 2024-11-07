/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const l1 = 5;
const l2 = 5;

console.log(area(l1,l2));
function area(a,b) {
    return a*b;
}

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(a,b){
    if(a===b){
        return 3*(a+b);
    }else{
        return a+b;
    }
}
console.log(crazySum(l1,l2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const num = 27;

function crazyDiff(num){
    let aDiff;
    aDiff = Math.abs(num-19);
    if(num>19){
        return aDiff*3;
    }else{
        return aDiff;
    }
}
console.log(crazyDiff(num));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(num){
    if((num>20 && num<=100) || n==400){
        return true;
    }else{
        return false;
    }
}
console.log(boundary(num));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

let str = "ciao mi chiamo Giacomo";
epify(str);
console.log(str);

function epify(string){
    if(string.substring(0,7)==="EPICODE"){
        return;
    }else{
        str = "EPICODE "+str;
    }
}

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

if(check3and7(num)){
    console.log("E' un loro multiplo");
}else{
    console.log("Non è un loro multiplo");
}
function check3and7(num){
    if(num%3===0 || num%7===0){
        return true;
    }else{
        return false;
    }
}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

let stri = "ciao io mi chiamo Giacomo";
stri = reverseString(stri);
console.log(stri);

function reverseString(string){
    let reverse = "";
    for(i=(string.length-1); i>=0; i--){
        reverse = reverse.concat(string.charAt(i));
    }
    return reverse;
}

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
let st = "ciao io mi chiamo Giacomo";
st = upperFirst(st);
console.log(st);

function upperFirst(string){
    let upperFirst = "";
    let char = "";
    let list = string.split(" ");
    for(i=0; i<list.length; i++){
        char = list[i].charAt(0).toUpperCase();
        upperFirst += (char+list[i].substring(1)+" ");
    }
    return upperFirst;
}

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

console.log(cutString(st.toLowerCase()));

function cutString(string){
    return string.substring(1,(string.length-2));
}

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const lung = 20;
console.log(giveMeRandom(lung));

function giveMeRandom(lung){
    const arr = [];
    for(i=0; i<20; i++){
        arr.push(Math.floor(Math.random()*11));
    }
    return arr;
}
