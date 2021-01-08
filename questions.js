// function addToList(item, list) {
//   return list.push(item);
// }
// const result = addToList("apple", ["banana"]);
// console.log(result); //2 push()方法返回新数组的长度。  push之后return list 才能返回数组




// let newList = [1, 2, 3].push(4) //返回新数组的长度
// console.log(newList.push(5))






const food = ['🍕', '🍫', '🥑', '🍔']
const info = { favoriteFood: food[0] }
info.favoriteFood = '🍝'
console.log(food)