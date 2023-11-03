import { typeLanguage } from "../types/types";

export const languageOptions: typeLanguage[] = [
    {
        language: "pl",
        click: "Kliknij!",
        text: "gramów", 
        gramsInput: "wpisz gramature", 
        firstOption: "wybierz produkt, który chcesz zmienić", 
        secondOption: "wynierz produkt, który chcesz zjeść",
        button: "language__polish",
        alert: "prosze uzupełnić fomularz",
    },
    {
        language: "eng",
        click: "Click!",
        text: "grams", 
        gramsInput: "enter grammage", 
        firstOption: "select the product, which you want to change", 
        secondOption: "select the product, which you want to eat",
        button: "language__english",
        alert: "please, fill in a form ",
    }
];