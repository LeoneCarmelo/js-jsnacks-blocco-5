/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri ("a" più piccolo di "b" e "b" grande al massimo quanto il numero di elementi dell'array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra "a" e "b" */
let c = 0
function myFunction(arr, a, b) {
if ( a < b && b <= arr.length) {
    for(let i = 0; i < arr.length; i++){
        if ( i != a && i != b && i != 0){
            console.log(i)
        }
    }
}
}

myFunction([1 , 2 , 3], 1 , 3)