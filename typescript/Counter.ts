import { langOptions } from "./langOptions.js";

export class Counter {
    constructor(
        result: any,
        text:any,
        gramsInput: any, 
        allInputProduct: any,
        start:any,
        index:number
        ) {
        this.result = result;
        this.text = text;
        this.gramsInput = gramsInput;
        this.allInputProduct = allInputProduct;
        this.index = index;
        start.addEventListener('click', this.checkInput.bind(this));
    };

    checkInput() {};

    mainFunction() {};

    
            // const firstIndex = this.products.forEach((element, index) => {
            //     if (element.plName === this.firstProduct.value) {
            //         this.zmiennaOne = this.products[index].kcal;
            //     }
            // });  
            // const secondIndex = this.products.forEach((element, index) => {
            //     if (element.plName === this.secondProduct.value) {
            //         this.zmiennaTwo = this.products[index].kcal;
            //     }
            // });
            // const zOne: number = Number(this.gramsInput.value) * (Number(this.zmiennaOne)/100);
            // const xTwo: number = (zOne / Number(this.zmiennaTwo))*100;
            // this.result.textContent = String(xTwo);
};