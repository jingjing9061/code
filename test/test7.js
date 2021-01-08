/**
 * 函数-参数
 */

function show(a, b, ...args) {
    console.log(a) //1
    console.log(b) //2
    console.log(args) //[3, 4, 5]
}
console.log(show(1, 2, 3, 4, 5))

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [...arr1, ...arr2]
console.log(arr3) // [1,2,3,4,5,6]

function show2(a, b=5, c=8) {
    console.log(a, b, c) //88 12 8
}
show2(88, 12)