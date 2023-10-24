import { langOptions } from "./langOptions.js";

export class Language {
    constructor( 
        text: string, 
        gramsInput: string, 
        firstOption: string, 
        secondOption: string,
        ) {
        this.text = document.querySelector(text);
        this.gramsInput = document.querySelector(gramsInput);
        this.firstOption = document.querySelector(firstOption);
        this.secondOption = document.querySelector(secondOption);
    };

    searchIndex(langPage :string) {
        let indexNumber :number = 0;
        langOptions.forEach((element, index) => {
            if (langPage === element.language) {
                indexNumber = index;
            };
        });
        return indexNumber;
    };

    insertLanguage(index :number) {
        this.text.textContent = langOptions[index].click;
        this.gramsInput.placeholder = langOptions[index].gramsInput;
        this.firstOption.textContent = langOptions[index].firstOption;
        this.secondOption.textContent = langOptions[index].secondOption;
    };
    };