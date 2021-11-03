const person = {
    name: 'Jhon',
    age: 23,
    size: {
        height: 33,
        width: 41,
        'nam4%e': 'Jhon'
    }

};
// const str = 'age';
// console.log(person[str]); 23
console.log(person.age);// 23
console.log(person['age']);// 23
console.log(person.size.height);// 33
console.log(person['nam4%e']);// Jhon

// person.name = 'Valerchik'  перезапись обЪекта
// console.log(person.name);

//person.city = 'Gomel' //запись нового елемента
//delete person.age; //удаление елемента с объекта

const keys = Object.keys(person) // запись объекта в массив

for (let key in person){ // key имя элемента 
    console.log( person[key] );
}





// const popit = {
//     blue: 234,
//     red: 214,
//     orange: 23,
//     purple: 124
// }
// let sum = 0;
// for (let key in popit){ 
//     sum += popit[key]   
// }
// console.log( sum );