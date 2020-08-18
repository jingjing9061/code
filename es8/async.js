
function log(){
     console.log.apply(console,arguments);
}

async function firstAsync(){
	return 27
}
/*   return返回的是promise对象 如果return 返回的不是primose对象 它可以自动转化为promise对象
 *   return 27等同于 return Promise.reslove(27) 
 *   可以在后边调用.then()
 *
 */

// log(firstAsync())//Promise { 27 }
// log(firstAsync() instanceof Promise) //true
firstAsync().then(val=>{
	log(val) //27
})

/*
*
 */

async function firstAsync1(){
	//声明1
	let promise = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve('now it is done')
		},1000)
	})
	//执行1
	// promise.then(val=>{
	// 	log(promise)
	// })
	log(await promise) //await promise 类型表达式 表达式的结果就是resolve返回的结果
	log(await 30) //await 后边若跟的不是promise 对象它会帮你自动转化为promise对象
	log(2)
	return 3 //等于 return Promise.resolve(3)
}

firstAsync1().then(val=>{
	log(val)   // now it is done 30 2 3 
})


/*
* await 必须配合async使用
*/













