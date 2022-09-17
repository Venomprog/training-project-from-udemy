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
