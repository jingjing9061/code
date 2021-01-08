

// let startTimer = '1609430400000'// 2021-1-1 00:00
// let endTimer = '1612108740000'//2021-1-31  23:59



// let newDate = getTimeString(new Date())
// console.log(newDate) //2020-12-16 15:40:47


// function getTimeString(timestamp) {
//     if (timestamp) {
//         const time = new Date(timestamp)
//         let dateStr = ''
//         const year = time.getFullYear()
//         const month = String(time.getMonth() + 1).length === 1 ? '0' + (time.getMonth() + 1) : (time.getMonth() + 1)
//         const day = String(time.getDate()).length === 1 ? '0' + time.getDate() : time.getDate()
//         dateStr = year + '-' + month + '-' + day
//         let timeStr = ''
//         const hours = time.getHours()
//         const hh = String(hours).length === 1 ? '0' + hours : hours
//         const minutes = time.getMinutes()
//         const mm = String(minutes).length === 1 ? '0' + minutes : minutes
//         const seconds = time.getSeconds()
//         const ss = String(seconds).length === 1 ? '0' + seconds : seconds
//         timeStr = `${hh}:${mm}:${ss}`
//         return dateStr + ' ' + timeStr
//     } else {
//         return ''
//     }
// }







//获取当前时间
let currentTime = new Date();
//自定义时间
let customTime="2020-12-29 00:00:00";  
customTime= customTime.replace("-","/");//替换字符，变成标准格式  
customTime= new Date(Date.parse(customTime));


if(currentTime < customTime){
	console.log("当前时间小于自定义时间")
}



// var oDate1 = new Date('2019-03-01');
// var oDate2 = new Date('2019-03-01');
// if(oDate1 > oDate2){
//     console.log('第一个大');
// } else {
//     console.log('第二个大');
// }





