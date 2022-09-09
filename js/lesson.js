// const arrObj = {
//     a: 1,
//     1: 2
// };


// arrObj.hello = 'world';

// console.log(arrObj.a);
// console.log(arrObj[1]);
// console.log(arrObj.hello);



//Practice on Platform Udemy

// let storeName = 'Metro';
// let storeDescription = {
//     budget: 10000,
//     employees: ['Bill', 'John', 'Marci'],
//     products:{
//         cola: 100,
//         pepsi: 90
//     },
//     open: true
// };



// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

// console.log(hamburger || cola || fries === 3 || nuggets);


// 4* practice

// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
//     for (let i = 0; i < arr.length; i++){
//         result[i] = arr[i];
//     }
    
//     console.log(result);
    
//     // Не трогаем
//     return result;
// }

// firstTask();


// function secondTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     for (let i = 0; i < data.length; i++){
//         if (typeof(data[i]) === 'number'){
//             data[i] = data[i]*2;
            
//         } else if (typeof(data[i]) === 'string') {
            
//             data[i] = `${data[i]} - done`;
//         }
        
        
//     }
//     console.log(data);
    

//     // Не трогаем
//     return data;
// }

// secondTask();

// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];
//     let j = 4;
//     for (let i = 0; i < data.length; i++){
//         result[i] = data[j];
//         j--;
//     }
    
//     console.log(result);
//     // Не трогаем
//     return result;
// }

// thirdTask();

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++){
//     for (let j = 0; j < lines - i; j++){
//         result += ' ';
//     }
//     for (let j = 0; j < 2 * i +1; j++){
//         result += '*';
//     }
//     result += '\n';
// }

// console.log(result);


// function sayHello(userName) {
//     return `Привет, ${userName}`;
// }

// console.log(sayHello('alex'));


// function returnNeighboringNumbers(num) {
//     let newArr = [];
//     newArr[0] = num -1;
//     newArr[1] = num;
//     newArr[2] = num +1;
//     console.log(newArr);
//     return newArr;
// }

// returnNeighboringNumbers(2);
// returnNeighboringNumbers(5);
// returnNeighboringNumbers(10);


/* HARD PRACTICE WITH FUNCTIOINS AND CICLES */

// let result = '';
// let plusOne = '';
// function getMathResult(numOne, numTwo) {
//     for (let i = 1; i <= numTwo; i++){
        
//        for (let j = 0; j < i; j++){
//         plusOne = numOne * i;
//         if (j !== numTwo - 1){
//             plusOne += '---';
//         }
        
//        }
//        result += plusOne;
//     }
//     if (typeof(numTwo) !== 'number' || numTwo <= 0){
//         result = numOne;
//         console.log('Error type of numTwo');
//     }
//     return result;
// }

// console.log(getMathResult(5,3));
// console.log(getMathResult(3, 10));
// console.log(getMathResult(3, 'rere'));
// console.log(getMathResult(3, 0));


/*END HARD PRACTICE WITH FUNCTIOINS AND CICLES */


// const str = "test";
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.length);


// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world";
// console.log(logg.slice(0, 5));
// const num = 14.2;



// console.log(Math.round(num));  //Округление до ближайшего целого числа

// const arrara = [1,2,3];
// const text = '12.2';
// console.log(parseInt(text));
// console.log(parseFloat(text));

// const cube = '';

// function calculateVolumeAndArea(cube) {
//     let volume = cube * cube * cube;
//     let square = cube * cube * 6;
    
//     if (typeof(cube) === "string" || cube <= 0 || cube !== parseInt(cube)){
//         console.log('Произошла ошибка');
//     } else {
//         let result = `Объём куба : ${volume}, площадь всей поверхности: ${square}`;
//         return result;
//     }
    
// }

// console.log(calculateVolumeAndArea(25.2));


// const numOfSeat = '';
// function getCoupeNumber(numOfSeat) {
//     let coupeNum;
//     if (parseInt(numOfSeat/4) === parseFloat(numOfSeat/4)){
//          coupeNum = parseInt(numOfSeat/4);
//     } else {
//         coupeNum = parseInt(numOfSeat/4 + 1);
//     }
    
//     if (numOfSeat < 0 || parseInt(numOfSeat) != parseFloat(numOfSeat) || typeof(numOfSeat) === "string"){
//         coupeNum = "Ошибка. Проверьте правильность введенного номера места";
//     } else if ( numOfSeat === 0 || numOfSeat > 36){
//         coupeNum = "Таких мест в вагоне не существует";
//     } else {
//         console.log(`Номер вашего купе ${coupeNum}`);
//     }
//     return coupeNum;
// }

// console.log(getCoupeNumber('Hello'));
//practice coupe



