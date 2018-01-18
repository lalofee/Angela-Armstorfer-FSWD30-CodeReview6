class Media {
	constructor(image, title, author, genre, publisher, rating) {
			this.image = image;
			this.title = title;
			this.author = author;
			this.genre = genre;
			this.publisher = publisher;
   			this.rating = rating;  
   	}
};    



//MediaData (Objects are stored in an Array)
var books = [

new Media("img/bachmann.jpg", "Malina", "Ingeborg Bachmann", "Books", "Suhrkamp Verlag", "4"),
new Media("img/beauvoir.jpg", "Das andere Geschlecht", "Simone de Beauvoir", "Books", "Suhrkamp Verlag", "5"),
new Media("img/bernhard.jpg", "Holzfällen", "Thomas Bernhard", "Books", "Suhrkamp Verlag", "4"),
new Media("img/frisch.jpg", "Biedermann und die Brandstifter", "Max Frisch", "Books", "Suhrkamp Verlag", "3"),
new Media("img/precht.jpg", "Tiere Denken", "Richard David Precht", "Books", "Goldmann", "5"),
new Media("img/fritsch.jpg", "Winters Garten", "Valerie Fritsch", "Books", "Suhrkamp Verlag", "5")
];

var music = [

new Media("img/bjoerk.jpg", "Hyperballad", "Björk", "Music", "Suhrkamp Verlag", "4"),
new Media("img/clash.jpg", "The Clash", "The Clash", "Music", "Suhrkamp Verlag", "5"),
new Media("img/police.jpg", "Ghost in the Machine", "The Police", "Music", "Suhrkamp Verlag", "4"),
new Media("img/morcheeba.jpg", "The Antidote", "Morcheeba", "Music", "Suhrkamp Verlag", "3"),
new Media("img/neubauten.jpg", "Halber Mensch", "Einstürzende Neubauten", "Music", "Goldmann", "5"),
new Media("img/tricky.jpg", "Blow Back", "Tricky", "Music", "Suhrkamp Verlag", "5")
];

var film = [

new Media("img/budapest.jpg", "The Grand Budapest Hotel", "...", "Film", "Suhrkamp Verlag", "4"),
new Media("img/onlylovers.jpg", "Only Lovers Left Alive", "Jim Jarmusch", "Film", "Suhrkamp Verlag", "5"),
new Media("img/stranger.jpg", "Stranger Than Paradise", "Jim Jarmusch", "Film", "Suhrkamp Verlag", "4"),
new Media("img/trainspotting.jpg", "Trainspotting", "Irvine Welsh", "Film", "Suhrkamp Verlag", "3"),
new Media("img/wild.jpg", "Wild At Heart", "David Lynch", "Film", "Goldmann", "5"),
new Media("img/bluevelvet.jpg", "Blue Velvet", "David Lynch", "Film", "Suhrkamp Verlag", "5")
];


// goz totally stucked, after many hours couldnt find out how to insert data.
/*$(document).ready(function(){

	 $("#media1 .title").append(this.title);
     $("#media1 .author").append("Ingeborg Bachmann");
     $("#media1 .genre").append("Books");
     $("#media1 .publisher").append("Suhrkamp Verlag");
     $("#media1 .rating").append("4");

});
*/

//Getting the elements Id's from HTML

var allBooks = document.getElementById("books");
var allMusic = document.getElementById("music");
var allFilm = document.getElementById("film");



//Loop for Books
for (var i=0; i<books.length; i++) {
	allBooks.innerHTML += '<div class="col-lg-2">' +
						  	'<div class="thumbnail">' +
						  		'<img src="' + books[i].image + '"' +
						  		'<div class="caption">' +
						  			'<h4 class="title">' + books[i].title + '</h4>' +
						  				'<p>' + 
						  					'<span class="author">' + "Author: " + books[i].author + '</span><br>' +
						  					'<span class="genre">' + "Genre: " + books[i].genre + '</span><br>' +
						  					'<span class="publisher">' + "Publisher: " + books[i].publisher + '</span><br>' +
						  					'<span class="rating">' + "Rating: " + books[i].rating + '</span><br>' +
						  				'</p>' +
						  			'</div>' +
						  		'</div>' +
						  	'</div>';
};

//Loop for Music
for (var i=0; i<music.length; i++) {
	allMusic.innerHTML += '<div class="col-lg-2">' +
						  	'<div class="thumbnail">' +
						  		'<img src="' + music[i].image + '">' +
						  		'<div class="caption">' +
						  			'<h4 class="title">' + music[i].title + '</h4>' +
						  				'<p>' + 
						  					'<span class="author">' + "Author: " + music[i].author + '</span><br>' +
						  					'<span class="genre">' + "Genre: " + music[i].genre + '</span><br>' +
						  					'<span class="publisher">' + "Publisher: " + music[i].publisher + '</span><br>' +
						  					'<span class="rating">' + "Rating: " + music[i].rating + '</span><br>' +
						  				'</p>' +
						  			'</div>' +
						  		'</div>' +
						  	'</div>';
};

//Loop for Films
for (var i=0; i<film.length; i++) {
	allFilm.innerHTML += '<div class="col-lg-2">' +
						  	'<div class="thumbnail">' +
						  		'<img src="' + film[i].image + '">' +
						  		'<div class="caption">' +
						  			'<h4 class="title">' + film[i].title + '</h4>' +
						  				'<p>' + 
						  					'<span class="author">' + "Author: " + film[i].author + '</span><br>' +
						  					'<span class="genre">' + "Genre: " + film[i].genre + '</span><br>' +
						  					'<span class="publisher">' + "Publisher: " + film[i].publisher + '</span><br>' +
						  					'<span class="rating">' + "Rating: " + film[i].rating + '</span><br>' +
						  				'</p>' +
						  			'</div>' +
						  		'</div>' +
						  	'</div>';
};