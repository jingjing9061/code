
// 实用技巧


/*
 *
 *根据副本b创建一个Set对象，然后在上方a上使用Array.filter()方法，过滤出数组b中不包含的值。
*/
const difference = (a, b) => { const s = new Set(b); return a.filter(x => !s.has(x)); };
console.log(difference([1,2,3], [1,2]) ) //[3]


/*
 *Array intersection (数组交集)
 *根据数组 b 创建一个 Set 对象，然后在数组 a 上使用 Array.filter() 方法，只保留数组 b 中也包含的值。
*/
const intersection = (a, b) => { const s = new Set(b); return a.filter(x => s.has(x)); };
console.log(intersection([1,2,3], [4,3,2])) //[2,3]

/*
 Array sample (数组取样随，机获取数组中的1个元素)
 使用 Math.random() 生成一个随机数，乘以 length，并使用 Math.floor() 舍去小数获得到最接近的整数。这个方法也适用于字符串。
 */
 const sample = arr =>  arr[Math.floor(Math.random()*arr.length)];
 console.log(sample([3,4,7,8,0]))


/*
*Array union (数组合集)
*用数组 a 和 b 的所有值创建一个 Set 对象，并转换成一个数组。
*/
const union =(a,b)=>Array.from(new Set([...a, ...b]));
console.log(union([1,2,3],[4,3,2])) //[1,2,3,4]




































