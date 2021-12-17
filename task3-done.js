/*
Написать программу, которая запрашивает у
пользователя ввод трёхзначного числа, а потом
выводит в консоль сумму цифр введённого числа.
*/

const input = +prompt("Введите трехзначное число: ");

if (isNaN(input)) {
    console.log("Вы не ввели число.");
} else {
    const digit3 = input % 10;
    const digit1 = Math.floor(input / 100);
    const digit2 = (input - (digit1 * 100 + digit3)) / 10;
    console.log(digit1 + digit2 + digit3);
}
