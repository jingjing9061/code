
//利用filter 去重
var arr = [1, 2, 2, 3, 4, 5, 5, 6, 7, 7,8,8,0,8,6,3,4,56,2];
var arr2 = arr.filter((x, index,self)=>self.indexOf(x)===index)  
console.log(arr2); //[1, 2, 3, 4, 5, 6, 7, 8, 0, 56]


//filter 过滤不合格的元素
var arr = ['10','12','23','44','42']
var newArr = arr.filter(item => item.indexOf('2')<0) 
console.log(newArr)
