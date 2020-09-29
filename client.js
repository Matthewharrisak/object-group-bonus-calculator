const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

function employeeInfo (myArray) {
  for (let index = 0; index < myArray.length; index++) {
   return employeeRating(myArray[index])
    console.log('we are in the myArray loop' , myArray[index]);
    
    
  }
}
// this function takes an object and returns value
function employeeRating (employee){
  if (employee.reviewRating <= 2){
    return 0;
  }
  else if (employee.reviewRating == 3) {
    return .04;
  }
  else if (employee.reviewRating == 4){
    return .06;
  }
  else if (employee.reviewRating == 5){
    return .1;
  }
  }
// this function takes object and returns value based on employeeNumber
function employeeTime(employee) {
  if (employee.employeeNumber.length == 4){
    return .05;
  }
  else return 0;
}  
function maxSalery(employee){
  if (Number(employee.annualSalary) > 65000) {
    return .01
  } 
  return 0;
}