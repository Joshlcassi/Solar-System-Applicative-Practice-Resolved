import { data } from "../data/data";

// SPACE DATA EXERCISE 6
// Return an array with all asteroids names discovered after a given year
// Return example: ['name1', 'name2', ... , 'nameN']

export function getAsteroidsDiscoveredAfterYear(data, year) {
  // Your code goes here...
  const asteroids = data.asteroids;
  var asteroidNames = [];
  for (let index = 0; index < asteroids.length; index++) {
    if (asteroids[index].discoveryYear > year) {
      asteroidNames.push(asteroids[index].name);
    }
  }
  return asteroidNames;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-6"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
