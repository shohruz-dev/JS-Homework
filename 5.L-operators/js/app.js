let numberOfFilms = +prompt('how many movies have you seen?')
let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
}

let askLastFilms = prompt('One of the last movies you saw?')
askAwards = +prompt('How much would you rate it?')

personalMovieDB.movies[askLastFilms] = askAwards

console.log(personalMovieDB)
