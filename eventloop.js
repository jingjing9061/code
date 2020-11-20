
/*
__在浏览器环境中：__事件循环的顺序，决定js代码的执行顺序。
进入整体代码(宏任务)后，开始第一次循环。接着执行所有的微任务。
然后再次从宏任务开始，找到其中一个任务队列执行完毕，再执行所有的微任务。
大概就是先执行同步代码，然后就将宏任务放进宏任务队列，宏任务队列中有微任务就将其放进微任务队列，
当宏任务队列执行完就检查微任务队列，微任务队列为空了就开始下一轮宏任务的执行，往复循环。
 宏任务 -> 微任务 -> 宏任务 -> 微任务一直循环。
 */

//特别说明的是new Promise里面的内容是同步执行的，
//像new Promise(resolve(console.log('1')))同步执行，
//resolve之后.then进入微任务队列


console.log(1);

setTimeout(() => {
  console.log(2);
  new Promise((resolve) => {
    console.log(3);
    resolve();
  }).then(() => {
    console.log(4);
  });
});

new Promise((resolve) => {
  console.log(5);
  resolve();
}).then(() => {
  console.log(6);
});

setTimeout(() => {
  console.log(7);
  new Promise((resolve) => {
    console.log(8);
    resolve();
  }).then(() => {
    console.log(9);
  });
});

console.log(10)
