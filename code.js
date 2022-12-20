//ЗАДАНИЕ  1
// не до конца поняла задние так что варианта

//варинат 1
const arr = ['a', 'b', 'c'];
const arr1 = [1, 2, 3];
let matrix = [
    ['a', 'b', 'c'],
    [1, 2, 3],
]
console.log(matrix)

//варинат 2 объединение массивов методом array.concat()
let arr2 = arr.concat(arr1)
console.log(arr2)

//варинат 3  объединение массивов через оператор spread
const all = [...arr, ...arr1]
console.log(all);

// варинат 4 без создания нового массива 
arr.push(arr1);
console.log(arr);

// ЗАДАНИЕ 2 
const array = ['a', 'b', 'c',]
array.push(1, 2, 5)
console.log(array);

// ЗАДНИЕ 3  
let array1 = arr1.reverse()
console.log(array1);

// ЗАДАНИЕ 4 
let array2 = [1, 2, 3]
array2.push(4, 5, 6)
console.log(array2);
array2.unshift(4, 5, 6);
console.log(array2);

// ЗАДАНИЕ 5 
let array3 = [1, 2, 3]
array3.unshift(4, 5, 6);
console.log(array3);

//shift, pop

//ЗАДАНИЕ 6
let arr3 = ['js', 'css', 'jq'];
let elem = arr3.shift();
console.log(elem);

//ЗАДАНИЕ 7 
let elem1 = arr3.pop()
console.log(elem1);

//slice
//ЗАДАНИЕ 8
let array4 = [1, 2, 3, 4, 5]
let newarray4 = array4.slice(0, 3)
console.log(newarray4);

//ЗАДАНИЕ 9
let sub = array4.slice(3, 5)
console.log(sub);

//splice

//ЗАДАНИЕ 10
let arr4 = [1, 2, 3, 4, 5]
arr4.splice(1, 2)
console.log(arr4);

//ЗАДАНИЕ 11
let arr5 = [1, 2, 3, 4, 5]
let Arr5 = arr5.splice(1, 3)
console.log(Arr5);

//ЗАДАНИЕ 12
let arr6 = [1, 2, 3, 4, 5]
arr6.splice(1, 0, 'a', 'b')
arr6.splice(-1, 0, 'c')
arr6.splice(8, 0, 'e')
console.log(arr6);

