let [a, b, c] = [1, 2, 3]
console.log(a, b, c)

let {x, y, z} = {x: 1, y: 2, z: 3}
console.log(x, y, z)

let [json, arr, num, str] = [{ a: 1, b: 2 }, [1, 2, 3], 8, 'str']
console.log(json, arr, num, str)

/**解构赋值
左右两个边结构必须一样
右边必须是个东西
声明和赋值赋值不能分开，必须在一句话里
*/