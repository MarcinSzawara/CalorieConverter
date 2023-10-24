import { Language } from "./Language.js";
import { Options } from "./Options.js";
// import { Counter } from "./Counter.js";

 export class Aplication {
    constructor(
        langPage: String,
        ) {
        this.langPage = langPage;
        this.language = new Language(".aplication__text", ".aplication__grams", ".aplication__first--product option", ".aplication__second--product option");
        this.options = new Options(".aplication__first--product", ".aplication__second--product");
        this.number = this.language.searchIndex(this.langPage);
        document.querySelectorAll(".button").forEach(element => element.addEventListener('click', this.pressButton.bind(this)));
        this.render();
    };

    render() {
        this.language.insertLanguage(this.number);
        this.options.insertOption(this.langPage, this.number);
    };

    pressButton(e) {
        const jezyk = e.target.dataset.option;
        document.documentElement.lang = jezyk;
        console.log(this.langPage)
        this.render();
    }
};









// const sprawdzanie = document.documentElement.lang;

// const language = new Language(
//     sprawdzanie, 
//     ".language__polish", 
//     ".language__english", 
//     ".aplication__text",
//     ".aplication__grams",
//     ".aplication__first--product option",
//     ".aplication__second--product option",
//     );

// const options = new Options(
//     sprawdzanie,
//     ".aplication__first--product",
//     ".aplication__second--product",
//     products,
// );

// const counter = new Counter(
//     ".aplication__number",
//     ".aplication__grams",
//     ".aplication__first--product",
//     ".aplication__second--product",
//     products
// );

// language.chooseLanguage();
// options.ktory();