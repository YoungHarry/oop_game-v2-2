/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
   constructor(){
     function createPhrases(){
       let newPhrases = [
          {phrase:"Wait till they get a load of me..."},
          {phrase:"The force will be with you, always..."},
          {phrase:"How many times do I have to say it?"},
          {phrase:"Pizza Time ! "},
          {phrase:"It can't rain all the time..."}
       ];
       return newPhrases;
     };
        this.missed = 0;
        this.activePhrase = `null`;
        this.phrases = createPhrases();

        function getRandomPhrase(){
          let randomNumber = Math.floor(Math.random()*5)+1;
                let randomPhrase = newPhrases.phrase[randomNumber];
                  return randomPhrase;



            };


        };
   };
