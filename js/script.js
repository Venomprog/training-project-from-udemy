"use strict";

//const obj = {
    //name: 'John',
    //age: 25,
   // isMarried: false
//};

//console.log(obj ['name']);

//let arr = ['apple.png', 26, 27, 'grusha.png'];

//console.log(arr[1]);


//alert('Hello');

//const result = confirm('Are you here?');
//console.log(result);

//const answer = +prompt("Сколько вам лет?", "");
//console.log(answer+5);
//const answers = [];
//answers[0] = prompt('Как ваше имя?', '');
//answers[1] = prompt('Как ваша фамилия?', '');
//answers[2] = prompt('Сколько вам лет?', '');

//console.log(typeof(answers));
//document.write(answers);


//const user = 'Ivan';

//alert(`Привет, ${user}`);

/*  Закомментированно на время практики
let incr = 10,
    decr = 10;
incr++;
decr--;
console.log(incr);
console.log(decr);
console.log(--incr);

console.log(5%2);

console.log(2*4 == 8);
console.log(5*5 === '25');


const isChecked = true,
      isClose = true;

console.log(isChecked && isClose);

console.log(isClose || !isChecked);


console.log(2 + 2 * 2 !== 6);
*/


// if (4 == 9){
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }



// if (num < 49){
//     console.log('Error');
// } else if (num > 100) {
//     console.log('too much');
// } else {
//     console.log('Ok');
// }
// /*Тирнарный оператор*/
// (num === 50) ? console.log('Tir Ok') : console.log('Error tir');

// const num = 50;

// switch (num){
//     case 49:
//         console.log('Ne verno');
//         break;
//     case 100:
//         console.log('Ne verno');
//         break;
//     case 50:
//         console.log('Verno!');
//         break;
//     default:
//         console.log('Ne v etot raz');
//         break;
// }

// const hamburger = true;
// const fries = true;

// if (hamburger && fries){
//     console.log('я сыт!');
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola ===1 && fries === 1);

// if (hamburger === 3 && cola ===1 && fries === 1){
//     console.log('я сыт!');
// } else {
//     console.log('Мы уходим!');
// }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets === 2){
//     console.log('USe kaif');
// } else {
//     console.log('Мы уходим!');
// }


// let alexReport, johnReport, dinReport, samReport = 'done';

// console.log(alexReport || johnReport || dinReport || samReport);



/*Lesson 22 Udemy */

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } 
// while (num <= 55);

// for (let i = 1; i < 10; i++){
//     if (i%2 == 0){ // Если остаток от деления равен 0 (чётное число)
//         // break;
//         continue; // Пропускает чётные числа
//     }
//     console.log(i);
// }


/* Lesson 23 */

// for (let i = 0; i < 3; i++){
//     console.log(i);
//     for (let j = 0; j < 3; j++){
//         console.log(j);
//     }
    
// }


// let result = '';
// const lengthOfStars = 7;

// for (let i = 1; i < lengthOfStars; i++){
//     for (let j = 0; j < i; j++){
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);

first: for (let i = 0; i < 3; i++){
        console.log(`First level: ${i}`);
        for (let j = 0; j < 3; j++){
            console.log(`Second level: ${j}`);
            for (let k = 0; k < 5; k++){
                if (k === 2) continue first;
                console.log(`Third level: ${k}`);
            }
         }
     }


     first: for (let i = 0; i < 3; i++){
        console.log(`First level: ${i}`);
        for (let j = 0; j < 3; j++){
            console.log(`Second level: ${j}`);
            for (let k = 0; k < 5; k++){
                if (k === 2) break first;
                console.log(`Third level: ${k}`);
            }
         }
     }