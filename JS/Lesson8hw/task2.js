const originalArray = [1, 2, 3, 4, 5]
const mutatedArray = originalArray.map((value, index) => value * index)

console.log('Початковий масив:', originalArray)
console.log('Мутований масив (елемент * індекс):', mutatedArray)