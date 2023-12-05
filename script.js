// function firstChar(text) {
//   // your code here
// }

// // Do not change the code below

// const text = prompt("Enter text:");
// alert(firstChar(text));


function firstChar(text) {
  // Remove leading and trailing whitespaces
  const trimmedText = text.trim();

  // Return the first character or an empty string if the string is empty
  return trimmedText.length > 0 ? trimmedText[0] : '';
}

// Example
const text = prompt("Enter text:");
alert(firstChar(text));
