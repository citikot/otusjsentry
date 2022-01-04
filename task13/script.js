/*
1.Запросите у пользователя дату в формате
ДД.ММ.ГГГГ. Напишите программу, выводящую день
недели по введённой дате.

- разложить ввод на массив
- проверить на соответствие
- получить день недели
- вывести через свитч название дня

2.Написать программу, которая выводит в консоль
количество минут, прошедшее с начала сегодняшнего
дня.

3.*В двух переменных хранятся даты рождения двух
пользователей в формате ДД.ММ.ГГГГ. Написать
программу, которая определяет более молодого
пользователя.
- получить 2 даты
- проверить как в п.1
- вычесть из первой даты вторую
- вывести кто старше

*/


let dataNotCorrect = true;
let currentDate = [];
do {
  let currentDateString = prompt('Введите дату в формате ДД.ММ.ГГГГ:');
  if (currentDateString.length <=10) {
    currentDate = currentDateString.split('.');
    if (parseInt(currentDate[0]) > 31) {
      alert('Введена неправильная дата, повторите ввод');
    } else if (parseInt(currentDate[1]) > 12) {
      alert('Введена неправильная дата, повторите ввод');
    } else {
      dataNotCorrect = false;
    }
  } else {
    alert('Введена неправильная дата, повторите ввод');
  }
} while (dataNotCorrect);  

let dateString = (currentDate.reverse()).join('-');
const date = new Date(dateString);
switch (date.getDay()){
  case 0:
    console.log("Воскресенье");
    break;
  case 1:
    console.log("Понедельник");
    break;
  case 2:
    console.log("Вторник");
    break;
  case 3:
    console.log("Среда");
    break;
  case 4:
    console.log("Четверг");
    break;
  case 5:
    console.log("Пятница");
    break;
  case 6:
    console.log("Суббота");
    break;
}

const currentTime = new Date();
const minutesFromTheDayStart = currentTime.getHours() * 60 + currentTime.getMinutes();
console.log(`С начала дня прошло ${minutesFromTheDayStart} минут.`); 

dataNotCorrect = true;
let date1 = [];
do {
  let currentDateString = prompt('Введите первую дату в формате ДД.ММ.ГГГГ:');
  if (currentDateString.length <=10) {
    date1 = currentDateString.split('.');
    if (parseInt(date1[0]) > 31) {
      alert('Введена неправильная дата, повторите ввод');
    } else if (parseInt(date1[1]) > 12) {
      alert('Введена неправильная дата, повторите ввод');
    } else {
      dataNotCorrect = false;
    }
  } else {
    alert('Введена неправильная дата, повторите ввод');
  }
} while (dataNotCorrect);  


let date1String = (date1.reverse()).join('-');
const date1ms = new Date(date1String);

dataNotCorrect = true;
let date2 = [];
do {
  let currentDateString = prompt('Введите вторую дату в формате ДД.ММ.ГГГГ:');
  if (currentDateString.length <=10) {
    date2 = currentDateString.split('.');
    if (parseInt(date2[0]) > 31) {
      alert('Введена неправильная дата, повторите ввод');
    } else if (parseInt(date2[1]) > 12) {
      alert('Введена неправильная дата, повторите ввод');
    } else {
      dataNotCorrect = false;
    }
  } else {
    alert('Введена неправильная дата, повторите ввод');
  }
} while (dataNotCorrect);  

let date2String = (date2.reverse()).join('-');
const date2ms = new Date(date2String);

const user = (date2ms.getTime() - date1ms.getTime()) > 0 ? "Первый" : "Второй";

console.log(`${user} старше.`);
