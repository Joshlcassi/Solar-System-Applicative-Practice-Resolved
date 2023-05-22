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
export function minBy(array, cb) {
  // Your code goes here...
  var tempAge = 1000;
  
  for (let index = 0; index < array.length; index++) {
    if (array[index].age < tempAge) {
      tempAge = array[index].age;
    }
    
  }
  var minselected = array.find(array=>array.age == tempAge);
  return minselected;

}

export function maxBy(array, cb) {
  // Your code goes here...
  var tempAge = 0;
  var tempName;
  for (let index = 0; index < array.length; index++) {
    if (array[index].age > tempAge) {
      tempAge = array[index].age;
      tempName = array[index].name;
    }
   
    
  }
  var maxSelected = array.find(array=>array.age == tempAge);
  return maxSelected;
    
  }




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

/*
if (cb(array[index])) {
      return array[index];
     
    }

     else if (array[index].age < tempAge && array[index].name.length > tempName.length) {
      return array[index];
    }
    */ 