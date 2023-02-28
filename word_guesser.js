// Aditya Srivastava

var letters_of_word = ["c", "l", "o", "u", "d"];
var guessed_letters = [];
var letter;

function guessLetter(letter) {
  if (letters_of_word.includes(letter) && !guessed_letters.includes(letter)) {
    for (var i = 0; i < letters_of_word.length; i++) {
      if (letters_of_word[i] == letter) {
        guessed_letters.push(letter);
      }
    }
    console.log(guessed_letters);
    if (letters_of_word.length == guessed_letters.length) {
      console.log("Congratulations, you won the game");
    } else {
      console.log("Congratulations, you found a valid letter");
      console.log(
        "You have to guess " +
          (letters_of_word.length - guessed_letters.length) +
          " letters more."
      );
    }
  } else {
    console.log("Your guess is incorrect. Try Again");
  }
}

guessLetter("c");
guessLetter("l");
guessLetter("o");
guessLetter("u");
guessLetter("d");
