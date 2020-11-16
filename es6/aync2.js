/*async处理多个异步函数*/

async function asyncFunc(){
	const [result1,result2] = await Promise.all([
		asyncFunc1(),asyncFunc2()
	])
	console.log(result1,result2)	
}

asyncFunc()

function asyncFunc1(){
	return new Promise(function (resolve, reject) {
         resolve(1);
    })

 }
function asyncFunc2(){
	return new Promise(function (resolve, reject){
		 resolve(2);
	})

 }