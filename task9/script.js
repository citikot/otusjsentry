/* 
Запросить у пользователя ввод числа N. Вывести в
консоль среднее арифметическое всех нечётных
чисел от 1 до N
*/

const input = BigInt(prompt("Введите целое неотрицательное число: "));
let sum = 0n;
let counter = 0n;

for (let i = 1n; i <= input; i++) {
	if (i % 2n != 0) {
		sum += i;
		counter += 1n;
	}
}

console.log(`Среднее арифметическое нечётных чисел от 1 до ${input} равно ` + (sum / counter));
