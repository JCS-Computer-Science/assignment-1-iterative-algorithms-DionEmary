function binarySearch(array, searchTerm) {
	let middle = Math.floor(array.length / 2);

	if (array.length == 1 && array[0] != searchTerm) {
		return null;
	  }

	  if (searchTerm == array[middle]) {
		return middle;
	  } else if (searchTerm < array[middle]) {
		return binarySearch(array.slice(0, middle), searchTerm);
	  } else if (searchTerm > array[middle]) {
		return middle + binarySearch(array.slice(middle), searchTerm);
	  }
}

module.exports = binarySearch;