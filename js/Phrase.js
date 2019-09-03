/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
"use strict"
 class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();



    }



    /* Display the phrase on screen/the html
    1.Grabbing the div element
    Insert the test into inner html?
    Inserting the random phrase into that div element
    Hide the phrase from the player
    Add on click
    So grab the Start game button and also have an event listener
    Make the phrase equal the elements on the html
    Then using a function showing the right letter if
    the player guesses it right.

    */
  /*  addPhrasetoDisplay(){
      //let getDiv = $('#phrase')
      //let getDivKeys = $("")
      console.log(getRandomPhrase().split());




    } */

    addPhrasetoDisplay(){
      let getElement = document.querySelector('#phrase');
      let liElement = getElement.firstElementChild;

      let newWords = this.phrase.split("")
      if(newWords ==(/[a-z,A-Z]/)){
          newWords.forEach((item)=>{
            let li = document.createElement("li");
            li.className = 'hide letter' + character;
            li.textContent = " character";
            liElement.append('li');


          })
      }



    }




 };
