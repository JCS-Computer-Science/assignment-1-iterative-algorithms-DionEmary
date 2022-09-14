function selectionSort(array) {
	for(let i = 0; i < array.length; i++){
		// Loops one time per array spot to fully sort it
		let min = i
		for(let temp = i+1; temp < array.length; temp++){
			// loops enough times to find the current lowest
			if(array[temp] < array[min]) {
				min = temp;
			}
		}
		if(min != i) {
			// If there is nothing lower than min then it swaps the first item and the min
			let sorted = array[i];
			array[i] = array[min];
			array[min] = sorted;
		}
	}
	return array;
}

module.exports = selectionSort;
