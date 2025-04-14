function checkOrder(available, ordered) {
	if (ordered === 0) {
		return 'Your order is empty'
	} else if (available < ordered) {
		return "Your order is too large, we don't have enough goods."
	} else {
		return 'Your order is accepted'
	}
}


console.log(checkOrder(100, 50)) 
console.log(checkOrder(30, 50)) 
console.log(checkOrder(100, 0))
