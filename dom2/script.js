// const lis = document.getElementsByTagName('li'); достать все елементы li или не li 
// console.dir(lis[2].previousSibling)  к верхней ноде
// console.dir(lis[2].previousElementSibling)  к верхнему елементу
// console.dir(lis[2].nextElementSibling) к нижниму елементу
// console.dir(lis[2].children) идем за детьми
// console.dir(lis[2].parentElement) идем за родиителем
// const a = document.getElementById('main_link'); по id
// const a = document.getElementByClassName('main_link'); по class
// const shopItems = document.querySelector('#shop > li') заберет первый попавшийся под его лапы выведет первый но если написать All то увидишь всех кто попал но если мы что то удалим из елементов то там не будет видно удалений
// > селектор чтобы обратиться именни к детям 

//-------------------------------------events--------------------------------------------------------

//========создание события 1 способ========

// const shop = document.getElementById('shop');

// shop.onclick = () => {
//     console.log('CLICK');
// };

//=========2 способ + в том что можно сразу 2 события========

// shop.addEventListener('click',() => {console.log('CLICk')});
// shop.addEventListener('click',() => {alert('Fedya')});

// =========example from prepod================

// const valerchikFunc = function () {
//     console.log(this.textContent);
// };

// const shop = document.getElementById('shop');
// const items = [...shop.getElementsByTagName('li')];


// items.forEach((item, index)=>{
//     item.addEventListener('click', valerchikFunc);
// })




//-----------------------delete---add---create---change---clone---------------------------------------



