
// function Animal (name, age) {
//     this.name = name;
//     this.age = age;
// }

// Animal.prototype.eat = function (food) {
//     return `${this.name} eats ${food}`;
// };

// Animal.prototype.sleep = function () {
//     return `${this.name} sleeps`;
// };

// const dog = new Animal('bobik', 23);

// function Human (name, age, job) {
//     Animal.call(this, name, age);
//     this.job = job;
// }

// Human.prototype = Object.create(Animal.prototype); 
// Human.prototype.constructor = Human;

// Human.prototype.learn = function () {
//     return `${this.name} learns JS`;
// };

// const h1 = new Human('John', 23, 'bus driver');

// function Programmer() {
//     Human.apply(this, arguments)
//     this.isProgrammer = true

// }
// Programmer.prototype = Object.create(Human.prototype); 
// Programmer.prototype.constructor = Programmer;

// Programmer.prototype.code = function(){
//     console.log(`${this.name} u can write a code u are a ${isProgrammer} programmer`);
// }
// const prog1 = new Programmer('jhon',23,'bomj');
// // создать класс Programmer 
// // инстанс которого должен иметь метод code
// // и поле isProgrammer = true
// // отнаследовать Programmer от Human

class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat () {
        return `${this.name} eats`
    }
}
const dog = new Animal('Tuzik',5);

class Human extends Animal{
    constructor(job,...args){
        super(...args);
        this.job = job;
    }
    learn (technology){
        return `${this.name} learns ${technology}`
    }
}
const hum1 = new Human('bomj','Jhon',23);
console.log(hum1.learn('js'));
console.log(hum1.eat());

    