// TODO: Create a function called ‘multiply’ that will take in 3 parameters and multiply all 3 numbers together. Note: The argument passed must NOT be the same number.
function multiply(num1, num2, num3) {
  return num1 * num2 * num3;
}
// TODO: Create a function expression called ‘convertToSeconds’ that takes in a number of minutes as an argument and returns the amount in seconds. Do not use a console.log() inside of the function.
function convertToSeconds(minutes) {
  return minutes * 60;
}
// TODO: Create a function called fahrenheitToCelsius that takes the temperature as a parameter and returns the equivalent temperature in Celsius. Do not use a console.log() inside of the function.
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
// TODO: Create a function that takes a string as a parameter and returns the reverse of the string. Do not use a console.log() inside of the function.
function stringReverse(str) {
  return str.split("").reverse().join("");
}
// TODO: Create a function that takes in a string and returns the number of vowels in the sentence. Example: countVowels('Javascript') returns 3. Do not use a console.log() inside of the function.
function countVowels(str) {
  let counter = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  //checks every character in string if it's a vowel then adds to counter
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      counter++;
    }
  }
  return counter;
}
// TODO: Create an 'isPrime' function that takes a number as a parameter and returns true if the number is prime, and false otherwise. Make sure to test your code with 4 numbers.
function isPrime(num) {
  if (num < 2) {
    return false;
  } //cus everything under 2 isn't prime
  for (let divisor = 2; divisor < num; divisor++) {
    //looking for divisor that leaves 0 remainder (= true). will loop as long as less than num. no divisor = false
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1));
console.log(isPrime(-12));
console.log(isPrime(3));
console.log(isPrime(11));
