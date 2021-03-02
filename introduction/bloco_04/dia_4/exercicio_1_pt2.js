function isPalindrome(word) {
  let letters = word.split("");
  let palindrome = true;

 for (let index in letters) {
   if (letters[index] != word[(word.length - 1) - index]) {
     palindrome = false;
   }
 }
 return palindrome;
}

console.log(isPalindrome('arara'));