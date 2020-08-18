/*
  es9 新增dotAll 命名分组捕获 后行断言

  dotAll 增强点的匹配能力

*/

//.匹配不了换行符
console.log(/foo.bar/.test('foo\nbar')) //false  
console.log(/foo.bar/.test('fooabar')) //true 




//  加上/s
console.log(/foo.bar/s.test('foo\nbar')) //ture
//点匹配4个字节的utf的16个字符 加上us
console.log(/foo.bar/us.test('foo\nbar')) //ture




const re = /foo.bar/s
//判断是不是启用了dotAll模式
console.log(re.dotAll) // true
//flags坚持有没有s 
console.log(re.flags)//s



/*
  命名的分组捕获
*/

// es5用法
const t = '2019-06-07'.match(/(\d{4})-(\d{2})-(\d{2})/)
console.log(t[1],t[2],t[3])//2019 06 07


const d = '2019-06-07'.match(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/)
// console.log(d)//[ '2019-06-07','2019','06','07',index: 0,input: '2019-06-07',groups: { year: '2019', month: '06', day: '07' } ][ '2019-06-07','2019','06','07', index: 0,input: '2019-06-07',groups: { year: '2019', month: '06', day: '07' } ]

console.log(d.groups.year)//2019
console.log(d.groups.month)//06







