import { languageOptions } from "../objects/languageOptions.js";
import { products } from "../objects/products.js";
export class Language {
    constructor(result, text, gramsInput, allInputProducts) {
        this.result = result;
        this.text = text;
        this.gramsInput = gramsInput;
        this.allInputProducts = allInputProducts;
    }
    ;
    searchIndex(languagePage) {
        let indexNumber = 1;
        languageOptions.forEach((element, index) => {
            if (languagePage === element.language) {
                indexNumber = index;
            }
            ;
        });
        return indexNumber;
    }
    ;
    insertLanguage(indexNumber) {
        this.result.textContent = "";
        this.text.textContent = languageOptions[indexNumber].click;
        this.gramsInput.placeholder = languageOptions[indexNumber].gramsInput;
        this.gramsInput.value = "";
    }
    ;
    insertOption(indexNumber) {
        let nameOption = languageOptions[indexNumber].firstOption;
        this.allInputProducts.forEach(input => {
            input.textContent = "";
            input.innerHTML += `<option selected disabled value="">${nameOption}</option>`;
            products.forEach(product => {
                const arrayProduct = Object.values(product);
                const productName = arrayProduct[indexNumber];
                const option = document.createElement("option");
                option.textContent = productName;
                input.appendChild(option);
            });
            nameOption = languageOptions[indexNumber].secondOption;
        });
    }
    ;
}
;
