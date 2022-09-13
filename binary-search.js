function binarySearch(array, searchTerm) {
let start = 0;
let end = array.length - 1;
	while(start <= end){
		let middle = Math.floor((start + end) / 2);

		if(array[middle] == searchTerm){
			return middle;
			// Search Term was found and returned
		}else if(array[middle] > searchTerm){
			end = middle - 1
			// Sorts to the left side of the array if search term is smaller than the middle term
		}else if(array[middle] < searchTerm){
			start = middle + 1
			// Sorts to the right side of the array if search term is larger than the middle term
		}
	}

	return null;
}

module.exports = binarySearch;
