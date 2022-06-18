function isPalindrome(word) {
  // Write your algorithm here
  const arrVal = word.split('');
  const revArrVal = arrVal.reverse();
  const revWord = revArrVal.join('');



/* 
  Add your pseudocode here
*/
// convert string into an arry value using split()
// Reverse the array values using reverse()
// grouping arrays into string using join()
// use if statement to check if they are equal 
// print results
 
if (word == revWord){
  console.log('true')
}
else {
  console.log('false')
}}
isPalindrome('abba')

  //Add written explanation of your solution here
//*///Take in a string convert it into an array.
//Then you reverse and check whether theya are equal with initial string if true return it is a palindrome else false


// You can run `node index.js` to view these console logs
 if (require.main === module) {
  // add your own custom tests in here
  console.log('Expecting: true');
  console.log('=>', isPalindrome("omo"));

  console.log('Expecting: false');
  console.log('=>', isPalindrome("cat"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

//module.exports = isPalindrome;
