function insertionSort(array) {
for(let i = 1; i < array.length; i++){
	let current = array[i]
	let previous = i-1
	while(previous > -1 && current < array[previous]){
		array[previous+1] = array[previous]
		previous -= 1;
	}
	array[previous+1] = current;
}
	return array;
}

module.exports = insertionSort;
