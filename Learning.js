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



/*

*/