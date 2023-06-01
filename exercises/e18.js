/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */
import { maxBy, minBy } from "./e17";

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  
  const asteroids = data.asteroids;
    let modeYear =  asteroids.reduce((prev, asteroids) => {
      prev[asteroids.discoveryYear] = ++prev[asteroids.discoveryYear] || 1
      
      return prev;
    },{});

    let maxYear = null;
    let maxCount =2;

    for (const year in modeYear) {
      if (modeYear.hasOwnProperty(year)) {
        if( modeYear[year] > maxCount ){
          maxYear = modeYear[year];
        }
      }
    }

  return parseInt(maxYear)
 
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

/*let modeYear = maxBy(asteroids,(asteroids)=>asteroids.discoveryYear);

  return modeYear.discoveryYear; */

  /* const asteroids = data.asteroids;
  let modeYear = asteroids.reduce((accumulator, asteroid) => {
    const currCount = accumulator[asteroid.discoveryYear] ?? 0;
    return {
      ...accumulator, [asteroid.discoveryYear]: currCount + 1,
    };
  }, {});*/