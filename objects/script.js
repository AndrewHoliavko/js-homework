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
// function showStack (){
//     this.stack.forEach(element => console.log(element))
// }
// const person = {
//     name : 'Jhon',
//     age : 23,
//     stack : ['C++', 'JAVA', 'SQL'],
//     run: showStack
// }
// const person2 = {
//     name : 'David',
//     age : 35,
//     stack : ['CSS', 'JS', 'HTML'],
//     run : showStack
// }

// person.run();
// person2.run();

// setTimeout(()=>{person.showStack},1000);
// setTimeout(()=>{person2.showStack},1000);

const person = {
    a:1,
    s:2,
    v:'dhfd'
}
const {a: name,s: tall} = person;
console.log(tall);//2