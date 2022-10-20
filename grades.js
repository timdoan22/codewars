// It's the academic year's end, fateful moment of your school report. The 
// averages must be calculated. All the students come to you and entreat you 
// to calculate their average for them. Easy ! You just need to write a script.

// Parameters: accepts an array of integers as input
// Results: it should return the average of all the numbers in the array passed in
// Example:
// Test.assertEquals(getAverage([2,2,2,2]),2);
// Test.assertEquals(getAverage([1,2,3,4,5,]),3);
// Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);
// Pseudocode:
// 1) use the reduce method to loop through the array of marks and add up the sum
// 2) divide the return answer from the reduce method by the length of the array
// 3) return the array using Math.floor method to round down the answer to the
// nearest integer


function getAverage(marks){
    let sumGrades = marks.reduce((acc, mark) => 
        acc + mark) / marks.length
    
    return Math.floor(sumGrades)
  }

  console.log(getAverage([1,5,87,45,8,8]), '25')
  console.log(getAverage([1,2,3,4,5,]), '3')
  console.log(getAverage([1,1,1,1,1,1,1,2]), '1')