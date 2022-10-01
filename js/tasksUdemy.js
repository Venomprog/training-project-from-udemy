"use strict";
// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let familyLength = '';
//     let key;
//     if (arr.length !== 0){      
//         for (key of arr){
//             familyLength += [key] + ' ';
//         }         
//     } else {
//         return `Семья пуста`;
//     }
//     return `Семья состоит из: ${familyLength}`;
// }

// console.log(showFamily(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     let value;
//     let sityLC;
//     for (value of arr){
//         sityLC = value;
//         sityLC = sityLC.toLowerCase();
//         console.log(sityLC);
//     }
// }

// standardizeStrings(favoriteCities);

// //Практика выполнена на отлично!

// const someString = 'This is some strange string';
// function reverse(str) {
//     if (typeof(str) !== "string"){
//         return `Ошибка!`;
//     } 
//     return str.split('').reverse().join('');
// }
// console.log(reverse(someString));
// // debug done!


// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let str = '';
//     if (arr.length === 0){   //Проверка на пустой массив
//         str = `Пусто`;
//     } else {
//         str = `Доступны валюты:\n`;
//     }
//     arr.forEach(function(curr,i){  //Проверка значений массива на отсутствующую валюту
//         if (curr != missingCurr){
//             str += `${curr}\n`;   //Если валюта не попала под список значений, значит она доступна
//         }
//     });
//     return str;
// }
// console.log(availableCurr([...baseCurrencies,...additionalCurrencies], 'CNY')); 
// //массив, отсутствующая валюта

// // Добивался правильного решения функii

// // End Task Practice



// //start practice with shops

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// };

// function isBudgetEnough(data) {
//     let mallSquare = 0;
//     let shopSquare = 0;
//     data.shops.forEach((item, i) => {  // Для каждого магазина вычисляет площадь и записывает общую площадь центра
//         shopSquare = item.width * item.length;
//         mallSquare += shopSquare;
//         console.log(mallSquare);
//     });
//     const mallHeight = data.height * mallSquare;
//     const mallPrice = mallHeight * data.moneyPer1m3; //вычисление стоимости аренды центра
//     console.log(mallHeight);
//     console.log(mallPrice);
//     if (data.budget < mallPrice){  //Проверка, хватает ли бюджета
//         return `Бюджета недостаточно`;
//     } else {
//         return `Бюджета достаточно`;
//     }
// }
// console.log(isBudgetEnough(shoppingMallData)); //выводит результат функции для проверки return


// // Задачка со студентами начинается 

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Zlatan'];

// function sortStudentsByGroups(arr) {
//     const studenstSort = students.sort();
//     let otherStud = 'Оставшиеся студенты: ';
//     if (arr.length == 10){
//         otherStud += studenstSort[9];
//     } else {
//         for (let k = 9; k < arr.length; k++){
//             if (k == arr.length -1){
//                 otherStud += studenstSort[k];
//             } else {
//                 otherStud += studenstSort[k] + `, `;
//             }
            
//         }
//     } if (arr.length == 9){
//         otherStud += `-`;
//     }
//     const firstGroup = [studenstSort[0], studenstSort[1], studenstSort[2]]; 
//     const secondGroup = [studenstSort[3], studenstSort[4], studenstSort[5]];
//     const thirdGroup = [studenstSort[6], studenstSort[7], studenstSort[8]];
//     const result = [];
//     result[0] = firstGroup;
//     result[1] = secondGroup;
//     result[2] = thirdGroup;
//     result[3] = otherStud;
//     return result;
// }

// console.log(sortStudentsByGroups(students));

//Заметка*
//Если я вставляю массив из 10 ребят, то в браузере когда добавляют ещё одного, пишет неверное решение
//Но если я сам вставляю массив из 11+ ребят, то решение засчитывает :)
//Значит в браузере у курса юдеми есть ошибка, которая неправильно добавляет в массивы значения


// tasks 15

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';
    return answer;
}

console.log(isOpen(restorantData));
//1task complete

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if ((parseInt(fDish.price.slice(0, -1)) + parseInt(sDish.price.slice(0, -1))) < parseInt(average.slice(0, -1))){
        return 'Цена ниже средней';
    } else {       
        return 'Цена выше средней';
    } 
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data); //Именно вот так можно скопировать объект, без ссылок
    
    copy.waitors = [{name: 'Mike', age: 32}]; //Меняем вообще все значения на новый массив, не изменяя начальный объект
    return copy;
}

console.log(transferWaitors(restorantData));
console.log(restorantData);

//practice done 3/3
//teoretic practice