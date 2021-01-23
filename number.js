/*
*保留两位小数总结
 */


/* 
 * 一.保留两位小数不四舍五入
 * */
const a = 2.467;
const b = ( parseInt( a * 100 ) / 100 ).toFixed(2);
// console.log(b);      // 2.46

const clip = Number(parseFloat(a).toFixed(3).slice(0,-1))
// console.log(clip)

const c = Math.floor(a * 100) / 100 
// console.log(c)//2.46





/*二.
 *四舍五入  
 *toFixed 保留两位小数，将数值类型的数据改变成了字符串类型
 **/
const d = a.toFixed(2)
// console.log(d)//2.47


/*
 字符串匹配
注意，先将数据转换为字符串，最后再转为数值类型
 */
num = Number(a.toString().match(/^\d+(?:\.\d{0,2})?/));
      console.log(num); //2.46
      console.log(typeof num); // number


/*三 float型小数点后两位 
 *parseInt丢弃小数  
 *Math.ceil向上取整 
 *Math.floor向下取整  不四舍五入
 **/

// console.log(parseInt(10/3)) //3
// console.log(Math.ceil(10/3))//4
// console.log(Math.floor(10/3))//3










