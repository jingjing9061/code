
function log(){
     console.log.apply(console,arguments);//在这里不用call（）是因为传入的参数不确定
}

/*es6允许大括号里面，直接写入变量和函数，作为对象的属性和方法*/
const foo = 'bar'
const baz ={foo}
log(baz)//{ foo: 'bar' }





/*方法简写*/
function f(x,y){
	return {x,y}
}
/*等同于*/
function f(x,y){
	return{x:x,y:y}
}
f(1,2)




const o = {
	method(){
		return 'hello!';
	}
}

/*等同于*/
const o1 = {
	method: function(){
		return 'hello!'
	}
}


/*属性名表达式*/
let obj ={}
obj.foo = true
obj['a'+'bc'] = 123
log(obj)//{ foo: true, abc: 123 }


/*用表达式放在方括号内  作为对象的属性名 */
let propkey ='foo'
let obj1 ={
	[propkey]: true,
	['a'+'bc']:123
}
log(obj1)//{ foo: true, abc: 123 }



/*表达式还可以作为方法名*/
let obj2 ={
	['h'+'ello'](){
		return 'hi'
	}
}

log(obj2.hello()) //hi




/*属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]，这一点要特别小心*/
const keyA = {a: 1};
const keyB = {b: 2};

const myObject = {
  [keyA]: 'valueA',
  [keyB]: 'valueB'
};

log(myObject) // Object {[object Object]: "valueB"





/*方法的 name 属性*/
/*函数的name属性，返回函数名。对象方法也是函数，因此也有name属性。*/
const person = {
	sayName(){
		log('hello!')
	}
}
log(person.sayName.name) //sayName




/*如果对象的方法使用了取值函数（getter）和存值函数（setter），则name属性不是在该方法上面，而是该方法的属性的描述对象的get和set属性上面，返回值是方法名前加上get和set。*/
const obj3 ={
	get foo(){},
	set foo(x){}
};
//log(obj3.foo.name)//TypeError: Cannot read property 'name' of undefined
const descriptor = Object.getOwnPropertyDescriptor(obj3,'foo')
log(descriptor.get.name)//get foo
log(descriptor.set.name)//set foo




























