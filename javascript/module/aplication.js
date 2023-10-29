import { Language } from "./language.js";
import { Counter } from "./counter.js";
export class Aplication {
    constructor(languagePage) {
        this.languagePage = languagePage;
        this.result = document.querySelector(".aplication__number");
        this.text = document.querySelector(".aplication__text");
        this.gramsInput = document.querySelector(".aplication__grams");
        this.allInputProducts = document.querySelectorAll(".aplication_product");
        this.language = new Language(this.result, this.text, this.gramsInput, this.allInputProducts);
        this.counter = new Counter(this.result, this.text, this.gramsInput, this.allInputProducts);
        console.log(this.language);
        this.indexNumber = this.language.searchIndex(this.languagePage);
        document.querySelectorAll(".button").forEach(element => element.addEventListener('click', this.pressButton.bind(this)));
        document.querySelector(".aplication__circle-external").addEventListener('click', this.start.bind(this));
        this.render();
    }
    ;
    render() {
        this.language.insertLanguage(this.indexNumber);
        this.language.insertOption(this.indexNumber);
    }
    ;
    pressButton(e) {
        this.languagePage = e.target.dataset.option;
        this.indexNumber = this.language.searchIndex(this.languagePage);
        this.render();
    }
    ;
    start() {
        if (this.counter.checkInput(this.indexNumber)) {
            const valueGrams = this.gramsInput.value;
            const valueFirstProduct = this.counter.extractCalories(this.allInputProducts[0], this.indexNumber);
            const valueSecondProduct = this.counter.extractCalories(this.allInputProducts[1], this.indexNumber);
            const valueResult = this.counter.countFunction(valueGrams, valueFirstProduct, valueSecondProduct);
            this.counter.insertResult(valueResult, this.indexNumber);
        }
        ;
    }
    ;
}
;
