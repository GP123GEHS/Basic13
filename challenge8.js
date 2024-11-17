//Calculate how many numbers in an array are greater than a specific number

arr = [10, 53, 60, 42, 11, 49, 88, 99, 36, 17]
y = 85
count = 0
for (let i = 0; i < 10; i = i + 1) {
    if (arr[i] > y) {
        count= count+1
    }
}
console.log(count)
