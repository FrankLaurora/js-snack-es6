// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

var newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function elementsBetween(start, end, arr) {
//     const result = arr.filter((element, index) => {
//         if(index >= start && index <= end) {
//             return true;
//         }
//     });
//     return result; 
// }

// const elementsBetween = (start, end, arr) => {
//     let result = arr.filter((element, index) => {
//         if(index >= start && index <= end) {
//             return true;
//         }
//     });
    
//     return result;
// };

const elementsBetween = (start, end, arr) => {
    let result = [];
    arr.forEach((element, index) => {
        if(index >= start && index <= end){
            result.push(element);
        }
    });
    
    return result;
}

console.log(elementsBetween(3, 7, newArray));