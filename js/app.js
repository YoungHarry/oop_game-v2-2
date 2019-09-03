/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//const phrase = new Phrase('Life is like a box of chocolates');
//console.log(`${phrase.phrase}`);
//const game = new Game();

//game.phrases.forEach((phrase, index)=>{
  //console.log(`${index}- phrase: ${phrase.phrase}`);

//})





const game = new Game();
console.log(game.getRandomPhrase());
const phrase = new Phrase(game.getRandomPhrase());
console.log(`${phrase.phrase}`);
