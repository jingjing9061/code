
let firstHalf= [1,3]
let secondHalf=[6,8,...firstHalf]
console.log(secondHalf) //[ 6, 8, 1, 3 ]



/*
 *用于合并对象
 */
const obj1={name:'zz',age:18}
const obj2 ={...obj1,class:'二班'}
console.log(obj2) //{ name: 'zz', age: 18, class: '二班' }


/*
* 剩余参数 ... 可以替代arguments
* 剩余参数以数组的形式保存下来，对象解构中也能应用到
 */

function converCurrency (rate,...amounts1){
  return amounts1.map(item=>item*rate)
}
console.log(converCurrency(0.8,10,20,30))//[ 8, 16, 24 ]

function add(...values){
	// let sum =0
	// for(var i of values){
	// 	sum += i
	// }
	// return sum 
	return values.reduce((acc,curr)=>acc+curr,0)
}
console.log(add(2,3,4)) //9











