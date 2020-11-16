
/* 
 * 数据结构转换
 *  map-set
 *  */
let map = new Map().set('foo',true).set('bar',false);
let arr = Array.from(map)
let set = new Set(map.values())
console.log(set)//Set { true, false }

let obj = {foo:true, bar:false}
let newMap = new Map(Object.entries(obj))
console.log(newMap)//Map { 'foo' => true, 'bar' => false }


//将一个键值对列表转换为对象
let map2 = new Map().set('foo',true).set('bar',false);
let obj2 = Array.from(map2).reduce((acc, [key, val]) => {
    return Object.assign(acc, {
      [key]: val
    });
}, {});
console.log(obj2)//[ 'foo', true, bar: false ]

// 还可以这样写
// const map3 = new Map().set("foo", true).set("bar", false);
// let obj3 = Object.fromEntries(map3);
// console.log(obj3) //{foo: true, bar: false}
