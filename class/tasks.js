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
class House{
    constructor(maxApartments,city,street,number){
        this.adress = {
            city,
            street,
            number
        }
        this.apartments = [];
        this.maxApartments = maxApartments;
    }
    addApartment(apartment){
        if(this.maxApartments > this.apartments.length && Apartment.owner !== '' && this.apartments.some(({apartmentNumber})=>{apartmentNumber === }))

        {this.apartments.push(apartment);}
        else{
        alert('too much apartments');
        console.log(this.apartments,this.adress,this.maxApartments)
    }
        if(){}
    }
}
class Apartment{
    constructor(apartmentNumber){
        this.owner = '';
        this.apartmentNumber = apartmentNumber;
    }
    setOwner(newOwner){
        this.owner = newOwner;
    }
}
const home1 = new House(12,'gomel','karla marka',23);
const app = new Apartment(1);
home1.addApartment(app);
app.setOwner('petya');
