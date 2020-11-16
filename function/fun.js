
//只有声明形态的函数，才具有提升的特性


console.log(func0); //>> func0() {return 0}
console.log(func1); //>> undefined
//函数的声明形态
function func0() {
  return 0;
}
//函数的表达式形态
var func1 = function() {
  return 1;
};