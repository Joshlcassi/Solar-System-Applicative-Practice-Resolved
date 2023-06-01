/**
 * Make sure to read the e17.md file!
 * For this exercise we want you to make custom `maxBy` and `minBy` methods. 
 * In order to do this it is ok to use any type of FOR loops. 
 * REQUIREMENTS: functions should:
 * * Take an array of things
 * * minBy(): Return the element where the callback function on that element yields the lowest value
 * * maxBy(): Return the element where the callback function on that element yields the highest value
 */
//what if I tried to filter or map the callback function to get result
export function minBy(array) {
  // Your code goes here...
  var tempAge = 1000;
  for (let index in array) {
    if (array[index].age < tempAge) {
      tempAge = array[index].age;
    }
  }
  return array.find(array=>array.age == tempAge);
}


export function maxBy(array, cb) {
  // Your code goes here...
  let tempAge = -1000;
  let tempName ;
  for (let index in array) {
    let tempValue = cb(array[index]);
    if (tempValue > tempAge) {
      tempAge = tempValue;
      tempName = array[index];
    } 
  }
  return tempName;
  }




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

/*
if (cb(array[index])) {
      return array[index];
     
    }

    
    */ 