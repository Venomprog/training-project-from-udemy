"use strict";
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let familyLength = '';
    let key;
    if (arr.length !== 0){      
        for (key of arr){
            familyLength += [key] + ' ';
        }         
    } else {
        return `Семья пуста`;
    }
    return `Семья состоит из: ${familyLength}`;
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let value;
    let sityLC;
    for (value of arr){
        sityLC = value;
        sityLC = sityLC.toLowerCase();
        console.log(sityLC);
    }
}

standardizeStrings(favoriteCities);

//Практика выполнена на отлично!

const someString = 'This is some strange string';
function reverse(str) {
    if (typeof(str) !== "string"){
        return `Ошибка!`;
    } 
    return str.split('').reverse().join('');
}
console.log(reverse(someString));
// debug done!


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    if (arr.length === 0){   //Проверка на пустой массив
        str = `Пусто`;
    } else {
        str = `Доступны валюты:\n`;
    }
    arr.forEach(function(curr,i){  //Проверка значений массива на отсутствующую валюту
        if (curr != missingCurr){
            str += `${curr}\n`;   //Если валюта не попала под список значений, значит она доступна
        }
    });
    return str;
}
console.log(availableCurr([...baseCurrencies,...additionalCurrencies], 'CNY')); 
//массив, отсутствующая валюта

// Добивался правильного решения функii

// End Task Practice



//start practice with shops

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let mallSquare = 0;
    let shopSquare = 0;
    data.shops.forEach((item, i) => {  // Для каждого магазина вычисляет площадь и записывает общую площадь центра
        shopSquare = item.width * item.length;
        mallSquare += shopSquare;
        console.log(mallSquare);
    });
    const mallHeight = data.height * mallSquare;
    const mallPrice = mallHeight * data.moneyPer1m3; //вычисление стоимости аренды центра
    console.log(mallHeight);
    console.log(mallPrice);
    if (data.budget < mallPrice){  //Проверка, хватает ли бюджета
        return `Бюджета недостаточно`;
    } else {
        return `Бюджета достаточно`;
    }
}
console.log(isBudgetEnough(shoppingMallData)); //выводит результат функции для проверки return


// Задачка со студентами начинается 

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    const studenstSort = students.sort();
    console.log(studenstSort);
    let otherStud = 'Оставшиеся студенты: ';
    if (arr.length == 10){
        otherStud += arr[9];
    } else {
        for (let k = 9; k < arr.length; k++){
            if (k == arr.length -1){
                otherStud += arr[k];
            } else {
                otherStud += arr[k] + `, `;
            }
            console.log('gundone');
        }
    } if (arr.length == 9){
        otherStud += `-`;
    } 
    
    console.log(otherStud);
}

sortStudentsByGroups(students);