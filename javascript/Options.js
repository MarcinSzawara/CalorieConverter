export class Options {
    constructor(lang, firstProduct, secondProduct, products) {
        this.lang = lang;
        this.products = products;
        this.firstProduct = document.querySelector(firstProduct);
        this.secondProduct = document.querySelector(secondProduct);
    }
    wstrzykiwanie() {
        this.products.forEach(element => {
            let optionOne = document.createElement("option");
            let optionTwo = document.createElement("option");
            optionOne.textContent = element.plName;
            optionTwo.textContent = element.plName;
            this.firstProduct.appendChild(optionOne);
            this.secondProduct.appendChild(optionTwo);
        });
    }
}
;
