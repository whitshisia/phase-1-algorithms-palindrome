function isPalindrome(word) {
  // Write your algorithm here
  const cleanStr = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        return cleanStr === cleanStr.split('').reverse().join('');
}
console.log(isPalindrome("robot"))

/* 
  Add your pseudocode here
  input = "aWord"
  output ="true| false"
*/

/*
  Add written explanation of your solution here
  the function takes in a word and if the word is a palindrome it returns a true else it
  returns false 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
