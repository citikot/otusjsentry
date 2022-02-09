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

/*

export function smartForm(el) {
  const NUMBER_OF_PARAGRAPHS = 3;

  let input = document.createElement("input");
  el.appendChild(input);

  let button = document.createElement("button");
  el.appendChild(button);

  let par = [];

  for (let i = 0; i < NUMBER_OF_PARAGRAPHS; i++) {
    par[i] = document.createElement("p");
    el.appendChild(par[i]);
  }

  button.addEventListener("click", () => {
    par.push(document.createElement("p"));
    par[par.length - 1].innerHTML = input.value;
    el.appendChild(par[par.length - 1]);
  });
}


smartForm.test.js

import { smartForm } from "./smartForm";

describe("smartForm", () => {
  let el;
  beforeEach(() => {
    el = document.createElement("div");
    smartForm(el);
  });

  function submitValue(text) {
    el.querySelector("input").value = text;
    el.querySelector("button").click();
  }

  it("is a function", () => {
    expect(smartForm).toBeInstanceOf(Function);
  });

  it("creates initial markup", () => {
    expect(el.querySelector("input")).toBeTruthy();
    expect(el.querySelector("button")).toBeTruthy();
    expect(el.querySelectorAll("p").length).toBe(3);
  });

  it("adds paragraph on button click", () => {
    const value = "123";
    submitValue(value);
    expect(el.querySelectorAll("p").length).toBe(4);
    expect(el.querySelectorAll("p")[3].innerHTML).toBe(value);
  });
});

*/