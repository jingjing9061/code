function log(){
     console.log.apply(console,arguments);
}

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

for(let i = 1; i<188;i++){
	log(i.toString().padEnd(3,'*#')) 
}