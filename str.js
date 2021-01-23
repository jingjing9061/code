
/**
 * [strTest description]
 * @type {String}
 */
let strTest = '测试'.repeat(3)
console.log(strTest)//测试测试测试

/**
 * 填充字符串到指定的长度
 */

const eightBits  = '001'.padStart(8,'0')
console.log(eightBits)//00000001


const anonymizedCode = '34'.padEnd(5,'*')
console.log(anonymizedCode)//34***


/** 
 * 反转字符串中的字符
 * 只需组合扩展操作符(...)、Array.reverse方法和Array.join方法
 */
const word ='apple'
const reverseWord=[...word].reverse().join('')
console.log(reverseWord)//elppa


/**
 * 字符串中的第一个字母大写
 */

let word2 = 'apple'
word2 = word2[0].toUpperCase()+word2.substr(1)
console.log(word2)



/**
 * 如何在多个分隔符上分割字符串
 */

const list = 'apple,bananas;cherries'
const fruits = list.split(/[,;]/)
console.log(fruits)//[ 'apple', 'bananas', 'cherries' ]


/**
 * [字符串是否包含特定序列]
 * @type {String}
 */
const text = "Hello, world! My name is Kai!"
console.log(text.includes("Kai")); // true



/** 
 * 检查字符串是否以特定序列开头或结尾
 */
const text1 = "Hello, world! My name is Kai!"
console.log(text1.startsWith("Hello")); // true
console.log(text1.endsWith("world")); // false



/**
 *  替换所有出现的字符串
 */

// const text3 = "I like apples. You like apples."
// console.log(text3.replace(/apples/g, "bananas"));
// // "I like bananas. You like bananas."
// console.log(text3.replaceAll("apples", "bananas"));
// // "I lik

























