async function  async1 ()  {   
	console.log('async1 start');    
	await  async2();    
	console.log('async1 end')
}

async function  async2 ()  {
	console.log('async2')
}

console.log('script start');

setTimeout(
	function ()  {
	 console.log('setTimeout')
},  0);

async1();

new  Promise(function (resolve) {    
	console.log('promise1');    
	resolve()
}).then(function ()  {   
	console.log('promise2')}
);

console.log('script end')

/*
js编译完成，进入浏览器执行环境开始执行。
遇到async1，async2函数分配内存
打印script start
遇到setTimeout，计时完成放到消息队列中，等待主线程空闲时执行。

调用async1函数，打印async1 start 遇到awiait，同步代码，执行后面的async2函数，
打印async2(async await是generator的语法糖。可以用generator来实现async await的效果。generator也是微任务队列) 将后面的片段放到微任务队列中。

创建Promise实例对象，打印promise1,  将then函数扔到微任务队列中。
打印script end
主线程空闲， 事件触发线程拿到微任务队列中的第一个任务，放到主线程中的调用栈中执行，打印async1 end
然后执行微任务队列中的第二个微任务，打印promise2，微任务队列清空，去宏任务队列中拿到第一个任务，放到主线程中执行，打印 setTimeout

 */









