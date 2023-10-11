import { Language } from "./Language.js";
import { Options } from "./Options.js";
import { products } from "./products.js";
import { Counter } from "./Counter.js";

const sprawdzanie = document.documentElement.lang;

console.log('22222222')

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