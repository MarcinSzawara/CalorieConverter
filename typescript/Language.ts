import { langOptions } from "./langOptions.js";
import { products } from "./products.js";

export class Language {
    constructor( 
        text: string, 
        gramsInput: string, 
        allInputProduct: string,
        ) {
        this.text = document.querySelector(text);
        this.gramsInput = document.querySelector(gramsInput);
        this.allInputProduct = document.querySelectorAll(allInputProduct);
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
    };

    insertOption(index :number, inputProduct = this.allInputProduct) {
        let nameOption:string = langOptions[index].firstOption;
        inputProduct.forEach(elementOne => {
            elementOne.textContent = "";
            elementOne.innerHTML += `<option selected disabled value="">${nameOption}</option>`;
            products.forEach((elementTwo) => {
                        const arrayProduct = Object.values(elementTwo);
                        const productName = arrayProduct[index];
                        const option = document.createElement("option");
                        option.textContent = productName;
                        elementOne.appendChild(option);
                    });
            nameOption = langOptions[index].secondOption;
        });
    };
};