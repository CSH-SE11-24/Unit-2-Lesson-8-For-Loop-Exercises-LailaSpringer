// Task 1: Print Numbers
// Write a JavaScript program that uses a for loop to print all numbers from 1 to 10 to the console.
for( let input = 1; input <=10;input++){
  console.log(input)
}


// Task 2: Odd Numbers
// Write a JavaScript program that uses a for loop to print all odd numbers from 15 to 40 to the console.
for(let i = 15 ; i < 40 ;i +=2){
  console.log(i)
}

// Task 3: Sum of Numbers
// Write a JavaScript program that calculates and prints the sum of all numbers from 10 to 20 using a for loop.
let sum = 0
for(let i = 10 ; i < 20 ;  i++){
sum=sum + i 
}
console.log(sum + i)
// Task 4: Array Iteration
// Create an array of numbers (e.g., [1, 2, 3, 4, 5]) and write a JavaScript program that uses a for loop to iterate through the array and print each element to the console.
let nums = [3,6,9,12,15]
for( let i = 0 ;i < 5; i++){
  console.log(nums[i])
}


// Task 5: Array Sum
// Create an array of numbers and write a JavaScript program that calculates and prints the sum of all the elements in the array using a for loop.
let numbers =[2,4,6,8,10]
let sum2 = 0;
for(let i = 0 ; i  < numbers.length ;  i++){
  sum2 += numbers[i];
}
console.log("sum is"+ sum2)


// Stretch: Element counter
// Create an array of numbers
// Prompt the user for a number and write a for loop that tracks how many times that number is in the array
// e.g. 5 for [5, 1, 2, 5] --> 2





