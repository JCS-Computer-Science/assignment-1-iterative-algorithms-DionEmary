function bubbleSort(array) {    
    let swapped = false;
     
    for(let i = 0; i < array.length; i++){
       
      swapped = false;
      // Sets swapped to false so if none of the array swapped it returns the array
       
      for(let x = 0; x < array.length; x++){
          if(array[x] > array[x+1]){
            let temp = array[x]
            array[x] = array[x+1];
            array[x+1] = temp;
            swapped = true;
            // IF the item could be swapped then it does and sets swapped to true so that it will do another loop
          }
      }
       
      if(!swapped){
        return array;
      }
      // Returns the array after no swaps are made durring a loop
    }
    return array;
}

module.exports = bubbleSort;
