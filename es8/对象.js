
function log(){
     console.log.apply(console,arguments);
}

/*
    
     定义是Object.values(obj)，obj 参数是对目标对象的操作，它可以是一个对象或者数组。
     Object.entries方法返回一个给定对象可枚举属性值的数组[key, value]，与Object.values类似。

*/



let grade ={
	'lilei':98,
	'zhuzhu':78
}

log(Object.keys(grade))//["lilei", "zhuzhu"]

log(Object.values(grade)) //[ 98, 78 ]

let entries =Object.entries(grade)
log(entries)//[ [ 'lilei', 98 ], [ 'zhuzhu', 78 ] ]

// log(Object.fromEntries(entries))  //实现了与 Object.entries 相反的操作。这使得根据对象的 entries 很容易得到 object


/*Object.entries方法的另一个用处是，将对象转为真正的Map结构*/
const map = new Map(Object.entries(grade))
log(map)//Map { 'lilei' => 98, 'zhuzhu' => 78 }



/*
* es8 如何获取Object 数据的描述符
* 
*/

const data= {
	a:2,
	c:4,
	d:5,
}

/*
参数
*/

Object.defineProperty(data,'d',{
	enumerable:false
})

log(Object.keys(data))//[ 'a', 'c' ]


/*
 getOwnPropertyDescriptors
 返回给定的属性的属性描述符
 */



// log(Object.getOwnPropertyDescriptors(data)) //所有的
/*
{ a: { value: 2, writable: true, enumerable: true, configurable: true },
  c: { value: 4, writable: true, enumerable: true, configurable: true },
  d: 
   { value: 5,
     writable: true,
     enumerable: false,
     configurable: true } }
 */

log(Object.getOwnPropertyDescriptors(data,'d'))

data.d = 78








