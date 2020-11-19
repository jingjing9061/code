/*
  const 和 Object.freeze的区别
 */

let name ='zz'
function getName(){
	name = 'cc'
	return name
}
console.log(getName())//cc

//上面getName修改了name的值  我们要如何防止全局变量被更改？

/*
  使用const?
*/

// const name1 = 'aa'
// function getName1(){
// 	name1 = 'dd'
// 	return name1
// }
// console.log(getName1())//试图更改使用const定义的变量的值，会导致此错误：Assignment to constant variable.


/*const 能防止变量值被更改吗？，看下面*/
const arr =['aa','bb','cc']
arr.push('cc')
console.log(arr)//[ 'aa', 'bb', 'cc', 'cc' ]  即使使用const，也可以改变数组或对象的值。


/*
 *在数组和对象的情况下，我们不能改变引用，但可以改变值。如何防止数组和对象的值被改变？
 * 这是Object.freeze()起作用的地方，Object.freeze 忽略对象和数组的值更改。
 * 
 */
let constants = Object.freeze(
	{name:'123'})
constants.name = '456'
console.log(constants.name)//123


//Object.freeze() 可以防止更改对象的值，但不能阻止引用的更改：
let constants1 = Object.freeze(
	{name:'123'})
constants1={
	name:'678'
}
console.log(constants1.name)//678



/*
const不允许改变对象或数组的引用，但可以改变其值。
Object.freeze() 忽略对象或数组的值更改
 */

//把它们组合在一起将防止更改对象或数组的引用和值

// const constants2 = Object.freeze({
//   name : "aaa"
// });

// constants2.name = "bbb"; // 这被忽略
// constants2 = { 
//   name : "Unknown App" 
// }; // 这将抛出TypeError





