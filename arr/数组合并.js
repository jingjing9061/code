
/* 
 * 1.push+...展开赋值
*/

let a =[1,2,3]
let b = [4,5,6]

a.push(...b)
console.log(a)//[ 1, 2, 3, 4, 5, 6 ]


let c = [
{name: '123', age: '123'},
{name: '456', age: '456'}];

let d = [
{name: '789', age: '789'},
{name: '789', age: '789'}];


c.push(...d)
console.log(c)



/*
*2.forEach +push
 */


let a1 = [1, 2, 3];
let b1 = [4, 5, 6];

a1.forEach((item) => {
b1.push(item);
});
console.log(b1);//[ 4, 5, 6, 1, 2, 3 ]


/*
*3.新数组+展开赋值(...)
 */



let a2 = [1, 2, 3];
let b2 = [4, 5, 6];

let ab = [...a2,...b2]
console.log(ab)//[ 1, 2, 3, 4, 5, 6 ]


let c2 = [
{name: '123', age: '123'},
{name: '456', age: '456'}];

let d2 = [
{name: '789', age: '789'},
{name: '789', age: '789'}];

let cd =[...c2,...d2]
console.log(cd)




/*
 4.concat 
 */

let a3 = [1, 2, 3];
let b3 = [4, 5, 6];
let ab3 = a3.concat(b3)
console.log(ab3)



