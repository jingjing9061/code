


//休眠函数1
function sleep(time){
	return new Promise(resolve=>{
		setTimeout(resolve,time)
	})
}
sleep(1000).then(()=>{
	console.log('1s后执行')
})


//休眠函数2
async function foo() {
	await sleep(1000)
	console.log('async 1s后执行')
}
foo()


//休眠函数 3
function * generatorSleep(time){
	yield new Promise(resolve=>{
		setTimeout(resolve,time)
	})
}
generatorSleep(1000).next().value.then(()=>{
	console.log('generator 延时方法')
})


//休眠函数4
function sleepCb(cb,time){
	if (typeof cb !== 'function') return
	setTimeout(cb,time)
}

function foo2(){
	console.log('callback 延时方法')
}
sleepCb(foo2,1000)