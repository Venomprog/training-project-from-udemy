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
    for (value of reversed){
        a = value.split('').reverse().join('');
        b += a + ' ';
    }
    return `${b}`;
}
console.log(reverse(someString));
// Достиг результата, что функция реверсит фразу и реверсит в каждом слове буквы, но код не чистый