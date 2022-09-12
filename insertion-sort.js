function insertionSort(array) {
    let arrLength = array.length;
        for (let i = 1; i < arrLength; i++) {
            let current = array[i];
            let x = i-1; 
            while ((x > -1) && (current < array[x])) {
                array[x+1] = array[x];
                x--;
            }
            array[x+1] = current;
        }
	return array;
}

module.exports = insertionSort;
