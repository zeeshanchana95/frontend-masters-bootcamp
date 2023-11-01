/**
 * strings:
 *  - bunch of characters sitting next to each other
 *  - used for storing literal values like any word, sentence
 *  - value need to be enclosed inside Single Quotes '', Double Quotes "", or Backticks `` 
 * 
 * Syntax Error: 
 *  - means your grammar is bad, fix it
 *  - pretty easy to fix
 * 
 * String Concatenation:
 *  - connecting strings together
 *  - use + symbol to combine strings together
 */

const firstName = "Zeeshan"
const lastName = "Ahmed"

const sentence = "Hello " + firstName + " " + 
lastName + "! How are you?"; //string concatenation

console.log(sentence)