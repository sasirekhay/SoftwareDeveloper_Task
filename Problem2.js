function highestAverageBMI(arr) {
  // Create an empty object to store the BMI data for each age group
  let bmiData = {};

  // Iterate through the array of objects and calculate the BMI and the corresponding age group
  for (let i = 0; i < arr.length; i++) {
    let height = arr[i].height / 100; // convert height to meters
    let weight = arr[i].weight;
    let age = arr[i].age;
    let bmi = weight / (height * height);
    let ageGroup = Math.floor(age / 5) * 5; // calculate the age group

    // If the age group is not present in the bmiData object, add it with the BMI data
    if (!bmiData[ageGroup]) {
      bmiData[ageGroup] = [];
    }

    // Add the BMI data to the corresponding age group
    bmiData[ageGroup].push(bmi);
  }

  // Calculate the average BMI for each age group
  for (let ageGroup in bmiData) {
    let sum = 0;
    for (let i = 0; i < bmiData[ageGroup].length; i++) {
      sum += bmiData[ageGroup][i];
    }
    bmiData[ageGroup] = sum / bmiData[ageGroup].length;
  }

  // Find the age group with the highest average BMI
  let maxBmi = -Infinity;
  let maxAgeGroup = "";
  for (let ageGroup in bmiData) {
    if (bmiData[ageGroup] > maxBmi) {
      maxBmi = bmiData[ageGroup];
      maxAgeGroup = ageGroup;
    }
  }

  // Return the age group with the highest average BMI and the average BMI
  return {
    ageGroup: maxAgeGroup + "-" + (Number(maxAgeGroup) + 4.9).toFixed(1),
    averageBmi: maxBmi.toFixed(2),
  };
}

console.log(
  highestAverageBMI([
    { height: 175, weight: 50, age: 21 },
    { height: 170, weight: 77, age: 22 },
    { height: 175, weight: 70, age: 24 },
    { height: 175, weight: 75, age: 26 },
    { height: 175, weight: 50, age: 29 },
    { height: 170, weight: 77, age: 34 },
  ])
); // Output: { ageGroup: '30-34.9', averageBmi: '26.64' }

console.log(
  highestAverageBMI([
    { height: 175, weight: 50, age: 24.9 },
    { height: 170, weight: 80, age: 25 },
    { height: 170, weight: 90, age: 29.9 },
    { height: 175, weight: 90, age: 32 },
    { height: 175, weight: 50, age: 39 },
    { height: 170, weight: 77, age: 44 },
  ])
); // Output: { ageGroup: '25-29.9', averageBmi: '29.41' }