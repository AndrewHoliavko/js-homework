//----------------------------sintacsiz------------------------

// function Class(){

// }
// Class.prototype.classLine = function(){}
// Class.console = function(){console.log('well done')} //статический метод класса Array.isArray(); тоже статический метод вызывать Class.console()
// let classTeg = new Class();

//---------------------------vazno------------------------------

//instans это ребенок класса то что он производит

//---------------------------nasledovanie-----------------------

// 1 - sintacsiz) class Rabbit extends Animal{} чтобы класс Rabbit наследовал методы Animal 
// Human.porototype = Object.create(Animal.prototype);
// Human.prototype.constructor = Human ;чтобы Human наследовал методы Animal
// 2 - vazno) наследование можно еще и использовать с функциями

//|||||||||||||||||||||||||||example||||||||||||||||||||||||||||
// function Animal(age, name){
//     this.age = age;
//     this.name = name;
// }
// Animal.prototype.run = function(){
//     console.log(`${this.name} run`);
// }
// let dog = new Animal(34 , 'Shurik');

// function Human (name, age, job){
//     Animal.call(this, name, age);
//     this.job = job;
// }

//-----------------------es6 classes------------------------

// class Animal{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     eat () {
//         return `${this.name} eats`
//     }
// }
// const dog = new Animal('Tuzik',5);

// class Human extends Animal{
//     constructor(job,...args){
//         super(...args);
//         this.job = job;
//     }
//     learn (technology){
//         return `${this.name} learns ${technology}`
//     }
//     eat(){
//         const eatAsAnimal = super.eat();
//         return eatAsAnimal + 'with a fork'
//     }
// }
// const hum1 = new Human('bomj','Jhon',23);
// hum1.learn('js')
// hum1.eat()