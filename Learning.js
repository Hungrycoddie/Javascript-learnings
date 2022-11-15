/* 
Escape Sequences in Strings
     /Code	Output
     \'	    single quote
     \"	    double quote
     \\	    backslash
     \n	    newline
     \t	    tab
     \r	    carriage return
     \b      word boundary
     \f     form feed   
*/

const a1 = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(a1)

// Concatenating Strings with Plus Operator

const a2 = "This is the start. " + "This is the end."; 
console.log(a2)

// Concatenating Strings with the Plus Equals Operator

let a3 = "This is the first sentence. ";
a3 += "This is the second sentence.";
console.log(a3)

/*             Constructing Strings with Variables
Sometimes you will need to build a string.By using the concatenation operator(+),
you can insert one or more variables into a string you're building. */

const myName = "Arun raj";
const a4 = "My name is " + myName + " and I am well!";
console.log(a4)

/*                      Appending Variables to Strings
Just as we can build a string over multiple lines out of string literals, 
we can also append variables to a string using the plus equals (+=) operator.*/

const someAdjective = "Awesome Arun!";
let a5 = "Learning JavaScript is ";
console.log (a5+= someAdjective)

/*
          Find the Length of a String
You can find the length of a String value by writing .
length after the string variable or string literal.
*/
// Setup
letLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
console.log(lastNameLength);

/*
          Use Bracket Notation to Find the First Character in a String  
Bracket notation is a way to get a character at a specific index within a string
Most modern programming languages, like JavaScript, 
don't start counting at 1 like humans do. They start at 0.
This is referred to as Zero-based indexing.
          */
// Setup
let firstLetterOfLastNamee = "";
const lastNamee = "Lovelace";

// Only change code below this line
firstLetterOfLastNamee = lastNamee[0];// Change this line
console.log(firstLetterOfLastNamee)

/*
          Understand String Immutability

In JavaScript, String values are immutable, 
which means that they cannot be altered once created.

// Setup
let myStr = "Jello World";
myStr[0] = "H";
*/

let a6 = "jello world";
a6 = "Hello World !";
console.log(a6)

/*
               Bracket Notation to Find the Nth Character in a String
You can also use bracket notation to get the character at other positions within a string.
Remember that computers start counting at 0,
so the first character is actually the zeroth character.
*/
const NastName = "Lovelace";
const thirdLetterOfNastName = NastName[2];
/*
          Use Bracket Notation to Find the Last Character in a String
In order to get the last letter of a string, you can subtract one from the string's length.
*/
const FastName = "Lovelace";
const lastLetterOfFastName = FastName[FastName.length - 1];

/*
                         Word Blanks
You are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs.
You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense
*/
const myNoun = "Raj";
const myAdjective = "Arun";
const myVerb = "ran";
const myAdverb = "quickly";

var wordBlanks =
  "My friend " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";

console.log(wordBlanks);

/*
               Store Multiple Values in one Variable using JavaScript Arrays

With JavaScript array variables, we can store several pieces of data in one place.
You start an array declaration with an opening square bracket, end it with a closing square bracket,
 and put a comma between each entry,
*/
const myArray = ["Arun", 05];
console.log(myArray)

/*
               Nest one Array within Another Array

You can also nest arrays within other arrays, like below:
*/
const myArray_a1 = [
  ["Arun", 05],
  ["Aruna", 01],
];
console.log(myArray_a1)


/*
               Access Array Data with Indexes
We can access the data inside arrays using indexes.

Array indexes are written in the same bracket notation that strings use, 
except that instead of specifying a character, they are specifying an entry in
the array. Like strings, arrays use zero-based indexing, so the first element 
in an array has an index of 0.
*/
const myArray_a2 = [50, 60, 70];
var myData = myArray_a2[0];
console.log(myData);

/*
               Modify Array Data With Indexes
Unlike strings, the entries of arrays are mutable and can be changed freely, 
even if the array was declared with const.
*/
const myArray_a3 = [0, 64, 99];
myArray_a3[0] = 45;
console.log(myArray_a3)

/*

*/