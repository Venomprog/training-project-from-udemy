'use strict';
const personalMovieDB = {
    count: 0,
    movies:{},
    actors:{},
    genres:[],
    privat: false,
    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            //Если юзер пропустил 
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');  //пока пусто, то спрашивать
        }
    },
    rememberMyFilms: function(){
        for (let i = 0; i < 2; i++){   //2 раза спрашивает фильм и записывает в наш объект юзера
            let a = prompt('Один из последних фильмов?', '').trim(); //очищает от лишних пробелов
            let b = prompt('Оцените этот фильм', '').trim();
            if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50){
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('Error'); //проверка на ошибки, если пусто, то вопрос снова задаётся
                i--;
            }
        }
    },
    detectPersonalLevel: function(){
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log("Вы стандартный зритель");
        } else if (personalMovieDB.count >= 30){
            console.log("Вы киноман");
        } else {
            console.log('Произошла ошибка'); 
        }
    },
    showMyDB: function(hidden){
        if (!hidden){    // Проверка, если privat = false значит = не спрятан. hidden = true = 1; !hidden = false = 0
            console.log(personalMovieDB);
            console.log('Privat done');
        } else {
            console.log('Privat close');
        }
    },
    writeYourGenres: function  (){
        for (let i = 1; i < 2; i++){
            let genres = prompt(`Напишите ваши любимые жанры через запятую`).toLowerCase();
            if (genres == '' || genres == null){
                i--;   //Если юзер скипает вопрос, он повторяется :)
            }
            personalMovieDB.genres = genres.split(', ');
            personalMovieDB.genres.sort();
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр под номером ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else{
            personalMovieDB.privat = true;
        }
        
    }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.writeYourGenres();
