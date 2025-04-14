// Function Declaration
function calculateRectangleArea1(width, height) {
	return width * height
}

// Function Expression
const calculateRectangleArea2 = function (width, height) {
	return width * height
}

// Arrow Function
const calculateRectangleArea3 = (width, height) => width * height


console.log('Function Declaration result:', calculateRectangleArea1(5, 10))
console.log('Function Expression result:', calculateRectangleArea2(5, 10))
console.log('Arrow Function result:', calculateRectangleArea3(5, 10))
