/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

let quote = document.getElementById('random-quote')
let author = document.getElementsByClassName('author')[0]
let citation = document.getElementsByClassName('citation')[0]
let year = document.getElementsByClassName('year')[0]
let button = document.getElementsByClassName('btn')[0]

var quotes = [
	{
		quote: "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.",
		author: "Dr. Seuss"
	},
	{
		quote: "This too, shall pass.",
		author: "Anonymous"
	},
	{
		quote: "Keep your eyes on the stars and your feet on the ground.",
		author: "Theodore Roosevelt"
	},
	{
		quote: "The only person you should try to be better than is the person you were yesterday.",
		author: "Anonymous"
	},
	{
		quote: "Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life; define yourself.",
		author: "Harvey Fierstein"
	},
	{
		quote: "Faith is the art of holding on to things your reason has once accepted, in spite of your changing moods.",
		author: "C.S. Lewis"
	},
	{
		quote: "A man who flies from his fear may find that he has only taken a shortcut to meet it.",
		author: "Sador",
		citation: "Children of Húrin"
	},
	{
		quote: "Life's too mysterious to take too serious.",
		author: "Mary Engelbreit"
	},
	{
		quote: "No one can make you feel inferior without your consent.",
		author: "Eleanor Roosevelt"
	},
	{
		quote: "The woman who follows the crowd will usually go no further than the crowd. The woman who walks alone is likely to find herself in places no one has been before.",
		author: "Albert Einstein"
	},
	{
		quote: "You can't go around building a better world for people. Only people can build a better world for people. Otherwise it's just a cage.",
		author: "Terry Pratchett",
		citation: "Witches Abroad",
		year: "1991"
	},
	{
		quote: "There isn't a way things should be. There's just what happens, and what we do.",
		author: "Terry Pratchett",
		citation: "A Hat Full of Sky"
	},
	{
		quote: "It's not about how hard you can hit; it's about how hard you can get hit and keep moving forward.",
		author: "Rocky Balboa",
		citation: "Rocky",
		year: "1976"
	},
	{
		quote: "More fuck yeah, less fuck that.",
		author: "Anonymous"
	},
	{
		quote: "If you want to go fast, go alone. If you want to go far, go together.",
		author: "African proverb"
	},
	{
		quote: "It's OK to not be OK, as long as you don't stay that way.",
		author: "Anonymous"
	},
	{
		quote: "I can be changed by what happens to me but I refuse to be reduced by it.",
		author: "Maya Angelou"
	},
	{
		quote: "Believe you can and you're halfway there.",
		author: "T. Roosevelt"
	},
	{
		quote: "May I never be complete. May I never be content. May I never be perfect.",
		author: "Chuck Palahniuk"
	},
	{
		quote: "Nothing in life is to be feared; it is only to be understood. Now is the time to understand more so that we may fear less.",
		author: "Marie Curie"
	},
	{

		quote: "Those who don't believe in magic will never find it.",
		author: "Roald Dahl"
	},
	{
		quote: "There is no elevator to success  you have to take the stairs.",
		author: "Anonymous"
	},
	{
		quote: "Plant your garden and decorate your own soul, instead of waiting for someone to bring you flowers.",
		author: "Jose Luis Borges"
	},
	{
		quote: "It does not do to dwell on dreams and forget to live.",
		author: "Albus Dumbledore",
		citation: "Harry Potter and the Sorcerer's Stone",
		year: "1997"
	},
	{
		quote: "Don't sweat the petty things and don't pet the sweaty things.",
		author: "George Carlin"
	},
	{
		quote: "Do what you feel in your heart to be right, for you'll be criticized anyway.",
		author: "Eleanor Roosevelt"
	},
	{
		quote: "Do not set yourself on fire in order to keep others warm.",
		author: "Anonymous"
	},
	{
		quote: "The way I see it, every life is a pile of good things and bad things. The good things don't always soften the bad things, but vice versa, the bad things don't always spoil the good things and make them unimportant.",
		author: "Doctor Who"
	},
	{
		quote: "It's supposed to be hard. If it were easy, everyone would do it.",
		author: "Jimmy Dugan",
		citation: "A League of Their Own"
	},
	{
		quote: "Ask yourself if what you're doing today will get you closer to where you want to be tomorrow.",
		author: "Anonymous"
	},
	{
		quote: "Life may not be the party we hoped for, but while we're here, we should dance.",
		author: "Anonymous"
	},
	{
		quote: "Never cowardly or cruel. Never give up, never give in.",
		author: "Doctor Who"
	},
	{
		quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
		author: "Ralph Waldo Emerson"
	},
	{
		quote: "In 20 years, you probably won't even remember this.",
		author: "Anonymous"
	},
	{
		quote: "Love all, trust a few, do wrong to none.",
		author: "William Shakespeare"
	},
	{
		quote: "Clear eyes, full hearts, can't lose.",
		author: "Dillon Panthers",
		citation: "Friday Night Lights",
		year: "1990"
	},
	{
		quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
		author: "Aristotle"
	}
];

// TODO: answer here
// 1. Create a function to get a random number between 0 and the length of the quotes array
// 2. Create a variable to store the random number
// 3. Create a variable to store the random quote
// 4. Create a variable to store the random quote's author
// 5. Create a variable to store the random quote's citation
// 6. Create a variable to store the random quote's year
// let button = document.getElementsByClassName('btn')
// random quote's author

// let randomAuthor = randomQuote.author;
// console.log(randomAuthor)
// // random quote's citation
// let randomCitation = randomQuote.citation;
// console.log(randomCitation)
// // random quote's year
// let randomYear = randomQuote.year;
// console.log(randomYear)

button.addEventListener('click', displayQuote);

function getQuote() {
	// TODO: answer here
	// random number
	let randomNumber = Math.floor(Math.random() * quotes.length) + 1;
	// button.addEventListener('click', getQuote);
	// console.log(randomNumber)
	// random quote
	let randomQuote = quotes[randomNumber];
	// console.log(randomQuote)
	return randomQuote;
}


function displayQuote() {
	// TODO: answer here
	randomQuoteDisplay = getQuote();
	quote.innerHTML = randomQuoteDisplay.quote;
	author.innerHTML = randomQuoteDisplay.author;
	citation.innerHTML = randomQuoteDisplay.citation;
	year.innerHTML = randomQuoteDisplay.year;
	
	if (randomQuoteDisplay.citation === undefined && randomQuoteDisplay.year === undefined) {
		quote.innerHTML = randomQuoteDisplay.quote;
		author.innerHTML = randomQuoteDisplay.author;
		citation.innerHTML = "";
		year.innerHTML = "";
	} else if (randomQuoteDisplay.citation === undefined) {
		quote.innerHTML = randomQuoteDisplay.quote;
		author.innerHTML = randomQuoteDisplay.author;
		citation.innerHTML = "";
		year.innerHTML = "";
	} else if (randomQuoteDisplay.year === undefined) {
		quote.innerHTML = randomQuoteDisplay.quote;
		author.innerHTML = randomQuoteDisplay.author;
		citation.innerHTML = randomQuoteDisplay.citation;
		year.innerHTML = "";
	} else {
		quote.innerHTML = randomQuoteDisplay.quote;
		author.innerHTML = randomQuoteDisplay.author;
		citation.innerHTML = randomQuoteDisplay.citation;
		year.innerHTML = randomQuoteDisplay.year;
	}
}