/*
Вывести в консоль сумму всех целых чисел от 50 до
100
*/


const start = 49;
const stop = 100;
let sum = 0;

for (let i = start; i <= stop; i++) {
	sum += i; 
}

console.log(sum);