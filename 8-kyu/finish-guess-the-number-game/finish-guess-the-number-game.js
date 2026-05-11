​
//Approach 1 condition to check if the user has reached the limit to throw an error
// Approach to check if the user guessed the right number to return true
//Approach condition for the user to guess if the number is wrong to return false and loose a life
//Testclass Guesser {
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
​
  // method
  guess(n) {
    if (this.lives === 0) {
       throw new Error ('Error')
    } else if(n === this.number){
              return true
              }
    else {
      this.lives--;
      return false;
    }
  }
}
​
​