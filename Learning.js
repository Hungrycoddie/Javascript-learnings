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
let a5 = "Learning to code is ";
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