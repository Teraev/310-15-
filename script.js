// let array = [1,5,6,8,9,2,5,24,67,86,2,1,32,43]

// function bubbleSort(array) {
//     let length = array.length;

//     for (let i = 0; i < length - 1; i++) {
//         for (let j = 0; j < length - 1 - i; j++) {
//             if (array[j] > array[j + 1]) {             
//                 let sort = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = sort;
//             }
//         }
//     }
// }

// bubbleSort(array);
// console.log(array);

let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let id = '';

function generateId(length) {
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        id += characters.charAt(randomIndex);
    }
    return id;
}

  let randomId =generateId(20);
console.log(randomId);