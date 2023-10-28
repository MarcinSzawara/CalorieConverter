import { Language } from "./Language.js";

 export class Aplication {
    constructor(
        langPage: String,
        ) {
        this.langPage = langPage;
        this.language = new Language(".aplication__text", ".aplication__grams", ".aplication_product");
        document.querySelectorAll(".button").forEach(element => element.addEventListener('click', this.pressButton.bind(this)));
        this.render();
    };

    render() {
        const number = this.language.searchIndex(this.langPage);
        this.language.insertLanguage(number);
        this.language.insertOption(number);
    };

    pressButton(e) {
        this.langPage = e.target.dataset.option;
        this.render();
    };
};