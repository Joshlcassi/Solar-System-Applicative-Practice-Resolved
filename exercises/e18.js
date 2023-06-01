/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const asteroids = data.asteroids;
  const discoveryCount = {};

  // Count the number of discoveries for each year
  for (let asteroid of asteroids) {
    const year = asteroid.discoveryYear;
    if (discoveryCount[year]) {
      discoveryCount[year]++;
    } else {
      discoveryCount[year] = 1;
    }
  }

  let maxYear = null;
  let maxCount = 0;

  // Find the year with the maximum count of asteroid discoveries
  for (let year in discoveryCount) {
    const count = discoveryCount[year];
    if (count > maxCount) {
      maxCount = count;
      maxYear = year;
    }
  }
  return parseInt( maxYear);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function


  /* const asteroids = data.asteroids;
    let modeYear =  asteroids.reduce((prev, asteroids) => {
      prev[asteroids.discoveryYear] = ++prev[asteroids.discoveryYear] || 1
      
      return prev;
    },{});

    let maxYear = null;
    let maxCount = -1;

    for (const year in modeYear) {
      if (modeYear.hasOwnProperty(year)) {
        if( modeYear[year] > maxCount ){
          maxYear = modeYear[year];
        }
      }
    } */