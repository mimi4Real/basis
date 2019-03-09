const SelectionSort = require('./selection');
const InsertSort = require('./insert');
const BubbleSort = require('./bubble');

const random = function (num) {
	num = 3*num;
	return ~~(Math.random(num) * num);
}

const createRandomArr = function (len) {
	let arr = [];
	for(var i = 0; i< len; i++){
		arr.push(random(len));
	}
	return arr;
}


const selectionUtil = new SelectionSort();
const bubbleUtil = new BubbleSort();
const insertUtil = new InsertSort();

let arr = createRandomArr(30000);
// console.log(arr)

let arr1 = [].slice.call(arr);
console.log('----数组长度10000,选择排序start-----')
const sTime = new Date().getTime();
selectionUtil.sort(arr1);
// console.log(arr1)
console.log('----选择排序end， 耗时：' + (new Date().getTime() - sTime) + 'ms-----' )
console.log()


console.log('----数组长度10000,冒泡排序start-----')
const sTime1 = new Date().getTime();
bubbleUtil.sort([].slice.call(arr));
console.log('----冒泡排序end， 耗时：' + (new Date().getTime() - sTime1) + 'ms-----' )


console.log('----数组长度10000,插入排序start-----')
const sTime2 = new Date().getTime();
insertUtil.sort([].slice.call(arr));
console.log('----插入排序end， 耗时：' + (new Date().getTime() - sTime2) + 'ms-----' )


console.log('----数组长度10000,二分插入排序start-----')
const sTime3 = new Date().getTime();
insertUtil.binarySort([].slice.call(arr));
console.log('----二分插入排序end， 耗时：' + (new Date().getTime() - sTime3) + 'ms-----' )
