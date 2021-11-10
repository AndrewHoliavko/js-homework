'use strict';



function Animal (name, age) {
    // 1. this = {};    
    this.age = age;
    this.name = name;
    // this.toString = function () {
    //     return 'smth';
    // };
    // 2. return this;
}

Animal.prototype.run = function (where = 'itstep') {
    console.log(`${this.name} runs to ${where}`);
};

Animal.prototype.toString = function () {
    return this.name;
}

// Animal.prototype === obj.__proto__ === obj2.__proto__ === obj3.__proto__

let obj = new Animal('Sharik', 10);
let obj2 = new Animal('Bobik', 20);
let obj3 = new Animal.prototype.constructor('Sobaka', 30);

console.log(obj3.paws);


// 1. Написать конструктор товара который принимает 3 параметра
// название 
// цвет
// цена
// Добавить в прототип классу метод showPrice ===>>> "товар ИМЯ стоит ЦЕНА"

// 2. Создать класс Device у инстансов которого есть поле isON (boolean)
// В прототипе класса Device создайте метод .switch() который переключает
// поле инстанса в true/false при каждом вызове

// 3. напишите программу которая вычисляет длину линий в стандартной
//  двумерной системе координат. Координаты начала и конца линий 
//  должны хранится в объектах. 
//  а) Создайте три линии
//  б) Вычислите их длины
//  в) Проверьте могут ли три линии сформировать треугольник
//  Длину линий можно найти по теореме Пифагора
//  Три линии могут сформировать треугольник если длина каждой стороны 
//  меньше суммы дву других сторон.

