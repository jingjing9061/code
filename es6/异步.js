/*场景一：先调用getData1，再调用getData2，再调用getData3  ...*/
function getData1(){
	return  new Promise(function(resolve,reject){
		setTimeout(function () {
			resolve('getData1')
		}, 500)
	})
}

function getData2(){
	return new Promise(function(resolve,reject){
		setTimeout(function () {
			resolve('getData2')
		}, 500)
	})
}

function getData3(){
	return new Promise(function(resolve,reject){
		setTimeout(function () {
			resolve('getData3')
		}, 500)
	})
}
/*～～～～～～～～～～～～～～～～～～一Promise～～～～～～～～～～～～～～～～～～～～～～～～～～～～*/

getData1().then(res=>{
	console.log(res)
	return getData2(res)
}).then((res)=>{
	console.log(res)
	return getData3(res)
}).then(res=>{
	console.log(res)
})

/*～～～～～～～～～～～～～～～～～～～二Promise.all～～～～～～～～～～～～～～～～～～～～～～～～～～～*/

/*getData3的执行依赖getData1和getData2*/
Promise.all([getData1(),getData2()]).then(function (results) {
	console.log(results) // [ 'getData1', 'getData2' ]
	getData3()
})


/*～～～～～～～～～～～～～～～～～～～三async～～～～～～～～～～～～～～～～～～～～～～～～～～*/
// async function asynhander() {
// 	try{
// 		let p1 = await getData1()
// 		let p2 = await getData2()
// 		let p3 = await getData3()
// 		console.log(p1,p2,p3)
// 	}catch(err){
// 		console.log(err)
// 	}
// }
// asynhander()














