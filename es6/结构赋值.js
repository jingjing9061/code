
function log(){
     console.log.apply(console,arguments);//在这里不用call（）是因为传入的参数不确定
}

/*
function handle(req, res) {
 const name = req.body.name;
 const description = req.body.description;
 const url = req.url;

 log( url endpoint , url);
 // 大量代码逻辑
 dbService.createPerson(name, description)
}


function handle(req, res) {
 const { body: { name, description }, url } = req;
 log( url endpoint , url);

 // 大量代码逻辑
 dbService.createPerson(name, description)
 */




//我们可以使用上面的模式匹配分解数组的值。我们使用 , , 跳过某些值
// const array=[1,2,3,4,5,6]
// const [a,,c,...remaining] = array
// console.log(a,c,remaining) //1 3 [ 4, 5, 6 ]



// let [a,b,c] = [1,2,3];
//定义了三个变量，并对应赋了值；如果值的个数与变量名个数不匹配，
//没有对应上的变量值为undefined

// let [a,b,c='default'] = [1,2];
//指定默认值，在定义变量时就指定了默认值，如果赋值时，没有给定内容，则会取默认值

// let [a,...b] = [1,2,3];
//这里 b 的值为 [2,3],这样可以款速使用剩余的数据赋值给变量，
//但实际使用中为了避免代码阅读的歧义，不推荐这么使用，仅作了解即可

// let [a,b,c] = 'yes';
// console.log(a);//y
// console.log(b);//e
// console.log(c);//s
//字符串的解构赋值会以单个字符的方式进行赋值

// let {length} = 'yes';
// console.log(length);//3
//以对象赋值的方式，如果名称是字符串的自带属性，则会得到属性值

// let arr = [1,2];
// let obj = {a:1,b:2};
// function test({a = 10,b}){
//     console.log('a',a);
//     console.log('b',b);
// }
// test(obj);
//解构赋值的使用实例，作为函数传参，并使用默认值





/*对象结构解构*/

// let obj = {a:1,b:2};
// let {a,b} = obj;//a=1,b=2
//使用变量的方式进行结构赋值，需要严格匹配名称，数组的模式是严格匹配下标

// let obj = {a:1,b:2};
// let {a=0,b=5} = obj;
//赋值并给定默认值

// let obj = {a:1,b:2};
// let {a：A,b} = obj;//A=1,b=2  a报错，变量未定义
//获得内容后，将变量进行改名

// let obj = {a:1,b:2};
// let a = 0;
// ({a,b} = obj)
//对已存在的a进行修改值，并生产新的变量b


// let obj = {
//     arr:['aaa',{a:1}]
// };
// let {arr:[b,{a}]} = obj;
// console.log(b);
// console.log(a);
//获得对象的子数据，并映射到相应的变量，这里需要注意的是结构要对应





/*
*解构原始数据
*有时候一个对象包含很多属性，而我们只需要其中的几个，
*这里可以使用解构方式来提取我们需要的属性。
*如一个用户对象内容如下：
*
*我们需要提取出两个部分，分别是用户及用户信息:
*/
// const rawUser = {
//    name: 'John',
//    surname: 'Doe',
//    email: 'john@doe.com',
//    displayName: 'SuperCoolJohn',
//    joined: '2016-05-05',
//    image: 'path-to-the-image',
//    followers: 45
//  }

// let user2 = {}; 
// let userDetails = {};
// ({ name: user2.name, surname: user2.surname, ...userDetails } = rawUser);
// log('解构赋值：',user2)//{ name: 'John', surname: 'Doe' }
// log(userDetails)


















