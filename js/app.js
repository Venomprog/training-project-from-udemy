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