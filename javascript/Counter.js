export class Counter {
    constructor(result, gramsInput, firstProduct, secondProduct, products) {
        this.products = products;
        let zmiennaOne;
        let zmiennaTwo;
        this.result = document.querySelector(result);
        this.gramsInput = document.querySelector(gramsInput);
        this.firstProduct = document.querySelector(firstProduct);
        this.secondProduct = document.querySelector(secondProduct);
        this.secondProduct.addEventListener("input", this.mainFunction.bind(this));
    }
    ;
    mainFunction() {
        const firstIndex = this.products.forEach((element, index) => {
            if (element.plName === this.firstProduct.value) {
                this.zmiennaOne = this.products[index].kcal;
            }
        });
        const secondIndex = this.products.forEach((element, index) => {
            if (element.plName === this.secondProduct.value) {
                this.zmiennaTwo = this.products[index].kcal;
            }
        });
        const zOne = Number(this.gramsInput.value) * (Number(this.zmiennaOne) / 100);
        const xTwo = (zOne / Number(this.zmiennaTwo)) * 100;
        this.result.textContent = String(xTwo);
    }
    ;
}
