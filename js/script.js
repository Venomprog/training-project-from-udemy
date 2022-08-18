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


if (4 == 9){
    console.log('Ok!');
} else {
    console.log('Error');
}



// if (num < 49){
//     console.log('Error');
// } else if (num > 100) {
//     console.log('too much');
// } else {
//     console.log('Ok');
// }
// /*Тирнарный оператор*/
// (num === 50) ? console.log('Tir Ok') : console.log('Error tir');

const num = 50;

switch (num){
    case 49:
        console.log('Ne verno');
        break;
    case 100:
        console.log('Ne verno');
        break;
    case 50:
        console.log('Verno!');
        break;
    default:
        console.log('Ne v etot raz');
        break;
}

