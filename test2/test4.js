
// repeat重复执行函数
//每隔2s输出一次helloworld，共输出4次 const repeatFunc = repeat(console.log, 4, 2000); //repeatFunc("helloworld")

function repeat(fn, n, interval) {
  return (...args) => {
    let timer
    let counter = 0
    timer = setInterval(() => {
      counter++
      fn.apply(this, args)
      if (counter === n) {
        clearInterval(timer)
      }
    }, interval);
  }
}

const repeatFn = repeat(console.log, 4, 2000)
repeatFn('helloworld')





//函数将下划线命名转化成驼峰命名法
function formatHump(str) {
  if (typeof str !== "string") return false
  //将str分割成数组
  str = str.split("_") // ["get", "element", "by", "id"]
  if (str.length > 1) {
    // 从1开始for循环遍历,因为数组第一个字符串的首字母不需要转大写
    // 将数组里的每一个字符串第一个字母变成大写
    for (let i = 1; i < str.length; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1)
    }
    //将数组拼接回字符串
    return str.join("")
  }
}

console.log(formatHump("get_element_by_id"))  //getElementById

