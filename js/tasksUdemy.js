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
    let strSplit = str.split(' ');
    const reversed = strSplit.reverse();
    let value;
    let a;
    let b = '';
    if (typeof(str) !== "string"){
        return `Ошибка!`;
    } else {
        for (value of reversed){
            a = value.split('').reverse().join('');
            b += a + ' ';
        }
        return `${b}`;
    }
    
}
console.log(reverse(someString));
// Достиг результата, что функция реверсит фразу и реверсит в каждом слове буквы, но код не чистый

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    if (arr.length === 0){   //Проверка на пустой массив
        str = `Пусто`;
    } else {
        str = `Доступны валюты:\n`;
    }
    arr.forEach(function(curr,i){
        if (curr != missingCurr){
            str += `${curr}\n`;
        }
    });
    return str;
}
console.log(availableCurr([...baseCurrencies,...additionalCurrencies], 'CNY'));

// Добивался правильного решения функции