function bubbleSort(array){
	var ordered = false;
	var hasGreater = false;
	for (var i = 0; !ordered; ++i){
		if(i == array.length - 1){
			i = -1;
			if(hasGreater == false){
				ordered = true;
			}
			else{
				hasGreater = false;
				ordered = false;
			}
		}
		else if(array[i] > array[i + 1]){
			hasGreater = true;
			[array[i], array[i + 1]] = [array[i + 1], array[i]];
		}
	}
	return array;
}

var array1 = [3, 2, 8, 7, 5];
var array2 = [5, 4, 3, 2, 1];
console.log(bubbleSort(array1));
console.log(bubbleSort(array2));