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



function getTimeFromMinutes(minutes) {
    let hours = parseInt(minutes/60);
    let tailhours = minutes - 60*hours;
    let hoursWord = "часов";
    if (hours == 2 || hours == 3 || hours == 4){
        hoursWord = "часа";
    } 
    let result = `Это ${hours} ${hoursWord} ${tailhours} минут`;
    if (typeof(minutes) != "number" || minutes < 0 || minutes != parseInt(minutes)){
        result = "Ошибка, проверьте данные";
        console.log(result);
        return result;
    } else {
        console.log(result);
    }
}
getTimeFromMinutes(135);


function findMaxNumber(numOne, numTwo, numThree, numFour) {

}
