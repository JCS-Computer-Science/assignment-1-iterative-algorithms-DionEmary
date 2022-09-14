function selectionSort(array) {
	for(let i = 0; i < array.length; i++){
		let min = i
		for(let temp = i+1; temp < array.length; temp++){
			if(array[temp] < array[min]) {
				min = temp;
			}
		}
		if(min != i) {
			let sorted = array[i];
			array[i] = array[min];
			array[min] = sorted;
		}
	}
	return array;
}

module.exports = selectionSort;
