const plBtn: HTMLButtonElement = document.querySelector(".language__polish");
const engBtn: HTMLButtonElement = document.querySelector(".language__english");
const gramsInput: HTMLInputElement = document.querySelector(".aplication__grams");
const firstProduct: HTMLInputElement = document.querySelector(".aplication__first--product");
const firstOption: HTMLInputElement = document.querySelector(".aplication__first--product option");
const secondProduct: HTMLInputElement = document.querySelector(".aplication__first--product");
const secondOption: HTMLInputElement = document.querySelector(".aplication__second--product option");
const result: HTMLDivElement = document.querySelector(".aplication__number");
const text: HTMLDivElement = document.querySelector(".aplication__text");

// WPROWADZENI POLSKICH NAZW________________________
const polishLanguage = () => {
    plBtn.classList.add("button--active");
    text.textContent = "gramów";
    gramsInput.placeholder = "wpisz gramature";
    firstOption.textContent = "wybierz produkt, który chcesz zmienić";
    secondOption.textContent = "wybierz produkt, który chcesz zjeść";
};

// WPROWADZANIE ANGIELSKICH NAZW________________________
const englishLanguage = () => {
    engBtn.classList.add("button--active");
    text.textContent = "grams";
    gramsInput.placeholder = "enter grammage";
    firstOption.textContent = "select the product, which you want to change";
    secondOption.textContent = "select the product, which you want to eat";
};

// SPRAWDANIE JEZYKA________________________
(document.documentElement.lang === "pl")? polishLanguage() : englishLanguage();

plBtn.addEventListener("click", ()=> {
    engBtn.classList.remove("button--active");
    polishLanguage();
})

engBtn.addEventListener("click", ()=> {
    plBtn.classList.remove("button--active");
    englishLanguage();
})



