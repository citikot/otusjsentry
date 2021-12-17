/*
Создайте объект user, содержащий поле name со
значением ‘John’.
1.Запросить у пользователя ввод числа. Записать
введенное значение в поле age объекта user.
2.Создать копию объекта user с именем admin.
Добавить новому объекту поле role со значением
‘admin’.
*Записать все значения полей объекта admin в
отдельные переменные. Имена переменных
должны совпадать с названиями полей
*/
'use strict';

// 1
const user = Object.create({});

user.name = "John";

const input = +prompt("Введите возраст: ");

if (input < 1) {
  console.log("Возраст должен быть больше 0.");
} else {
  user.age = input;
}
console.log(user);

// 2
const admin = Object.assign({}, user);
admin.role = "admin";
console.log(admin);

// 3
const {name, age, role} = admin;
console.log (name, age, role);
