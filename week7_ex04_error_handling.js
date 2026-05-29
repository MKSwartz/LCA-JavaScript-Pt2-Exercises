// TODO: Create a function that validates user input.

const validateInput = () => {
  const x = "Input";
  if (x == "") {
    alert("There must be input.");
    return false;
  }
}

// TODO: Create a function that demonstrates multiple error types.

const errorFunc = () => {
  // TypeError
  const num = 6;
  num();
  
  // RangeError
  const array = new Array(-1);

  // SyntaxError
  const name = "June);
};

// TODO: Create a collection of helper functions for string manipulation.

  // Capitalizes first letter of a name
const firstCapital = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
} 

  // Formats the surname (returns initial)
const formatSurname = (surname) => {
  return surname.charAt(0).toUpperCase() + ".";
}

  // Email masking function. I created it in a freeCodeCamp Functions lab
const maskEmail = (email) => {
  const atIndex = email.indexOf("@");
  
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);
  
  const first = username[0];
  const last = username.slice(-1);
   
  const middleLength = username.length - 2;
  const asterisks = "*".repeat(middleLength);
  
  const maskedUsername = first + asterisks + last;

  return maskedUsername + domain;
}

// TODO: Create helper functions for array operations.

 // Gets the first element
 const getFirst = (arr) => {
  return arr[0];
 }

 // Gets the length of an array
 const getLength = (arr) => {
  return arr.length;
 }
 // Gets the last element
 const getLast = (arr) => { 
  return arr[arr.length - 1];
}