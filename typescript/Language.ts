export class Language {
    
    constructor(
        lang: string, 
        plBtn: string, 
        engBtn: string, 
        text: string, 
        gramsInput: string, 
        firstOption: string, 
        secondOption: string
        ) {
        this.lang = lang;
        this.plBtn = document.querySelector(plBtn);
        this.engBtn = document.querySelector(engBtn);
        this.text = document.querySelector(text);
        this.gramsInput = document.querySelector(gramsInput);
        this.firstOption = document.querySelector(firstOption);
        this.secondOption = document.querySelector(secondOption);

        this.plBtn.addEventListener("click", this.polski.bind(this));
        this.engBtn.addEventListener("click", this.angielski.bind(this));
    };

    chooseLanguage() {
        (this.lang == "pl")? this.polski() : this.angielski();
    };

    polski() {
        this.plBtn.classList.add("button--active");
        this.engBtn.classList.remove("button--active");
        this.text.textContent = "gramów";
        this.gramsInput.placeholder = "wpisz gramature";
        this.firstOption.textContent = "wybierz produkt, który chcesz zmienić";
        this.secondOption.textContent = "wybierz produkt, który chcesz zjeść";
    };

    angielski() {
        this.engBtn.classList.add("button--active");
        this.plBtn.classList.remove("button--active");
        this.text.textContent = "grams";
        this.gramsInput.placeholder = "enter grammage";
        this.firstOption.textContent = "select the product, which you want to change";
        this.secondOption.textContent = "select the product, which you want to eat";
    };
};