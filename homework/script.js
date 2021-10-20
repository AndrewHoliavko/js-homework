1. Создайте путой массив. С помощью цикла заполните массив числами, где каждое число
равно квадрату своего номера. (длина массива должна быть 10)

let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(i**2);
}   alert (arr);
    alert (arr.length);

Вариант через Math.pow(число, степень) 

let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.pow(i,2));
}   alert (arr);
    alert (arr.length);



2. Создать случайный массив из 10 чисел. Вывести на экран
количество четных чисел из этого массива.
let counter = 0;
let arr = [2,5,7,6,10,4,14,20,12,23];
for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i] % 2 === 0 ) { 
        counter++;
    }
} alert (counter);


3. Создать случайный массив из 10 чисел. Вывести на экран
наибольшее число из этого массива.

let arr = [2,5,7,6,23,4,14,20,12,10];
function SelectionSort(arr)       // A - массив, который нужно
{                               // отсортировать по возрастанию.
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        let min = i;
        for (let j = i+1; j < n; j++) { 
            if (arr[j] < arr[min]) min = j;
        } 
        let t = arr[min]; arr[min] = arr[ i ]; arr[ i ] = t;
    }                    
    return arr;    // На выходе сортированный по возрастанию массив arr.
}
SelectionSort(arr);
alert (arr[arr.length - 1]);
alert (arr);

4. Дана строка «Мы любим JavaScript». Используя
метод split, создайте на основе это строки
массив.(Вывод данных: Мы,любим,JavaScript).

let arr = "we like JavaScript".split (" ");
alert (arr); 

5.Дан массив ["a","s","d"]. Используя
метод join, создайте и выведите строку. В качестве
разделителя используйте "!" (Вывод данных: Мы!любим!JavaScript).

let arr = ["a", "s", "d"];
alert(arr.join("!"));


6.Дан массив ["a","s","d!"] 

let arr = ["a","s","d"];
alert (arr.indexOf("d")); 