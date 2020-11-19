
/*
es5实现一下继承
*/

function Parent() {
  this.name = "大人"
  this.hairColor = "黑色"
}

function Child() {
  Parent.call(this)
  this.name = "小孩"
}

Child.prototype = Object.create(Parent.prototype)
//将丢失的构造函数给添加回来
Child.prototype.constructor = Child

let c1 = new Child()
console.log(c1.name, c1.hairColor) //小孩，黑色
console.log(Object.getPrototypeOf(c1))
console.log(c1.constructor) //Child构造函数

let p1 = new Parent()
console.log(p1.name, p1.hairColor) //大人，黑色
console.log(Object.getPrototypeOf(p1))
console.log(p1.constructor) //Parent构造函数



/*
es6
*/
class Parent1 {
  constructor() {
    this.name = "大人"
    this.hairColor = "黑色"
  }
}

class Child1 extends Parent1 {
  constructor() {
    super()  //调用父级的方法和属性
    this.name = "小孩"
  }
}

let c = new Child1()
console.log(c.name, c.hairColor) //小孩 黑色

let p = new Parent1()
console.log(p.name, p.hairColor) //大人 黑色






