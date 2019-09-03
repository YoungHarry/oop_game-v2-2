/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
//creating the class object
"use strict"

 class Game{
   constructor(){
      //number of times the client has missed
        this.missed = 0;
        //calling the method createPhrase() to generate a phrase
        this.phrases= this.createPhrases();
        //active phrase within the game currently
          this.activePhrase = `null`;


   }
   //creating an array of object phrases

   createPhrases(){
     const newPhrases =[
     {phrase:"Wait till they get a load of me..."},
     {phrase:"The force will be with you, always..."},
     {phrase:"How many times do I have to say it?"},
     {phrase:"Pizza Time ! "},
     {phrase:"It can't rain all the time..."}
  ];


return newPhrases;

}


  //choosing a random phrase
  getRandomPhrase(){

    let numberPhrase = Math.floor(Math.random()*this.phrases.length);
    let phraseGenerator = this.phrases[numberPhrase];
    return phraseGenerator;
  };

}
