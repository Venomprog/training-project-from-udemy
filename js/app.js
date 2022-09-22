
let numberOfFilms;
function start (){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){ //Если юзер пропустил, то вопрос снова
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');  
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        let a = prompt('Один из последних фильмов?', '').trim();
        let b = prompt('Оцените этот фильм', '').trim();
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
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы стандартный зритель");
    } else if (personalMovieDB.count >= 30){
        console.log("Вы киноман");
    } else {
        console.log('Произошла ошибка'); //wtf why vivod?
    }
}
detectPersonalLevel();



function showMyDB(hidden){
    if (!hidden){    // Проверка, если privat = false значит = не спрятан. hidden = true = 1; !hidden = false = 0
        console.log(personalMovieDB);
        console.log('Privat done');
    }
}
showMyDB(personalMovieDB.privat);


function writeYourGenres (){
    for (let i = 1; i <= 3; i++){
        const genre = prompt(`ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;  // Для нас массив с 0, а для пользователя номер 1
        if (genre == '' || genre == null){
            i--;   //Если юзер скипает вопрос, он повторяется :)
        }
    }
    
}

writeYourGenres();


