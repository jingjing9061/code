
//利用filter 去重
var arr = [1, 2, 2, 3, 4, 5, 5, 6, 7, 7,6,3,4,56,2,{},{}];
var arr2 = arr.filter((x, index,self)=>self.indexOf(x)===index)  
console.log(arr2); //[ 1, 2, 3, 4, 5, 6, 7, 56, {}, {} ]

//去重复2
let res = [...new Set(arr)]
console.log(res)//[ 1, 2, 3, 4, 5, 6, 7, 56, {}, {} ]

//去重复3
let res1 = arr.reduce((pre, cur) => {
  return pre.includes(cur) ? pre : [...pre, cur]
}, [])
console.log(res1)//[ 1, 2, 3, 4, 5, 6, 7, 56, {}, {} ]

//使用以上方法 不能去掉引用数据类型。




/*
  去除引用类型的重复值
*/
let obj = {}
let res2 = arr.filter(item => {
  if (obj.hasOwnProperty(typeof item + item)) {
    return false
  } else {
    obj[typeof item + item] = true
    return true
  }
})
console.log(res2)//[ 1, 2, 3, 4, 5, 6, 7, 56, {} ]









//filter 过滤不合格的元素
var arr = ['10','12','23','44','42']
var newArr = arr.filter(item => item.indexOf('2')<0) 
console.log(newArr)//[ '10', '44' ]
