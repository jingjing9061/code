
function log(){
     console.log.apply(console,arguments);//在这里不用call（）是因为传入的参数不确定
}
/*
 *获取查询字符串参数
*/
const paramsStr='q=URLUtils.searchParams&topic=api'
const searchParams = new URLSearchParams(paramsStr);
log(searchParams)
log(searchParams.has('topic'))//true
searchParams.append("topic", "webdev");
log(searchParams.toString())//q=URLUtils.searchParams&topic=api&topic=webdev

/*
*set
*/
let array=[1,2,3,4,5,3,2,4];
log('set:',[...new Set(array)])//[ 1, 2, 3, 4, 5 ]

/* 
 * 将原始值列表转换为另一种类型
 */
const nativelist=['1','5','6','9'];
const castedList = nativelist.map(Number);
log('类型转换:',castedList)//[ 1, 5, 6, 9 ]

/*
 *扁平嵌套的数组
 */
/* flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。*/
// let nestedArr = [1,2,4,[5,6]];
// let flatlist = nestedArr.flat()
// log(flatlist)


/*
*数组确保值
 */
let arr= Array(5).fill('');
log('数组确保值:',arr)//[ '', '', '', '', '' ]


/*
*数组 map 的方法 (不使用Array.Map)
*Array.from 还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组
*/
const cities = [
    { name: 'Paris', visited: 'no' },
    { name: 'Lyon', visited: 'no' },
    { name: 'Marseille', visited: 'yes' },
    { name: 'Rome', visited: 'yes' },
    { name: 'Milan', visited: 'no' },
    { name: 'Palermo', visited: 'yes' },
    { name: 'Genoa', visited: 'yes' },
    { name: 'Berlin', visited: 'no' },
    { name: 'Hamburg', visited: 'yes' },
    { name: 'New York', visited: 'yes' }
];

const cityNames = Array.from(cities, ({ name}) => name);
// log(cityNames) 


/*
*有条件的对象属性
*不再需要根据一个条件创建两个不同的对象，可以使用展开运算符号来处理。
*/
const getUser = (emailIncluded) => {
  return {
    name: 'John',
    surname: 'Doe',
    ...emailIncluded && { email : 'john@doe.com' }
  }
}

const user = getUser(true);
log(user); // outputs { name: "John", surname: "Doe", email: "john@doe.com" }

const userWithoutEmail = getUser(false);
log(userWithoutEmail); // outputs { name: "John", surname: "Doe" }



/*
*动态属性名
*/
const dynamic = 'email';
let user1 = {
    name: 'John',
    [dynamic]: 'john@doe.com'
}
console.log('动态属性名:',user1); // outputs { name: "John", email: "john@doe.com" }



/*
*对比时间
* 时间个位数形式需补0
*/
const time1 = "2019-02-14 21:00:00";
const time2 = "2019-05-01 09:00:00";
const overtime = time1 > time2;
log(overtime)// overtime => false




/*
*格式化金钱
*/
const ThousandNum = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const money = ThousandNum(20190214);// money => "20,190,214"
log('格式化金钱:',money)//20,190,214



/*
*生成随机ID
* >Math.random().toString(36)  0-9 a-Z的字符串
* Math.random().toString(36).substr(3, len) 随机字符串
*/
const RandomId = len =>Math.random().toString(36).substr(3, len);
const id = RandomId(10);// id => "jg7zpgiqva"
log(id)



/*
*
* 短路运算符
* const a = d && 1; 
* 满足条件赋值：取假运算，从左到右依次判断，遇到假值返回假值，后面不再执行，否则返回最后一个真值
* const b = d || 1; 
* 默认赋值：取真运算，从左到右依次判断，遇到真值返回真值，后面不再执行，否则返回最后一个假值const c = !d; 
* 取假赋值：单个表达式转换为true则返回false，否则返回true
* 
*/



/*
*是否为空数组
*/
const arr1 = [];
const flag = Array.isArray(arr1) && !arr1.length;
log('arr:',flag)// flag => true

/*
*是否为空对象
*/

const obj = {};
const flag1 = DataType(obj, "object") && !Object.keys(obj).length;
log('obj:',flag1)// flag => true

function DataType(tgt, type) {   
  const dataType = Object.prototype.toString.call(tgt).replace(/\[object (\w+)\]/, "$1").toLowerCase();    
  return type ? dataType === type : dataType;
}
DataType("young"); // "string"DataType(20190214); // "number"DataType(true); // "boolean"DataType([], "array"); // trueDataType({}, "array"); // false


/*
*满足条件时执行
* const flagA = true; // 条件Aconst flagB = false; 
* 条件B(flagA || flagB) && Func(); 
* 满足A或B时执行(flagA || !flagB) && Func(); 
* 满足A或不满足B时执行flagA && flagB && Func(); 
* 同时满足A和B时执行flagA && !flagB && Func(); 
* 满足A且不满足B时执行
*/







/*
*解构原始数据
*有时候一个对象包含很多属性，而我们只需要其中的几个，
*这里可以使用解构方式来提取我们需要的属性。
*如一个用户对象内容如下：
*
*我们需要提取出两个部分，分别是用户及用户信息:
*/
const rawUser = {
   name: 'John',
   surname: 'Doe',
   email: 'john@doe.com',
   displayName: 'SuperCoolJohn',
   joined: '2016-05-05',
   image: 'path-to-the-image',
   followers: 45
 }

let user2 = {}; 
let userDetails = {};
({ name: user2.name, surname: user2.surname, ...userDetails } = rawUser);
log('解构赋值：',user2)//{ name: 'John', surname: 'Doe' }
log(userDetails)




















































