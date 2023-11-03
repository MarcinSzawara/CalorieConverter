import { languageOptions } from "../objects/languageOptions";
import { products } from "../objects/products";

export class Language {
    result:HTMLDivElement
    text:HTMLDivElement
    gramsInput:HTMLInputElement
    allInputProducts:NodeListOf<HTMLSelectElement>
    constructor( 
        result: HTMLDivElement,
        text:HTMLDivElement,
        gramsInput:HTMLInputElement, 
        allInputProducts: NodeListOf<HTMLSelectElement>,
        ) {
        this.result = result;
        this.text = text;
        this.gramsInput = gramsInput;
        this.allInputProducts = allInputProducts;
    };

    searchIndex(languagePage :string) {
        let indexNumber :number = 1;
        languageOptions.forEach((element, index) => {
            if (languagePage === element.language) {
                indexNumber = index;
            };
        });
        return indexNumber;
    };

    insertLanguage(indexNumber :number) {
        this.result.textContent = "";
        this.text.textContent = languageOptions[indexNumber].click;
        this.gramsInput.placeholder = languageOptions[indexNumber].gramsInput;
        this.gramsInput.value = "";
    };

    insertOption(indexNumber :number) {
        let nameOption:string = languageOptions[indexNumber].firstOption;
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
    };
};