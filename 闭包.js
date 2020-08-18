
 let outerValue ='sam'
 let later;

 function outerFunction(){
 	let innerValue ='zhuzhu'
 	function innerFunction(){
 		console.log(outerValue === 'sam')//true
 		console.log(innerValue === 'zhuzhu')//true
 	}
 	later = innerFunction;
 }

outerFunction()
later()

