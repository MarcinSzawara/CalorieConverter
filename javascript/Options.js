export class Options {
    constructor(lang, firstProduct, secondProduct, products) {
        this.lang = lang;
        this.products = products;
        this.firstProduct = document.querySelector(firstProduct);
        this.secondProduct = document.querySelector(secondProduct);
    }
    ktory() {
        (this.lang == "pl") ? this.wstrzykiwaniePolskie() : this.wstrzykiwanieAngielskie();
    }
    ;
    wstrzykiwaniePolskie() {
        this.products.forEach(element => {
            let optionOne = document.createElement("option");
            let optionTwo = document.createElement("option");
            optionOne.textContent = element.plName;
            optionTwo.textContent = element.plName;
            this.firstProduct.appendChild(optionOne);
            this.secondProduct.appendChild(optionTwo);
        });
    }
    ;
    wstrzykiwanieAngielskie() {
        this.products.forEach(element => {
            let optionOne = document.createElement("option");
            let optionTwo = document.createElement("option");
            optionOne.textContent = element.engName;
            optionTwo.textContent = element.engName;
            this.firstProduct.appendChild(optionOne);
            this.secondProduct.appendChild(optionTwo);
        });
    }
    ;
}
;
