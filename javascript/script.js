// IMPORTOWANIE ELEMENTÓW_____________________________________
import { products } from "./_products.js";
import { Language } from "./Language.js";
// POBIERANIE ELEMENTÓW_____________________________________
const plBtn = document.querySelector(".language__polish");
const engBtn = document.querySelector(".language__english");
const gramsInput = document.querySelector(".aplication__grams");
const firstProduct = document.querySelector(".aplication__first--product");
const firstOption = document.querySelector(".aplication__first--product option");
const secondProduct = document.querySelector(".aplication__second--product");
const secondOption = document.querySelector(".aplication__second--product option");
const result = document.querySelector(".aplication__number");
const text = document.querySelector(".aplication__text");
let zmiennaOne;
let zmiennaTwo;
// WSTRZYKIWANIE OPCJI W INPUTY SELECT_____________________________________
const liczenie = products.forEach(element => {
    let optionOne = document.createElement("option");
    let optionTwo = document.createElement("option");
    optionOne.textContent = element.plName;
    optionTwo.textContent = element.plName;
    firstProduct.appendChild(optionOne);
    secondProduct.appendChild(optionTwo);
});
result.addEventListener("click", () => {
    mainFunction();
});
// PROBNA FUNKCJA LICZENIA_____________________________________
const mainFunction = () => {
    const firstIndex = products.forEach((element, index) => {
        if (element.plName === firstProduct.value) {
            zmiennaOne = products[index].kcal;
        }
    });
    const secondIndex = products.forEach((element, index) => {
        if (element.plName === secondProduct.value) {
            zmiennaTwo = products[index].kcal;
        }
    });
    const zOne = Number(gramsInput.value) * (Number(zmiennaOne) / 100);
    const xTwo = (zOne / Number(zmiennaTwo)) * 100;
    result.textContent = String(xTwo);
};
// WPROWADZENIE POLSKICH NAZW_____________________________________
const polishLanguage = () => {
    plBtn.classList.add("button--active");
    engBtn.classList.remove("button--active");
    text.textContent = "gramów";
    gramsInput.placeholder = "wpisz gramature";
    firstOption.textContent = "wybierz produkt, który chcesz zmienić";
    secondOption.textContent = "wybierz produkt, który chcesz zjeść";
};
// WPROWADZANIE ANGIELSKICH NAZW_____________________________________
const englishLanguage = () => {
    engBtn.classList.add("button--active");
    plBtn.classList.remove("button--active");
    text.textContent = "grams";
    gramsInput.placeholder = "enter grammage";
    firstOption.textContent = "select the product, which you want to change";
    secondOption.textContent = "select the product, which you want to eat";
};
// SPRAWDANIE JEZYKA_____________________________________
(document.documentElement.lang === "pl") ? polishLanguage() : englishLanguage();
// PRZYCISK PL_____________________________________
plBtn.addEventListener("click", () => {
    polishLanguage();
});
// PRZYCISK ENG_____________________________________
engBtn.addEventListener("click", () => {
    englishLanguage();
});
const start = new Language(document.documentElement.lang);
start.dawaj();
