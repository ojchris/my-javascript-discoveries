/*
 * Programming Quiz: Using the Rest Parameter (1-5)
 */

// Here I use the rest parameter to create an average() function 
//that calculates the average of an unlimited amount of numbers.

function average(...nums) {
  let mean = 0; 
  let total = 0; 
  let numOf = arguments.length; //MSN: The arguments.length property provides the number of arguments actually passed to a function. 
  if (numOf > 0){
      for(const num of nums) {
        total += num;
      }
      mean = total/numOf;
      return mean;
  }
  
  return 0;

}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
