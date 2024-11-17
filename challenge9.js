//Replace first and last numbers of an array
arr = [10, 53, 60, 42, 11, 49, 88, 99, 36, 17]

temp = arr[0]
arr[0] = arr[9]
arr[9] = temp

console.log(arr)