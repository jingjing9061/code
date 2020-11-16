

/*
  Promise.prototype.finally
  promise 执行完毕后无论其结果怎样都做一些处理或清理时，finally() 方法可能是有用的。
 */


// function func() {
//   promiseFunc() //返回一个Promise对象
//     .then(() => {})
//     .then(() => {})
//     .catch(err => {
//       console.log(err);
//     })
//     .finally(() => {
//       //无论promiseFunc()运行成功还是失败，这里的代码会被调用到
//     });
// }


let p = new Promise((resolve, reject) => {
    resolve(1000);
})
p.then(data => {
    console.log("success:" + data)
}).finally(() => {
    console.log("finally")
})




