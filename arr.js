let  arr = [1,3,4,6];
//添加
arr.splice(1,0,2)  //[ 1, 2, 3, 4, 5 ]
// console.log(arr) 
//替换
arr.splice(4,1,5)
// console.log(arr)//[ 1, 2, 3, 4, 5 ]
               



let temparr =[1,2,3,4,5]
//改变位置

sub(2,3)//
function sub(idx,val){
	temparr.splice(idx-1,0,val)
	// console.log(temparr)//[ 1, 3, 2, 3, 4, 5 ]
	temparr.splice(idx+1,1)
	console.log(temparr)//[ 1, 3, 2, 4, 5 ]
}




add(3,4)
function add(idx,val){
	 temparr.splice(idx+2,0,val)
	 console.log(temparr)//[ 1, 3, 2, 4, 5, 4 ]
	 temparr.splice(idx,1)
	 console.log(temparr)//[ 1, 3, 2, 5, 4 ]

}









