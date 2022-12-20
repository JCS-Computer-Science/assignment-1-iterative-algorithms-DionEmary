function linearSearch(array, searchTerm) {
    let count = 0;
	for(let i = 0; i < array.length; i++){
        count++;
        if(array[i] == searchTerm){
            console.log(count);
            return i
        }
    }
    console.log(count);
	return null;
}

module.exports = linearSearch;
