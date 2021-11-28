// 1. Создать класс House, инстанс которого иммет поля
// adress: {city:, street:, number:}
// apartments: Apartment[]
// maxApartments: number
// метод addApartment который принимает объект Appartment
// и добавляет его в массив apartments
// добавлять квартир больше чем maxApartments - запрещено
// добавлять квартиру без владельца запрещено
// добавлять квартиру без номера - запрещено
// нельзя добавлять квартиру если квартира с таким номером уже существует
// в массиве.
// Создать класс Apartment, интсанс которого имеет поля
// apartmentNumber: number
// owner: string // по умолчанию - пустая строка
// и метод setOwner('Vasya')

// [
//     {apartmentNumber:2, owner:'Vasya'},
//     {apartmentNumber:3, owner:'Petya'}
// ]
// class House{
//     constructor(maxApartments,city,street,number){
//         this.adress = {
//             city,
//             street,
//             number
//         }
//         this.apartments = [];
//         this.maxApartments = maxApartments;
//     }
//     addApartment(apartment){
//         if(this.maxApartments > this.apartments.length && Apartment.owner !== '' && this.apartments.some(({apartmentNumber})=>{apartmentNumber === }))

//         {this.apartments.push(apartment);}
//         else{
//         alert('too much apartments');
//         console.log(this.apartments,this.adress,this.maxApartments)
//     }
//         if(){}
//     }
// }
// class Apartment{
//     constructor(apartmentNumber){
//         this.owner = '';
//         this.apartmentNumber = apartmentNumber;
//     }
//     setOwner(newOwner){
//         this.owner = newOwner;
//     }
// }
// const home1 = new House(12,'gomel','karla marka',23);
// const app = new Apartment(1);
// home1.addApartment(app);
// app.setOwner('petya');

//-------------------task number 2------------------------

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

class Human{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayHi () {
        console.log(`Hello my name is ${this.name} and I'am ${this.age}`);
    }
} 
class Programmer extends Human{
    constructor(technologies,...args){
        super(...args);
        this.technologies = technologies;
    }
    startCoding () {
        console.log(`${this.name} is coding using ${this.technologies}`);
    }
}
class Sportmen extends Human{
    constructor(medals,...args){
        super(...args);
        this.medals = medals;
    }
}
class FootballPlayer extends Sportmen{
    constructor(team,...args){
        super(...args);
        this.team = team;
    }
    run (speed) {
        console.log(`${this.name} is running ${speed} kmph`);
    }
}
class HockeyPlayer extends Sportmen{
    constructor(weight,...args){
        super(...args);
        this.weight = weight;
    }
    pushOponent(opponentName){
        console.log(`${this.name} pushed ${opponentName} and used ${this.weight}kgs`);
    }
}
const person1 = new HockeyPlayer(134,45,'Jhon',33);
const person2 = new Programmer(['CSS','JS','HTML']);
// person1.pushOponent('David');
// person2.startCoding();


// создать класс Lada 
// инстанс лады должен обладать полями 
// model (строго определнный набор) (сокрытый статик)
// ['vesta', 'xray', 'niva', 'granta', 'priora']
// new Lada ('x5', 24000, 1990) ===>>> {model:'vesta'}
// price число, не может быть ниже 0 
// yearOfProduction число 
// у всех лад должно быть вычисляемое свойтво age 
// age не должен быть доступен для ЗАПИСИ

class Lada {
    static #models = ['vesta', 'xray', 'niva', 'granta', 'priora'];
    static addModel = function (model) {
        this.#models.push(model);
    }

    #price = 0;
    #year = 0;

    constructor (model, price, year) {
        this.model = Lada.#models.includes(model) ? model : Lada.#models[0] ;
        this.#price = price < 0 ? 0 : price;
        this.#year = year;
    }

    get price () {
        return this.#price + '$';
    }
    set price (price) {
        this.#price = price < 0 ? this.#price : price;
    }

    get age () {
        const currentYear = new Date().getFullYear();
        return currentYear - this.#year;
    }
}

const lada = new Lada('priora', 20000, 1990);

console.log(lada.age);

//modern

class ModelError extends Error {}
class PriceError extends Error {}

class Lada {
    static #models = ['vesta', 'xray', 'niva', 'granta', 'priora'];
    static addModel = function (model) {
        this.#models.push(model);
    }

    #price = 0;
    #year = 0;

    constructor (model, price, year) {
        

        if (Lada.#models.includes(model)) {
            this.model = model;
        } else {
            const myErr = new ModelError(`no ${model} model exist`);
            throw myErr;
        }

        if (price > 0 ) {
            this.#price = price;
        } else {
            throw new PriceError(`price ${price} is lower than zero and cant be set`);
        }

        this.#year = year;
    }

    get price () {
        return this.#price + '$';
    }
    set price (price) {
        this.#price = price < 0 ? this.#price : price;
    }

    get age () {
        const currentYear = new Date().getFullYear();
        return currentYear - this.#year;
    }
}

const price = +prompt('ente your price');

let lada;

try {
    lada = new Lada('vesta', price, 1990);
} catch (err) {
    console.log(err);
    if (err instanceof PriceError) {
        lada = new Lada('priora', -price, 1990);
    } else if (err instanceof ModelError) {
        lada = new Lada('vesta', price, 1990);
    } else {
        throw err;
    }    
}

console.log(lada);
