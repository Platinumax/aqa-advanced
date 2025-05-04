const numbersForSum = [10, 20, 30, 40, 50]
const sum = numbersForSum.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log('Масив чисел:', numbersForSum)
console.log('Сума всіх елементів:', sum)