/* Закомментил т.к. выполнил практику по уроку


let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
let lastFilm = prompt('Один из последних фильмов?', '');
let rating = prompt('Оцените этот фильм', '');
let a = prompt('Один из последних фильмов?', '');
let b = prompt('Оцените этот фильм', '');
let personalMovieDB = {
    count: numberOfFilms,
    movies:{
        
    },
    actors:{},
    genres:[],
    privat: false
};
personalMovieDB.movies[lastFilm] = rating;
personalMovieDB.movies[a] = b;

console.log(personalMovieDB);

*/


// function firstTask() {
//     for (let i = 5; i < 11; i++){
//         console.log(i);
//     }
// }
// firstTask();


// function secondTask() {
//     for (let i = 20; i <= 20; i--){
//         if (i === 13) break;
//         console.log(i);
//     }
// }

// secondTask();


// function thirdTask() {
//     for (let i = 2; i <=10; i++){
//         if (i%2 === 0){
//             console.log(i);
//         }
//     }
// }

// thirdTask();

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }


// let i = 2;
// while (i < 16 ){
//     i++;
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
    
// }


// function fifthTask() {
//     const arrayOfNumbers = [];
//     let j = 5;
//     for (let i = 0; i <= 5; i++){
//         arrayOfNumbers[i] = j;
//         j++;
//     }
//     console.log(arrayOfNumbers);
//     // Не трогаем
//     return arrayOfNumbers;
// }

// fifthTask();



let numberOfFilms;

let personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

function start (){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();



function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        let a = prompt('Один из последних фильмов?', '');
        let b = prompt('Оцените этот фильм', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('Error');
            i--;
        }
        
    }
}
rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        console.log("Вы стандартный зритель");
    } else if (personalMovieDB.count >= 30){
        console.log("Вы киноман");
    } else {
        console.log('Произошла ошибка'); //wtf why vivod?
    }
}
detectPersonalLevel();

console.log(personalMovieDB);

function showMyDB(){
    if (personalMovieDB.privat === "false"){
        console.log(personalMovieDB);
        console.log('Privat done');
    }
}
showMyDB();