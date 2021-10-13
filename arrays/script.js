const arr = [1,2,3,4,-5,6,7,8,-9,-10];

// console.log(arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+arr[7]+arr[8]+arr[9]);

// let answer = 0;
// let j = 0
// for (let i = 0; i<10;i++){
//     if(arr[j]%2===0){
//         answer = answer + arr[j]
//     }
//     j++
// }
// console.log(answer);

let arrCopy = arr.slice();
let j = 0
for(let i = 0;i < 10;i++){
    if (arrCopy[j]>0){
        arrCopy[j] = - + arrCopy[j]
    }
    else {
        arrCopy[j] = arrCopy[j] * -1
    }
    j++
}
console.log(arrCopy);



