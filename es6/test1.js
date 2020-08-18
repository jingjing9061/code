
let selectarr=[1,2,3]//已选中
let allarr =[1,2,3,4,5,6,7,8,9]//所有数据源
let result =  allarr.filter(val=>selectarr.indexOf(val)===-1)//未选中的
console.log(result)