// function getTimeFromMinutes(minutes) {
//     if (typeof(minutes) != "number" || minutes < 0 || !Number.isInteger(minutes)){
//         return  "Ошибка, проверьте данные";
//     }
//     const hours = parseInt(minutes/60);
//     const tailHours = minutes - 60*hours;
//     let hoursWord = "часов";
//     if (hours == 2 || hours == 3 || hours == 4){
//         hoursWord = "часа";
//     } else if(hours == 1) {
//         hoursWord = "час";
//     }
//     return `Это ${hours} ${hoursWord} и ${tailHours} минут`;
// }
// console.log(getTimeFromMinutes(50));


// function findMaxNumber(numOne, numTwo, numThree, numFour) {
//     let result;
//     if ( numOne > numTwo && numOne > numThree && numOne > numFour){
//         result = numOne;
//     } else if(numTwo > numOne && numTwo > numThree && numTwo > numFour){
//         result = numTwo;
//     } else if(numThree > numOne && numThree > numTwo && numThree > numFour){
//         result = numThree;
//     } else {
//         result = numFour;
//     }
//     if (typeof(numOne) != 'number'||typeof(numTwo) != 'number'|| typeof(numThree)
//Убрать отсюда и поместить на строку выше != 'number'|| typeof(numFour) != 'number'){
//         result = 0;
//     }
   
//     return result;
// }
// findMaxNumber(122,22,3.5);

/*   ЗАДАЧКА ФИБОНАЧИ, НЕ ДОРЕШАЛ, ВЕРНУСЬ С РЕКУРСИЕЙ */

// let fibRes = "01";
// function fib(num) {
//     if (typeof(num) != "number" || num <=0 || !Number.isInteger(num)){
//         return "";
//     }
//     let promejOne;
//     let promejTwo;
//     let promejThree;
//     for (let i = 1; i < num - 1; i++){
//         promejOne = parseInt(fibRes[i-1]);
//         promejTwo = parseInt(fibRes[i]);
//         promejThree = promejOne + promejTwo;
//         fibRes += " ";
//         fibRes += promejThree;
//     }
//     console.log(fibRes);
// }
// fib(7);

/* Call-back function practice */

// function learnJS (lang, callback){
//     console.log(`Я учу ${lang}`);
//     callback();   // Передаём сюда функцию done, поэтому ниже в аргументах не добавляем ей ()
// }

// function done(){
//     console.log("Я прошёл этот урок");
// }

// learnJS('Javascript', done);  //Можно не добавлять скобки() к функции done т.к. мы её передаём

// const options = {
//     name: 'test',
//     width: 1024,
//     heigth: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };
// console.log(Object.keys(options).length);
// // delete options.name;

// // console.log(options.name);
// let counter = 0;
// for (let key in options){
//     if (typeof(options[key]) === 'object'){
//         for (let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
    
// }
// console.log(counter);

// //  end practice
// // start lesson

// const arr = [1,2,3,5,7];

// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for (let value of arr){
//     console.log(value);
// }

// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });



const str = prompt("", "");      //Принимаем строчки через запятую
const products = str.split(", "); //делим строку на отдельные эл-ты массива
products.sort();                    //Сортируем по алфавиту
console.log(products.join(', ')); //скрепляем массив в строку черезе дополнение в условие

// new lesson and practice


// let a = 5,
//     b = a;
// b = b + 5;          //Работает только с примитивами, т.к. передаётся значение
// console.log(b);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;   //Передаётся ссылка на объект, а не создаётся новый

// copy.a = 10;    // Не работает с объекатми массивами и функциями, т.к. передаётся ссылка
// console.log(copy);
// console.log(obj);


function copy(mainObj){
    let copyObj = {};
    let key;
    for (key in mainObj) {
        copyObj[key] = mainObj[key];
    }
    return copyObj;
}

const numbers = {
    a: 5,
    b: 1,
    c: {
        x:7,
        y:4
    }
};

// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// console.log(newNumbers);
// console.log(numbers);


const add = {
    d: 15,
    e: 20
};
const clone = Object.assign({}, add);
clone.d = 20;
console.log(add);
console.log(clone); // Соединение объекта в новый объект, который можно изменять


const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();  //клонирование массива, который можно изменять
newArray[1] = 'avgb';
console.log(oldArray);
console.log(newArray);



const video = ['youtube', 'vimeo'],
      blogs = ['wp', 'blogger'],
      internet = [...video, ...blogs, 'vk'];

console.log(internet);



function log (a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}
const gum = [2, 5, 7];

log(...gum);  //оператор spread подставил массив в передаваемые аргументы функции


const arrray = ['a', 'dd'];
const newArrrray = [...arrray];
console.log(newArrrray); //spread оператор для 4й способа поверхностного копирования  массива


const q = {
    one: 1,
    two: 2
};

const newObjj = {...q};   //spread оператор для 4й способа поверхностного копирования объекта
console.log(newObjj);    // testing