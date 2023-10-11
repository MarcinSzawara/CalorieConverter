export class Counter {
    constructor(
        result: string, 
        gramsInput: string, 
        firstProduct: string, 
        secondProduct: string,
        products
        ) {
        this.products = products
        let zmiennaOne: any;
        let zmiennaTwo: any;
        this.result = document.querySelector(result);
        this.gramsInput = document.querySelector(gramsInput);
        this.firstProduct = document.querySelector(firstProduct);
        this.secondProduct = document.querySelector(secondProduct);

        this.secondProduct.addEventListener("input", this.mainFunction.bind(this))

    };

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
            const zOne: number = Number(this.gramsInput.value) * (Number(this.zmiennaOne)/100);
            const xTwo: number = (zOne / Number(this.zmiennaTwo))*100;
            this.result.textContent = String(xTwo);
};