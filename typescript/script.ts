import { Language } from "./Language.js";
import { Counter } from "./Counter.js";

 export class Aplication {
    constructor(
        langPage: String,
        ) {
        this.langPage = langPage;
        

        this.results = document.querySelector(".aplication__number");
        this.text = document.querySelector(".aplication__text");
        this.gramsInput = document.querySelector(".aplication__grams");
        this.allInputProduct = document.querySelectorAll(".aplication_product");
        this.start = document.querySelector(".aplication__circle-external");

        this.language = new Language(this.text , this.gramsInput, this.allInputProduct);
        this.number = this.language.searchIndex(this.langPage);
        this.counter = new Counter(this.results, this.text, this.gramsInput, this.allInputProduct, this.start, this.number);
        

        document.querySelectorAll(".button").forEach(element => element.addEventListener('click', this.pressButton.bind(this)));

        this.render();
    };

    render() {
        this.language.insertLanguage(this.number);
        this.language.insertOption(this.number);
    };

    pressButton(e) {
        this.langPage = e.target.dataset.option;
        this.number = this.language.searchIndex(this.langPage);
        this.render();
    };
};