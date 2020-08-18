/*
 es10新增的知识点

 JSON 修补 0xD800-0xDFFF 无法因为编码*utf8导致显示问题
 Array    arr.flat(depth) depth代表递归depth深度 递归几次
 Object Function try.catch BigInt
 */


console.log(JSON.stringify('\u{D800}'))//"\ud800"


let arr = [1,[2,3],[4,5,[6,7]]]
//扁平化输出     (内部：按照可制指定的深度递归遍历数组  )
// console.log(arr.flat(2))//[1, 2, 3, 4, 5, 6, 7]


let arr2 = [1,2,3]
// console.log(arr2.map(item => item*2))//[ 2, 4, 6 ]
// console.log(arr2.map(item => [item*2]))//[ [ 2 ], [ 4 ], [ 6 ] ]
// console.log(arr2.map(item => [item*2]).flat())// 扁平化为[2, 4, 6] 



//arr.flatMap = map+flat
// console.log(arr2.flatMap(item=>[item*2]))//[ 2, 4, 6 ]


/*去空格*/
let str = '   foo  '
// console.log(str.replace(/^\s+/g,'')) 

console.log(str.trimStart()) //去除首部的空格 trimLeft()
console.log(str.trimEnd()) //去除尾部的空格 trimRight()

console.log(str.trim())//去除首尾




