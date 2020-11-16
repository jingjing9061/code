
/*

 异步迭代器
 For await of
 异步操作集合如何遍历


 */


function Gen(time){
	return new Promise((resolve,reject)=>{
		setTimeout(function(){
			resolve(time)
		},time)
	})
}


/*
 for of 是当作同步任务去执行
 并不会等待前面异步执行结束完执行下一个
 是不能拿到正确的结果
 */

//  function test(){
// 	let arr = [Gen(2000),Gen(100),Gen(3000)]
// 	for(let item of arr){
// 		console.log(Date.now(),item.then(console.log))
// 	}
// }

/*改造一下*/
// async function test(){
// 	let arr = [Gen(2000),Gen(100),Gen(3000)]
// 	for(let item of arr){
// 		console.log(Date.now(), await item.then(console.log))
// 	}
// }



/*es9 for await of 用法*/
async function test(){
	let arr = [Gen(2000),Gen(100),Gen(3000)]
	for await (let item of arr){
		console.log(Date.now(),item)  //1596248509825 2000  1596248509832 100  1596248510829 3000
	}
}

test()






















