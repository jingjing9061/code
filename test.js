// 用正则表达式把目标替换成数组中的值

let str='不含税成交价*{0}+{1}'
let reg=/{\d}/g
let arr=[4,5]

var i =0
let result=str.replace(reg,()=>{
	i++
	return arr[i-1]
})
// console.log(result)


let tempstr=''
for(let i=0;i<arr.length;i++){
    tempstr = str.replace(reg, arr[i]);
}
// console.log(tempstr)


 
// 字符串中占位符替换成对象中的key值
let usrIfo = {
  name: '呱呱',
  phone: 128888888888
}
let strTep = `你好！我叫{{name}},我的电话是{{phone}}!`
for (let key in usrIfo) {
	strTep = strTep.replace(new RegExp('\\{\\{' + key + '\\}\\}', 'g'), usrIfo[key])
}
// console.log(strTep)



// 需求是将b根据a的值替换对象中的key值
let a = ["code","name","date","font"];
let b = [{1:2,2:3,3:4},{1:2,2:3,3:4},{1:2,2:3,3:4}];
let c = b.map((item,index)=>{
	let obj={}
	for(let i in item){
		obj[a[i]] = item[i]
	}
	return obj
})
// console.log(c)//[{'code':2,'name':3,'date':4},{'code':2,'name':3,'date':4},{'code':2,'name':3,'date':4}];




//数据在各种数据结构之间的转换，比如 Map 到数组、Map 到 Set、对象到 Map 等等。

let map = new Map().set('foo',true).set('bar',false)
let arr1 =  Array.from(map)
// console.log(arr1) //[ [ 'foo', true ], [ 'bar', false ] ]

let set = new Set(map.values())
// console.log(set)//Set { true, false }

let obj = { foo: true, bar: false };
let newMap = new Map(Object.entries(obj));
// console.log(newMap)//Map { 'foo' => true, 'bar' => false }



//将一个键值对列表转换为对象
let map1 = new Map().set("foo", true).set("bar", false);
let obj2 = Array.from(map1).reduce((acc, [key, val]) => {
  return Object.assign(acc, {
    [key]: val
  });
}, {});
// console.log(obj2)//{ foo: true, bar: false }



