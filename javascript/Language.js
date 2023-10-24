import { langOptions } from "./langOptions.js";
export class Language {
    constructor(text, gramsInput, firstOption, secondOption) {
        this.text = document.querySelector(text);
        this.gramsInput = document.querySelector(gramsInput);
        this.firstOption = document.querySelector(firstOption);
        this.secondOption = document.querySelector(secondOption);
    }
    ;
    searchIndex(langPage) {
        let indexNumber = 0;
        langOptions.forEach((element, index) => {
            if (langPage === element.language) {
                indexNumber = index;
            }
            ;
        });
        return indexNumber;
    }
    ;
    insertLanguage(index) {
        this.text.textContent = langOptions[index].click;
        this.gramsInput.placeholder = langOptions[index].gramsInput;
        this.firstOption.textContent = langOptions[index].firstOption;
        this.secondOption.textContent = langOptions[index].secondOption;
    }
    ;
}
;
