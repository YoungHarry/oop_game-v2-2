/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
   constructor(){

        this.missed = 0;
        this.activePhrase = `null`;
        this.phrases = createPhrase();

   }

   createPhrases(){
  let newPhrases = [
     {phrase:"Wait till they get a load of me..."},
     {phrase:"The force will be with you, always..."},
     {phrase:"How many times do I have to say it?"},
     {phrase:"Pizza Time ! "},
     {phrase:"It can't rain all the time..."}
  ];
   return newPhrases;

}();

};
