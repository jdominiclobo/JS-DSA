// const isPalindrome = (str) => {
//   let formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   let reversedStr = formattedStr.split("").reverse().join("");
//   return reversedStr === formattedStr;
// };

//4. check if the string and reversed string is palindrome or not
function isPalindrome(str) {
  const formattedStr = removeNonAlphanumeric(str.toLowerCase());
  const reversedStr = reversString(formattedStr);
  return formattedStr === reversedStr;
}

//2. remove all non alphanumeric characters from the string
function removeNonAlphanumeric(str) {
  let formattedStr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphaNumeric(char)) {
      formattedStr += char;
    }
  }
  return formattedStr;
}

// 1. to check if the characters are non alphanumeric or not
function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || //numbers 0-9
    (code >= 97 && code <= 122) // lowercase a-z
  );
}

// 3. reverse the string
function reversString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(isPalindrome("Malayalam"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("probably"));
