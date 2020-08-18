

// ~~~~~~~~~~~~~~~使用switch~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function returnWeekday(){
	let str = '今天是星期';
	let date =  new Date().getDay();
	switch(date){
		case 0:
			str+='日';
			break;
		case 1:
			str+='一';
			break;
		case 2:
			str+='二';
			break;
		case 3:
			str+='三';
			break;
		case 4:
			str+='四';
			break;
		case 5:
			str+='五';
			break;
		case 6:
			str+='六';
			break;
	}
	return str
}
console.log(returnWeekday())

// ~~~~~~~~~~~~~~~使用数组~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function returnWeekday3() {
	let str = '今天是星期';
	let date = new Date().getDay();
	//使用数组
	let dateArr = ['天','一','二','三','四','五','六'];
	return str + dateArr[date]

}
console.log(returnWeekday3())

// ~~~~~~~~~~~~~~~使用对象~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function returnWeekday4(){
	let str = '今天是星期';
	let date = new Date().getDay();
	let dateObj={
		0: '天',
		1: '一',
		2: '二',
		3: '三',
		4: '四',
		5: '五',
		6: '六',
	}
	return str+dateObj[date]
}
console.log(returnWeekday4())

// ~~~~~~~~~~~~~~~使用charAt 字符方法~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function returnWeekday5(){
	return '今天是星期'+'日一二三四五六'.charAt(new Date().getDay())
}
console.log(returnWeekday5())

/*
*不仅返回今天是周几，还需要区分工作日和休息日
*/
function returnWeekday6(){
	let str = '今天是星期';
	let date = new Date().getDay();
	let dateObj={
		0:['天','休'],
		1:['一','工'],
		2:['二','工'],
		3:['三','工'],
		4:['四','工'],
		5:['五','工'],
		6:['六','休'],
	}
	let dayType={
		'休':function(){
			console.log('为休息日')
		},
		'工':function(){
			console.log('为工作日')
		}
	}
	let returnData={
		string:str + dateObj[date][0],
		method:dayType[dateObj[date][1]]
	}
	return returnData
}
console.log(returnWeekday6().method.call(this))














