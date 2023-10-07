// // IMPORTOWANIE ELEMENTÓW_____________________________________
import { Language } from "./Language.js";
import { Options } from "./Options.js";
import { products } from "./_products.js";
import { Counter } from "./Counter.js";


// // PROBNA FUNKCJA LICZENIA_____________________________________
// const mainFunction = ()=> {
//     const firstIndex = products.forEach((element, index) => {
//         if (element.plName === firstProduct.value) {
//             zmiennaOne = products[index].kcal;
//         }
//     });  
//     const secondIndex = products.forEach((element, index) => {
//         if (element.plName === secondProduct.value) {
//             zmiennaTwo = products[index].kcal;
//         }
//     });
//     const zOne: number = Number(gramsInput.value) * (Number(zmiennaOne)/100);
//     const xTwo: number = (zOne / Number(zmiennaTwo))*100;
//     result.textContent = String(xTwo);
// };

const sprawdzanie = document.documentElement.lang;

const language = new Language(
    sprawdzanie, 
    ".language__polish", 
    ".language__english", 
    ".aplication__text",
    ".aplication__grams",
    ".aplication__first--product option",
    ".aplication__second--product option",
    );

const options = new Options(
    sprawdzanie,
    ".aplication__first--product",
    ".aplication__second--product",
    products,
);

const counter = new Counter(
    ".aplication__number",
    ".aplication__grams",
    ".aplication__first--product",
    ".aplication__second--product",
    products
);

language.chooseLanguage();
options.ktory();









// // POBIERANIE ELEMENTÓW_____________________________________
// const plBtn: HTMLButtonElement = document.querySelector(".language__polish");
// const engBtn: HTMLButtonElement = document.querySelector(".language__english");
// const gramsInput: HTMLInputElement = document.querySelector(".aplication__grams");
// const firstProduct: HTMLInputElement = document.querySelector(".aplication__first--product");
// // const firstOption: HTMLInputElement = document.querySelector(".aplication__first--product option");
// const secondProduct: HTMLInputElement = document.querySelector(".aplication__second--product");
// const secondOption: HTMLInputElement = document.querySelector(".aplication__second--product option");
// const result: HTMLDivElement = document.querySelector(".aplication__number");
// const text: HTMLDivElement = document.querySelector(".aplication__text");

// result.addEventListener("click", ()=> {
//     mainFunction();
// })

// let zmiennaOne: number;
// let zmiennaTwo: number;

// // WSTRZYKIWANIE OPCJI W INPUTY SELECT_____________________________________
// const liczenie = products.forEach(element => {
//     let optionOne = document.createElement("option");
//     let optionTwo = document.createElement("option");
//     optionOne.textContent = element.plName;
//     optionTwo.textContent = element.plName;
//     firstProduct.appendChild(optionOne);
//     secondProduct.appendChild(optionTwo);
// });

// // WPROWADZENIE POLSKICH NAZW_____________________________________
// const polishLanguage = () => {
//     plBtn.classList.add("button--active");
//     engBtn.classList.remove("button--active");
//     text.textContent = "gramów";
//     gramsInput.placeholder = "wpisz gramature";
//     firstOption.textContent = "wybierz produkt, który chcesz zmienić";
//     secondOption.textContent = "wybierz produkt, który chcesz zjeść";
// };

// // WPROWADZANIE ANGIELSKICH NAZW_____________________________________
// const englishLanguage = () => {
//     engBtn.classList.add("button--active");
//     plBtn.classList.remove("button--active");
//     text.textContent = "grams";
//     gramsInput.placeholder = "enter grammage";
//     firstOption.textContent = "select the product, which you want to change";
//     secondOption.textContent = "select the product, which you want to eat";
// };

// // SPRAWDANIE JEZYKA_____________________________________
// (document.documentElement.lang === "pl")? polishLanguage() : englishLanguage();

// // PRZYCISK PL_____________________________________
// plBtn.addEventListener("click", ()=> {
//     polishLanguage();
// })

// // PRZYCISK ENG_____________________________________
// engBtn.addEventListener("click", ()=> {
//     englishLanguage();
// })