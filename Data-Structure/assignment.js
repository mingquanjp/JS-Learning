'use strict';

//1. Destructing Array
const books = [2, 3, 6];
//1.1Destructure books array into 2 var
let [firstBook, secondBook] = books;
console.log(firstBook, secondBook);

//1.2 Destructe the books array into 1 var call Third
let [, , thirdBooks] = books;
console.log(thirdBooks);

//1.3 Destructure the nested rating array into 2 vars call rating and ratingsCount
const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];

const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

//1.4. Destructure array into 3 vars
const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings] = ratingStars;
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);


//----------------------------------------------------------------------------
//2.Destructuring object
//2.1.Destructure the first book object from the books array into variables called title, author and ISBN.
const { title, author, ISBN } = books[0];

//2.2.Each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. The tags variable should be assigned with the value of the keywords property.
const { keywords: tags } = books[0];

//2.3.The seventh book from the books array is missing the programmingLanguage property. Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'.
const { language, programmingLanguage = 'unknown' } = books[6];

//2.4.Below are two variables called bookTitle and bookAuthor. Reassign them with the values of the title and author properties of the first book object from the books array.
let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({title : bookTitle, author : bookAuthor}) = books[0];

//2.5.Destructure the first book object from the books array into a variable called bookRating. In the result of your destructuring, the bookRating variable should be assigned with the value of the book[0].thirdParty.goodreads.rating property.
//Please do most of the work on the left side of the assignment operator: const ... = books[0];

const { thirdParty : {goodreads : {rating : bookRating}} } = books[0];

//2.6. Write a function called printBookInfo that has three parameters called title, author and year. This function should work for a single object passed as an argument, and it should log to the console information about the book in this format: "${title} by ${author}, ${year}".
const printBookInfo : function({title, author, year ='year unknown'}){
    console.log(`${title} by ${author}, ${year}`);
};

printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });


//----------------------------------------------------------------------------
//3.The spread operator
//3,1. Each book object has the author property, which stores an array of strings (author names) if there are multiple authors, or a single string (author name) if there is just one author.
//Declare an array called bookAuthors, and fill it with authors of the first two books from the books array. The bookAuthors array should have just one level (no nested arrays).

const bookAuthors =[...books[0].author, ...books[1].author];


//3.2.Write a function called spellWord that accepts a single string as an argument. This function should log to the console each letter of the argument separated by a space.
const spellWord = function(str){
    console.log(...str);
}



//----------------------------------------------------------------------------
//4.Rest Pattern and Parameters
//4.1. Destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest. The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable (it should be an array).

const [mainKeyword, ...rest] = books[0].keywords;

//4.2.Destructure the second book from the books array into a variable called bookPublisher. The bookPublisher variable should be assigned with the value of the publisher property of the book object. Assign the rest of the properties to the restOfTheBook variable.
const {publisher : bookPublisher, ...restOfTheBook} = books[1];

//4.3.Write a function called printBookAuthorsCount that has two parameters called title and authors. The authors parameter should accept any number of arguments. This function should log to the console a string formatted like that: "The book "${title}" has ${authors.length} authors".
const printBookAuthorCount = function (title, ...author){
    console.log("The book "${title}" has ${authors.length} authors");
}
