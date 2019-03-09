
const util = require('./util')
class SelectionSort{
	sort(arr){
		for(let i = 0; i < arr.length - 1; i++){

			let min = i;
			for(let j = i+1; j <arr.length; j++){
				if(arr[j] < arr[min]){
					min = j;
				}
			}

			util.swap(arr, min , i);
		}
	}
}
module.exports= SelectionSort;
/*const sortUtil =  new SelectionSort();
let arr = [45,23,6,23,1]
sortUtil.sort(arr);

console.log(arr);*/
