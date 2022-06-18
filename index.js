 function revString(word){
  const wordArrayVal = word.split("");
  const revWordArrayVal = wordArrayVal.reverse();
  const revWord = revWordArrayVal.join("");
  return revWord;

 }

function isPalindrome(word) {
  // Write your algorithm here
  
  const revWord = revString(word)
  //Add your pseudocode here
 //*/
 // convert string into an arry value using split()
 // Reverse the array values using reverse()
 // grouping arrays into string using join()
 // use if statement to check if they are equal 
 // print results
 
  if (word === revWord){
   return true;
  }
 else {
  return false;
 } 
}


  //Add written explanation of your solution here
//*///Take in a string convert it into an array.
//Then you reverse and check whether theya are equal with initial string if true return it is a palindrome else false


// You can run `node index.js` to view these console logs
 if (require.main === module) {
  // add your own custom tests in here
  console.log('Expecting: true');
  console.log('=>', isPalindrome("abba"));
  console.log("");

  console.log('Expecting: true');
  console.log('=>', isPalindrome("racecar"));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
  console.log("");
}

module.exports = isPalindrome;
