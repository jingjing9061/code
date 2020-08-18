



/*


var proxy = new Proxy(target, handler);

Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，
因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示
由它来“代理”某些操作，可以译为“代理器”。


 Proxy 的代理是针对整个对象的，而不是对象的某个属性，
 因此不同于 Object.defineProperty 的必须遍历对象每个属性，
 Proxy 只需要做一层代理就可以监听同级结构下的所有属性变化，当然对于深层结构，递归还是需要进行的。
 此外Proxy支持代理数组的变化。


参数
第一个参数是所要代理的目标对象
第二个参数是一个配置对象



 */

function render() {
  console.log('模拟视图的更新')
}
let obj = {
  name: 'zjj',
  age: { age: 100 },
  arr: [1, 2, 3]
}
let handler = {
  get(target, key) {
    // 如果取的值是对象就在对这个对象进行数据劫持
    if (typeof target[key] == 'object' && target[key] !== null) {
      return new Proxy(target[key], handler)
    }
    return Reflect.get(target, key)
  },
  set(target, key, value) {
    if (key === 'length') return true
    render()
    return Reflect.set(target, key, value)
  }
}

let proxy = new Proxy(obj, handler)
proxy.age.name = 'zhuzhu' // 支持新增属性
console.log(proxy.age.name) // 模拟视图的更新 
proxy.arr[0] = 'zhuzhu' //支持数组的内容发生变化
console.log(proxy.arr) // 模拟视图的更新 ['zhuzhu', 2, 3 ]
proxy.arr.length-- // 无效








/*
 #Reflect
`Reflect`对象与`Proxy`对象一样，也是 ES6 为了操作对象而提供的新 API
（1） 将`Object`对象的一些明显属于语言内部的方法（比如`Object.defineProperty`），
 放到`Reflect`对象上。现阶段，某些方法同时在`Object`和`Reflect`对象上部署，
 未来的新方法将只部署在`Reflect`对象上。也就是说，从`Reflect`对象上可以拿到语言内部的方法。
（4）`Reflect`对象的方法与`Proxy`对象的方法一一对应，只要是`Proxy`对象的方法，
 就能在`Reflect`对象上找到对应的方法。这就让`Proxy`对象可以方便地调用对应的`Reflect`方法，完成默认行为，作为修改行为的基础。
 也就是说，不管`Proxy`怎么修改默认行为，你总可以在`Reflect`上获取默认行为。

 */

 


