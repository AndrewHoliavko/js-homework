// // const person = {
// //     name: 'Jhon',
// //     age: 23,
// //     size: {
// //         height: 33,
// //         width: 41,
// //         'nam4%e': 'Jhon'
// //     }

// // };
// // const str = 'age';
// // console.log(person[str]); 23
// console.log(person.age);// 23
// console.log(person['age']);// 23
// console.log(person.size.height);// 33
// console.log(person['nam4%e']);// Jhon

// // person.name = 'Valerchik'  перезапись обЪекта
// // console.log(person.name);

// //person.city = 'Gomel' //запись нового елемента
// //delete person.age; //удаление елемента с объекта

// const keys = Object.keys(person) // запись объекта в массив

// for (let key in person){ // key имя элемента 
//     console.log( person[key] );
// }


//-----------------------------------------------------------диструктуризация массивов и объектов--------------------------------------------------------------

// const person = {
//     a:1,
//     s:2,
//     v:'dhfd'
// }
// const {a: name,s: tall = eremeno (значение по умолчанию)} = person;
// console.log(tall);//2 / eremeno

// const arr = [3423,423,4,232,35,54,35,43,64]
// const [one , two , three] = arr
// console.log(one); //3423
// console.log(two); //423
// console.log(three); //4

//----------------------------------------------------------------------rest & spread-----------------------------------------------------------------------

//rest  -  упаковывает данные в массив запись const abeme= 21,321,321,422,4,43,5 const hz = ...abeme console.log(hz) // [21,321,321,422,4,43,5]

//spread  -  он записывается ...arr и он берет из массива все числа и их передает кому то им нельзя выводить чтотто куда то чисто для вычеслений используется для копирования мссива const copy = [...arr] складывать массивы 
//const summ = [...arr,...arr2] так же можно и обЪекты копировать









