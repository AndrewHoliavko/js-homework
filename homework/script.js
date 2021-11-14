// ALL HOMEWORKS FOR JS

//------------------------------------------------------
//FUNCTIONS DZ
// 1. Создать функцию, которая принимает массив и callback. Функция
// должна каждый элемент массива обрабатывать callback’ом.

// function helloElement(i){
// 	return i = `hello ${i}`
// }
// function elementPlus(i){
// 	return ++i;
// }
// function callArr(arr, callBack){
// 	let result = [];
// 	for(let i=0;i<arr.length;i++){	 
// 		result.push(callBack(arr[i]))
// 	}
// 	console.log(result);
// 	return result;
// }
// let arr1 = [1, 3, 45, 34, 22];
// callArr(arr1,helloElement);

// 2. Создать функцию sumTo, которая принимает два числа и callback.
// Задача функции складывать 2 числа, а задача callback’a заставлять
// функцию sumTo возвращать результат в виде числа, строки или
// логического типа данных.

// function string(n){
// 	n = String(n);
// 	console.log(n)
// 	console.log(typeof(n))
// }
// function numb(n){
// 	n = Number(n);
// 	console.log(n)
// 	console.log(typeof(n))
// }
// function bool(n){
// 	n = Boolean(n);
// 	console.log(n)
// 	console.log(typeof(n))
// }
// function sumTo(a,b,convert){
// 	let summ = a+b;
// 	return convert(summ);
// }
// sumTo(5,7,bool)

// 3. Создать функцию checkLogin, которая принимает 4 параметра. 1
// параметр - это логин, введенный пользователем, 2 –
// правильный логин, 3 – callback, который вызовется если логин
// верный, 4 – callback, который вызовется если логин ложный.

// function trueCall(){
// 	return "Welcome!";
// }
// function falseCall(){
// 	return "Go away!";
// }

// function checkLogin(userLogin,trueLogin,call1,call2){
// 	if(userLogin===trueLogin){
// 		alert(call1());
// 	} else{
// 		alert(call2());
// 	}
// }
// let userName = prompt("What is your login?");
// let login = "Troll";
// checkLogin(userName, login,trueCall,falseCall);

// 4. Написать программу, которая вычисляет сумму чисел от 1 до n. Значение n вводится с клавиатуры.
// Проверить число n на корректность (чтобы это было число, чтобы оно не было меньше 1, чтобы это было не null).
// function checkNumber(num){
// 	if(typeof(num)!=="number"){
// 		return alert("This is not a number");
// 	}
// }
// function checkLessThanOne(num){
// 	if(num<1){
// 		return alert("Number cannot be less than 1");
// 	}
// }
// function checkNull(num){
// 	if(num===null){
// 		return alert("You refused to enter a number");
// 	}
// }
// function sumTo(number){
//     checkNumber(number);
// 	checkLessThanOne(number);
// 	checkNull(number);
// 	let sum = 0;
// 	for(let i = 0;i<=number;i++){
// 		sum +=i;
// 	}
// 	return sum;
// } 
// alert(sumTo(12));

// 5. Написать программу, которая определяет количество
// положительных, отрицательных чисел и нулей. В
// начале программы, пользователь самостоятельно
// задает какое количество чисел будет вводить, затем
// вводит сами числа.
// Пример вывода:
// «Положительных: 2 шт.
// Отрицательных: 5 шт.
// Нулей: 3 шт.»

// let countNegative = 0;
// let countPositive = 0;
// let countNull = 0;
// function showNulls(num){
// 	if(num===0){
// 		return countNull++;
// 	}
// }
// function showPositives(num){
// 	if(num>0){
// 		return countPositive++;
// 	}
// }
// function showNegatives(num){
// 	if(num<0){
// 		return countNegative++;
// 	}
// }

// function count(){
// 	let n = +prompt("How many numbers do you want?");
// 	for(let i = 0;i<n;i++){
// 		let number = +prompt("Press number");
// 		showNulls(number);
// 		showPositives(number);
// 		showNegatives(number);
// 		}
// 	alert(`Positive numbers: ${countPositive}, Negative numbers: ${countNegative}, Nulles: ${countNull}`)
// 	}
// count();

// 6. Написать программу, которая просит ввести с
// клавиатуры 10 пар чисел, сравнивает эти числа и
// выводит большие из них. (Используйте массив)

