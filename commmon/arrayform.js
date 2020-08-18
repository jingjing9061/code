function log(){
     console.log.apply(console,arguments);//在这里不用call（）是因为传入的参数不确定
}
/*
*Array.from(arrayLike[, mapFn[, thisArg]])
*从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例
*语法
*想要转换成数组的伪数组对象或可迭代对象。
*mapFn 可选  指定了该参数，新数组中的每个元素会执行该回调函数
*thisArg 可选  执行回调函数 mapFn 时 this 对象
* 返回 一个新的数组实例
*/
const array=[1, 2, 3]
log(Array.from(array, x => x + x));//[ 2, 4, 6 ]

const str="food"
log(Array.from(str))//[ 'f', 'o', 'o', 'd' ]

const set = new Set(['foo', 'bar', 'baz', 'foo']);
log(Array.from(set))//[ 'foo', 'bar', 'baz' ]

