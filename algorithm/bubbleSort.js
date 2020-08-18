/*
	冒泡排序

	解析：1.比较相邻的两个元素，如果前一个比后一个大，则交换位置。

	　　　2.第一轮的时候最后一个元素应该是最大的一个。

	　　　3.按照步骤一的方法进行相邻两个元素的比较，这个时候由于最后一个元素已经是最大的了，所以最后一个元素不用比较。

 */

function sort(elements){
	let len = elements.length
	for( let i = 0; i<len; i++ ){
		for(let j =0; j<len-1-i;j++){
			if (arr[j]>arr[j+1]) {//相邻元素两两对比
				let temp = arr[j+1] //元素交换
				arr[j+1] = arr[j]
				arr[j]=temp
			}
		}
	}
	return arr
}
let arr = [3,1,4,5,7,2,9,10,8]
console.log(sort(arr))




/*
 进化版冒泡排序
*/
function bubbleSort(arr){
	// console.time('改进后冒泡排序耗时');
	let len = arr.length //
	while(len > 0){
		let pos = 0;
		for(let i = 0; i < len; i++ ){
			if (arr[i] > arr[i+1]) {
				pos = i //记录交换的位置
				let temp = arr[i]
				arr[i] = arr[i+1]
				arr[i+1]= temp
			}
			len= pos////为下一趟排序作准备
		}
	}
 	// console.timeEnd('改进后冒泡排序耗时')
 	return arr
}
console.log(bubbleSort(arr))

















