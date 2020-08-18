function log(){
     console.log.apply(console,arguments);//在这里不用call（）是因为传入的参数不确定
}



//阶乘
function fact(num) {
       if (num <= 1) {
                return 1;
       } else {
                return num * fact(num - 1);
       }
}
log(fact(3)) // 结果为 6