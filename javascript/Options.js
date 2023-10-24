import { products } from "./products.js";
export class Options {
    constructor(firstProduct, secondProduct) {
        this.firstProduct = document.querySelector(firstProduct);
        this.secondProduct = document.querySelector(secondProduct);
    }
    ;
    insertOption(langPage, index, lolek) {
        products.forEach((element) => {
            const arrayProduct = Object.values(element);
            const productName = arrayProduct[index];
            const optionOne = document.createElement("option");
            const optionTwo = document.createElement("option");
            optionOne.textContent = productName;
            optionTwo.textContent = productName;
            this.firstProduct.appendChild(optionOne);
            this.secondProduct.appendChild(optionTwo);
        });
    }
    ;
}
;
