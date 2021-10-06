// ПРИМЕРЫ

// ответ на задачу 1

// for(let i = 1; i <= 4;i++){
//     for(let j =1;j <= 4;j++){
//         if (j===3 && i===3){
//             continue;
//         }
//         console.log(`${i}.${j}`);
//     }
// }

//модернизированный ответ на задачу 1
// let enteredNum = prompt('enter ur number');
// for(let i = 1; i <= enteredNum;i++){
//     for(let j =1;j <= enteredNum;j++){
//         console.log(`${i}.${j}`);
//     }
// }

//ответ на 2 задачу

let enteredNum = +prompt('enter number');
let summ = 0;
for (let i = 0 ;enteredNum >= i;i++){
    summ = summ + i;
    console.log(enteredNum);
    
}
console.log(summ);

//2 ответ на 2 задачу

// let enteredNum = +prompt('enter number');
// let summ = enteredNum;
// for (;enteredNum >= 1;enteredNum--){
//     summ = summ + enteredNum - 1;
//     console.log(enteredNum);
    
// }
// console.log(summ);

