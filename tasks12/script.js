/* 
Сверстать страницу и подключить к ней файл со скриптом. 

На странице должны быть три текстовых параграфа, поле ввода и кнопка. 

Напишите скрипт, который будет выполнять следующие условия:
1.Кнопка скрыта, если в поле ввода нет значения. 
2.При клике на кнопку добавляется новый параграф, содержащий текст из поля ввода.
3.*Если параграфов становится больше 5, первый из них удаляется.
*/
const button = document.querySelector("button");
const input = document.querySelector("textarea");
const output = document.querySelector("div");
const content = [];

input.addEventListener("input", showButton);
button.addEventListener("click", addParagraph);

function showButton() {
    button.removeAttribute("hidden");
}

function addParagraph() {
    content.push(input.value);
    if (content.length > 5) {
        content.shift();
    }
    render();
}

function render() {
    output.textContent = "";
    content.forEach((item) => {
        output.appendChild(createParagraph(item));
    });
}

function createParagraph(text) {
    let par = document.createElement("p");
    par.textContent = text;
    return par;
}
