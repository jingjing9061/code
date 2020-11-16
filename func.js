

/*
	函数常见四种形态
 */

/*  函数声明 */
function funcnew(){
	console.log('函数声明的形态')
}

/*
 函数表达式 之一 
 let func0 = function (){
	console.log('函数表达式')
}
*/


/* 
  函数表达式之二  
 (function func1(){})
 */


/*
 函数的嵌套形态
 let func2 = function(){
    console.log("函数的嵌套形态");
    let func3 = function(){
        console.log("func2嵌套在func1里")
    }
    func3();
 }
 */



/*函数调用自身称为递归,函数名为“func”*/
(function func(i){
    console.log("函数名为"+func.name+",第"+i+"次调用")
    if(i<3){//递归出口
        func(++i);//递归
    }
})(1);
//>> 函数名为func,第1次调用
//>> 函数名为func,第3次调用
//>> 函数名为func,第3次调用




/*匿名函数递归*/
// (function (i){
//     console.log("函数名为"+func.name+",第"+i+"次调用")
//     if(i<3){//递归出口
//         arguments.callee(++i);
//     }
// })(1);
//>> 函数名为func,第1次调用
//>> 函数名为func,第3次调用
//>> 函数名为func,第3次调用




/* 
 * 高阶函数  函数果某个函数可以接收另一个函数作为参数，该函数就称之为高阶函数。
 * 常见的是回掉函数
 */

function fn1(callback){
    if(callback){
        callback();
    }
}
fn1(function(){
    console.log("高阶函数");//>> 高阶函数
});










