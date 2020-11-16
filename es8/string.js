function log(){
     console.log.apply(console,arguments);
}

/*
字符串追加
String.prototype.padStart和String.prototype.padEnd，允许将空字符串或其他字符串添加到原始字符串的开头或结尾。


 */


/*
*string补白
*
 */

// for(let i = 1; i<15;i++){
// 	if (i<10) {
// 		log(`0${i}`)
// 	}else {
// 		log(i)
// 	}
// }


/*
*参数padStart(位数,不够要补什么)
*往前面补
 */
// for(let i = 1; i<188;i++){
// 	log(i.toString().padStart(3,'0')) 
// }


/*
*往后边补
*padEnd()
 */

// for(let i = 1; i<188;i++){
// 	log(i.toString().padEnd(3,'*#')) 
// }





