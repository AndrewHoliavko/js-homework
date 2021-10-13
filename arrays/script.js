let arr = [3, 345, 675, 44]
arr.push(200, 60, 77); 

let team = ['Jhon', 'David', 'Cristiano', 'Andrew'];
console.log(team[1]); //David
team[0] = 'Olga'
team[4] = 'Yan'
delete team[1]; //останеться элемет но его внутренность будет удалена
console.log(team[team.length - 1]);//всегда выведет последний елемент массива
team[team.length] = 'Olya'

console.log([1,2,3][1]);//2

console.log([1,2,1+3][2])//4

console.log([1,2,1+3][2-1])//2

let arr = [prompt(), prompt(), prompt(), prompt()]
console.log(arr);

