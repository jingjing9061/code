
let arr =[1,2,[3,4]]
//一使用ES6中的Array.prototype.flat方法
// console.log(arr.flat(Infinity))//[ 1, 2, 3, 4 ]

//二使用reduce的方式
function arrFlat(arr){
	return arr.reduce((pre,cur)=>{
		return pre.concat(Array.isArray(cur)?arrFlat(cur):cur)
	},[])
}
console.log(arrFlat(arr))//[ 1, 2, 3, 4 ]

//三 使用递归加循环的方式
function arrFlat2(arr){
	let result = []
	arr.map((item,index)=>{
		if (Array.isArray(item)) {
			result = result.concat(arrFlat2(item))
		}else{
			result.push(item)
		}
	})
	return result
}
console.log(arrFlat2(arr))

/*四
//将数组先变成字符串，再复原 toString()
//这种方法存在缺陷，就是数组中元素都是Number或者String类型的才能展开*/
function arrFlat3(arr){
	return arr.toString().split(',').map(item=>+item)
}
console.log(arrFlat3(arr))


