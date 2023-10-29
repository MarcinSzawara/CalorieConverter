import { languageOptions } from "../objects/languageOptions.js";
import { products } from "../objects/products.js";
import { typeVariable } from "../types/types.js";

export class Counter {
    result:HTMLDivElement
    text:HTMLDivElement
    gramsInput: HTMLInputElement
    allInputProducts: NodeListOf<HTMLSelectElement>
    constructor(
        result: HTMLDivElement,
        text:HTMLDivElement,
        gramsInput: HTMLInputElement, 
        allInputProducts: NodeListOf<HTMLSelectElement>,
        ) {
        this.result = result;
        this.text = text;
        this.gramsInput = gramsInput;
        this.allInputProducts = allInputProducts;
        
    };

    checkInput(indexNumber:number) {
        if (this.gramsInput.value == "" || this.allInputProducts[0].value == "" || this.allInputProducts[1].value == "") {
            alert(languageOptions[indexNumber].alert);
            return false;
        } else {
            return true;
        };
    };

    extractCalories(inputProduct:HTMLInputElement, indexProduct:number) {
        let caloriesNumber:number;
        products.forEach((element:typeVariable) => {
            if (inputProduct.value == Object.values(element)[indexProduct]) {
                caloriesNumber = element.kcal;
            };
        });   
        return caloriesNumber;
    };

    countFunction(valueGrams:number, valueFirstProduct:number, valueSecondProduct:number) {
        const valueCalories = (((valueGrams * valueFirstProduct)/100)/valueSecondProduct)*100;
        return valueCalories;
    };

    insertResult(valueCalories:number, index:number) {
        this.result.textContent = `${Math.round(valueCalories)}`;
        this.text.textContent = languageOptions[index].text;
    };
};