


console.log('start')

async function async1() {
  await async2()
  console.log('async1')
}
async function async2() {
  console.log('async2')
}
async1()

setTimeout(() => {
  console.log('setTimeout')
}, 0)

new Promise(resolve => {
  console.log('promise')
  resolve()
})
  .then(() => {
    console.log('then1')
  })
  .then(() => {
    console.log('then2')
  })

console.log('end')


// start
// VM936:8 async2
// VM936:17 promise
// VM936:27 end
// VM936:5 async1
// VM936:21 then1
// VM936:24 then2
// undefined



/*
 async function async1() {
  await async2()
  console.log('async1')
}
async function async2() {
  console.log('async2')
}

async1函数里的内容可以看成，async2()会立即执行，然后.then里的内容进入微任务队列

async function async1() {
  Promise.resolve(async2()).then(() => {
     console.log('async1')
  })
}

 */