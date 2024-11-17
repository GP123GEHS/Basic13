//Make all odd numbers 0


arr = [10, 53, 60, 42, 11, 49, 88, 99, 36, 17]



//Step 1: Evaluate each item in the array
//Step 2: After evaluating each item, check which numbers are odd
//Step 3: Construct the code to make those odd numbers set to 0

for(let i = 0; i<10; i=i+1) {
   if (arr[i] %2 ===1){
    arr[i] = 0
   }
}
console.log(arr)