
function log(){
     console.log.apply(console,arguments);//在这里不用call（）是因为传入的参数不确定
}

const arr1 = [{name:'zz',like:['a','b']},{name:'sss'}];
/*复制*/
const copy = [...arr1];
log(copy) //[ { name: 'zz', like: [ 'a', 'b' ] }, { name: 'sss' } ]

/*
 *实现只是一个对象的浅拷贝
 *用扩展运算符对数组或者对象进行拷贝时，只能扩展和深拷贝第一层的值，
 *对于第二层极其以后的值，扩展运算符将不能对其进行打散扩展，也不能对其进行深拷贝，
 *即拷贝后和拷贝前第二层中的对象或者数组仍然引用的是同一个地址
 *，其中一方改变，另一方也跟着改变。
 */
arr1[0]['like'][0]='d'
log(arr1)



/*合并*/
const arr2 =[40,50]
const arr3 =[60,70]
const merge=[...arr2,...arr3]
log(merge)//[ 40, 50, 60, 70 ]


/*
*以将一个对象的属性拷贝到另一个对象上
*/
const input = {
  a: 1,
  b: 2,
  c: 1
}
const output = {
  ...input,
  c: 3
}
log(output) // {a: 1, b: 2, c: 3}
























