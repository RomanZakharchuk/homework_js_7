// Tast 1 - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//          створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let arr1 = [
    new User(1, 'Roman', 'Zakharchuk', 'email22@gmail.com', '0666644758'),
    new User(2, 'William', 'Korhonen', 'easdl21@gmail.com', '0669934274'),
    new User(3, 'Jack', 'Virtanen', 'emlkl452@gmail.com', '0663376234'),
    new User(4, 'Oliver', 'Makinen', 'emafgh32@gmail.com', '0669091274'),
    new User(5, 'Noah', 'Nieminen', 'posil92@gmail.com', '0664561884'),
    new User(6, 'Ethan', 'Makela', 'esngl22@gmail.com', '0663281676'),
    new User(7, 'Thomas', 'Hamalenen', 'edgdyy99@gmail.com', '0665656881'),
    new User(8, 'Lucas', 'Laine', 'emasmrr82@gmail.com', '0663939220'),
    new User(9, 'Cooper', 'Jarvinen', 'empsddl22@gmail.com', '0661123432'),
    new User(10, 'Jackson', 'Koskinen', 'qqwwdd56@gmail.com', '0665757111'),
];

console.log(arr1);

// Task 2 - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки
//          об'єкти з парними id (filter)

const evenId = arr1.filter(value => value.id % 2 === 0);

console.log(evenId);

// Task 3 - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const sortIdUp = arr1.slice().sort((a, b) => a.id - b.id);
const sortIdDown = arr1.slice().sort((a, b) => b.id - a.id);

console.log(sortIdUp);
console.log(sortIdDown);

// Task 4 - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
//          (поле є масивом зі списком товарів)
//          створити пустий масив, наповнити його 10 об'єктами Client


class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let arr4 = [
    new Client(1, 'Roman', 'Zakharchuk', 'email22@gmail.com', '0666644758', 2),
    new Client(2, 'William', 'Korhonen', 'easdl21@gmail.com', '0669934274', 6),
    new Client(3, 'Jack', 'Virtanen', 'emlkl452@gmail.com', '0663376234', 9),
    new Client(4, 'Oliver', 'Makinen', 'emafgh32@gmail.com', '0669091274', 2),
    new Client(5, 'Noah', 'Nieminen', 'posil92@gmail.com', '0664561884', 2),
    new Client(6, 'Ethan', 'Makela', 'esngl22@gmail.com', '0663281676', 5),
    new Client(7, 'Thomas', 'Hamalenen', 'edgdyy99@gmail.com', '0665656881', 2),
    new Client(8, 'Lucas', 'Laine', 'emasmrr82@gmail.com', '0663939220', 7),
    new Client(9, 'Cooper', 'Jarvinen', 'empsddl22@gmail.com', '0661123432', 1),
    new Client(10, 'Jackson', 'Koskinen', 'qqwwdd56@gmail.com', '0665757111', 3),
];

console.log(arr4);

// Task 5 - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів
//          в полі order по зростанню. (sort)

const sortOrder = arr4.slice().sort((a, b) => a.order - b.order);

console.log(sortOrder);

// Task 6 - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
//          рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//          -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//          -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//          -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//          -- changeYear (newValue) - змінює рік випуску на значення newValue
//          -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в
//             поточний об'єкт car

function Car(producer, model, age, maxSpeed, volume) {

    this.producer = producer;
    this.model = model;
    this.age = age;
    this.maxSpeed = maxSpeed;
    this.volume = volume;

    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed}`);
    };

    this.info = function () {
        console.log(`
            Марка: ${this.producer}; 
            Модель: ${this.model}; 
            Рік: ${this.age}; 
            Максимальна швидкість: ${this.maxSpeed}; 
            Об'єм двигуна: ${this.volume}
            `);
    };

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    };

    this.changeYear = function (newValue) {
        this.age = newValue;
    };

    this.addDriver = function (driver) {
        this.drive = driver;
    }

}

const bmw = new Car('bmw', 318, 1990, 220, 220);

bmw.drive();
bmw.info();
bmw.increaseMaxSpeed(240);
bmw.changeYear(1996);
bmw.addDriver({
    name: 'Ivan',
    age: 29
});

console.log(bmw);


// Task 7 - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//          максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//          -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//          -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//          -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//          -- changeYear (newValue) - змінює рік випуску на значення newValue
//          -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний
//             об'єкт car

class Motorcycle {

    constructor(producer, model, age, maxSpeed, volume) {
        this.producer = producer;
        this.model = model;
        this.age = age;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    get increaseMaxSpeed() {
        return this.maxSpeed;
    }

    set increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    }

    get changeYear() {
        return this.age;
    }

    set changeYear (newValue) {
        this.age = newValue;
    }

    get addDriver() {
        return this.maxSpeed;
    }

    set addDriver(driver) {
        this.drive = driver;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed}`);
    }

    info() {
        console.log(`
            Марка: ${this.producer}; 
            Модель: ${this.model}; 
            Рік: ${this.age}; 
            Максимальна швидкість: ${this.maxSpeed}; 
            Об'єм двигуна: ${this.volume}
            `);
    }
}

const honda = new Motorcycle('Honda', 'Hornet', 2005, 260, 600);

honda.drive();
honda.info();
honda.increaseMaxSpeed = 300;
honda.changeYear = 2007;
honda.addDriver = {
    name: 'Roman',
    age: 30
};

console.log(honda);

// Task 8 -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//         Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//         За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//         Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const cinderellas = [
    new Cinderella('Alina', 19, 35),
    new Cinderella('Katya', 20, 36),
    new Cinderella('Olya', 21, 38),
    new Cinderella('Marina', 19, 37),
    new Cinderella('Tanya', 20, 39),
    new Cinderella('Alina', 22, 36),
    new Cinderella('Olena', 18, 38),
    new Cinderella('Alina', 23, 39),
    new Cinderella('Oksana', 19, 37),
    new Cinderella('Oksana', 24, 36)

];

console.log(cinderellas);

class Prince {

    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

const alex = new Prince('Alex', 28, 35);

for (const person of cinderellas) {
    if (person.footSize === alex.shoe) {
        console.log(person);
    }
}

cinderellas.find(value => {
    if (value.footSize === alex.shoe) {
        console.log(value);
    }
})