// let numbers = [];
// function selectBig(a,b,arr){
// 	if(a>b){
// 		arr.push(a)
// 	} else{
// 		arr.push(b)
// 	}
// }
// function selectSmall(a,b,arr){
// 	if(a<b){
// 		arr.push(a)
// 	} else{
// 		arr.push(b)
// 	}
// }
// function toInput(n,func){
// 	for(i=0;i<n;i++){
// 	let num1 = +prompt("Press 1 number");
// 	let num2 = +prompt("Press 2 number");
// 	func(num1,num2, numbers)
// 	}
// }
// function compare(){
// 	toInput(10,selectSmall)
// 	return numbers;
// }
// console.log(compare());

// 7. Написать программу, которая выводит на экран
// двузначные числа, которые делятся на 4, но не
// делятся на 6.

// let arr1 = [];
// function check(number,arr){
// 	if(number%4===0&& number%6>0){
// 	arr.push(number);
// 	}
// }
//  function func(n,arr,f1){
// 	for(let i = 0;i<n;i++){
// 		f1(i,arr1);
// 	}
// 	return arr;
//  }
//  console.log( func(100,arr1,check));

//  8. Написать программу, которая выводит среднее
// арифметическое n чисел введенных пользователем.
// Ввод чисел прекращается
// тогда, когда нажали «отмена», после чего выводится
// среднее арифметическое.

// let sum = 0;
// let counter = 0;
// function toSum(n){
//  sum += n;
// }
// function toCount(){
// 	return counter++;
// }
// function arifm(a,b){
// 	return a/b;
// }
// function arithmeticMean(){
// 	while(true){
// 		number = prompt(`number?`);
// 		if(number===null){
// 			break;
// 		} else {
// 		number = Number(number);
// 		toSum(number);
// 		toCount();
// 		}
// 	}
// 	alert(arifm(sum,counter));
// }
// arithmeticMean();
// alert(sum);
// alert(counter);
//-------------------------------OBJECT---------------------------------------------

// 1. Напишите функцию isEmptyObj(), которая проверяет пуст
// объект или нет. Если объект пуст, функция вернет true, если в
// объекте есть хотя бы одно поле, функция вернет false.
// let full = {
//     name: 12,
//     ten: 23,
//     rom: 34,
//     }
// let empty = {
// };
// function isEmptyObj(obj){
//     let checkLength = Object.keys(obj);
//     if(checkLength.length===0){
//          return false;
//     } return true;
//     }
// alert(isEmptyObj(empty));

// 2.Создайте объект shtuchki. Добавьте в объект поля shtuchka1:
// 200, shtuchka2: 521, shtuchka3: 113, shtuchka4: 314, shtuchka5:
// 871. Напишите программу, которая выведет на экран
// наибольшую штучку (программа должна быть универсальна
// и выводить наибольшую штучку даже если поменяются
// значения)
// let things = {
//     thing1: 200,
//     thing2: 521,
//     thing3: 113,
//     thing4: 314,
//     thing5: 871,
//     }
// let max = things.thing1;
// for(let key in things){
//     if(max<things[key]){
//         max = things[key];
//         }
// }
// alert(max);

// 3. Дан объект:
// student { math: 5, biology: 3, language: 2, isOboltus: ‘yes’ }.
// Напишите программу, которая умножит все ЧИСЛОВЫЕ (и
// только числовые) значения на 2 и перезапишет каждое
// свойство объекта (числового типа).
// let student = {
//     math: 5,
//     biology: 3,
//     language: 2,
//     isOboltus: `yes`,
//     }
// let key;
// for(key in student){
//     if(typeof(student[key])=== `number`){
//         student[key] *= 2;
//     }
// }
// console.log(student);
// const arr = [
//         {a: 2, b: 1},
//         {a: 5, b: 12},
//         {a: 95, b: 7}
//       ]
// Используя ТОЛЬКО методы массивов (циклы запрещены):
// 1. 
// const arr = [
// 	{a:2, b:1},
// 	{a:5, b: 12},
// 	{a:95, b:7}
// ];
// const answer = arr.map(function(item){
// 	if(item.a>item.b){
// 		return true;
// 	} return false;
// })
// const checkAnswer = answer.every(item => item===true)
// if(checkAnswer===true){
// 	alert(`It is valid`);
// } else{	alert(`It is invalid`);}

