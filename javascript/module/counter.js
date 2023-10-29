import { languageOptions } from "../objects/languageOptions.js";
import { products } from "../objects/products.js";
export class Counter {
    constructor(result, text, gramsInput, allInputProducts) {
        this.result = result;
        this.text = text;
        this.gramsInput = gramsInput;
        this.allInputProducts = allInputProducts;
    }
    ;
    checkInput(indexNumber) {
        if (this.gramsInput.value == "" || this.allInputProducts[0].value == "" || this.allInputProducts[1].value == "") {
            alert(languageOptions[indexNumber].alert);
            return false;
        }
        else {
            return true;
        }
        ;
    }
    ;
    extractCalories(inputProduct, indexProduct) {
        let caloriesNumber;
        products.forEach((element) => {
            if (inputProduct.value == Object.values(element)[indexProduct]) {
                caloriesNumber = element.kcal;
            }
            ;
        });
        return caloriesNumber;
    }
    ;
    countFunction(valueGrams, valueFirstProduct, valueSecondProduct) {
        const valueCalories = (((valueGrams * valueFirstProduct) / 100) / valueSecondProduct) * 100;
        return valueCalories;
    }
    ;
    insertResult(valueCalories, index) {
        this.result.textContent = `${Math.round(valueCalories)}`;
        this.text.textContent = languageOptions[index].text;
    }
    ;
}
;
