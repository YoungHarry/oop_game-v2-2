/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
//creating the class object
 class Game{
   constructor(){
      //number of times the client has missed
        this.missed = 0;
      //active phrase within the game currently
        this.activePhrase = `null`;
        //calling the method createPhrase() to generate a phrase
        this.phrases = createPhrase();

   }
   //creating an array of object phrases
   createPhrases(){
  let newPhrases =[
     {phrasez:"Wait till they get a load of me..."},
     {phrasez:"The force will be with you, always..."},
     {phrasez:"How many times do I have to say it?"},
     {phrasez:"Pizza Time ! "},
     {phrasez:"It can't rain all the time..."}
  ];
   return newPhrases;

}();
  //choosing a random phrase
  getRandomPhrase(){
    let numberPhrase = Math.floor(Math.random()*5)+1;
    let phraseGenerator = newPhrases[numberPhrase];
    return phraseGenerator;
  }

};