//2. 
// const arr = [
// 	{a:2, b:1},
// 	{a:5, b: 12},
// 	{a:95, b:7}
// ];
// const arr2 =arr.map(function(item){
// 	return item = {a:item.a, b:item.b**2}

// })
// console.log(arr);
// console.log(arr2);

// 3. 
// const arr = [
// 	{a:2, b:1},
// 	{a:5, b: 12},
// 	{a:95, b:7}
// ];
// let arrNew = arr.map(item => {
//     return item = [item.a, item.b];
// });
// let result = arrNew.flat();
// console.log(result);
//---------------------------------class-------------------------------------------
// 1. напишите программу которая вычисляет длину линий в стандартной
//  двумерной системе координат. Координаты начала и конца линий 
//  должны хранится в объектах. 
//  а) Создайте три линии
//  б) Вычислите их длины
//  в) Проверьте могут ли три линии сформировать треугольник
//  Длину линий можно найти по теореме Пифагора
//  Три линии могут сформировать треугольник если длина каждой стороны 
//  меньше суммы дву других сторон

// function LineLen () {
// }
// LineLen.prototype.len = function(line , line1 ,line2){
//     let frLen = line.length
//     let secLen = line1.length
//     let thirdLen = line2.length
//     if(frLen + secLen > thirdLen & secLen + thirdLen > frLen ){
//         console.log('its wrong triangel')
//     }else{console.log('its true triangel');}
// }
// let d = new LineLen('--- ','----','-----------------');
// d.len()

// 2. Создать конструктор Car, который принимает параметры
// model, color, price. Конструктор должен возвращать объект в
// котором присутствуют вышеназванные поля со значениями.
// Каждый представитель класса Car должен обладать методом
// run() который выводит сообщение вида : MODEL + “ ” +
// COLOR + ” is running”.

// function Car (model,color,price){
//     this.model = model;
//     this.color = color;
//     this.price = price;
// }
// Car.prototype.run = function(){
//     console.log(`MODEL ${this.model} Color ${this.color} is runing`);
// }
// let a = new Car('BMW', 'blue');
// a.run();

// 3. Создать конструктор Book, с помощью этого конструктора
// создать массив из 8 книг (объектов). Каждая книга должна
// представлять из себя объект, в котором есть три поля:
// author, bookName, pageAmount.
// Создать функцию getBiggerBook(), которая принимает
// массив книг и возвращает ОДНУ книгу с наибольшим
// количеством страниц

// function Book (allB){
//     this.allB = allB;
//     console.log(allB);
// }
// Book.prototype.count = function (allB) {
// console.log(Math.max(allB.pageAmount));
// console.log(allB);
// }
// let a = new Book([{bookName: 'Harry Potter' ,pageAmount: 300 ,author:'I dont know'},
// {bookName: 'learn JS' ,pageAmount: 670 ,author:'I dont know'}]);
// a.count();
// function Obj (name , color , price){
//     this.name = name
//     this.color = color
//     this.price = price
// }
// Obj.prototype.showPrice = function(){
//     console.log(`Obj ${this.name} price ${this.price}$`);
// }
// let firstPrice = new Obj('odf','blue',34); 
// firstPrice.showPrice()

//2-en ex
// function Device (){
//     this.isON = 
// }
// Device.prototype.switchIsOn = function (){
//     console.log()
// }
// let DeviseTest = new Device(); 
// DeviseTest.switchIsOn()
// 'use strict';



// function Animal (name, age) {
//     // 1. this = {};    
//     this.age = age;
//     this.name = name;
//     // this.toString = function () {
//     //     return 'smth';
//     // };
//     // 2. return this;
// }

// Animal.prototype.run = function (where = 'itstep') {
//     console.log(`${this.name} runs to ${where}`);
// };

// Animal.prototype.toString = function () {
//     return this.name;
// }

// // Animal.prototype === obj.__proto__ === obj2.__proto__ === obj3.__proto__

// let obj = new Animal('Sharik', 10);
// let obj2 = new Animal('Bobik', 20);
// let obj3 = new Animal.prototype.constructor('Sobaka', 30);

// console.log(obj3.paws);

