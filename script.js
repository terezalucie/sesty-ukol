// Výběr cateringu

// povinná část ↓ 


const justFood = (amountOfPeople) => {
    let priceForOne = 1000
    if(amountOfPeople === "1"){
        return `cateringem od Just Food pro ${amountOfPeople} osobu je za předpokládanou částku ${priceForOne * amountOfPeople} Kč`
    } else if(amountOfPeople > 1 && amountOfPeople <= 4){
        return `cateringem od Just Food pro ${amountOfPeople} lidi je za předpokládanou částku ${priceForOne * amountOfPeople} Kč`
    } else {
        return `cateringem od Just Food pro ${amountOfPeople} lidí je za předpokládanou částku ${priceForOne * amountOfPeople} Kč`
    }
}
const yourMama = (amountOfPeople) => {
    let priceForOne = 2000
    if(amountOfPeople === "1"){
        return `cateringem od Just Food pro ${amountOfPeople} osobu je za předpokládanou částku ${priceForOne * amountOfPeople} Kč`
    } else if(amountOfPeople > 1 && amountOfPeople <= 4){
        return `cateringem od Just Food pro ${amountOfPeople} lidi je za předpokládanou částku ${priceForOne * amountOfPeople} Kč`
    } else {
        return `cateringem od Just Food pro ${amountOfPeople} lidí je za předpokládanou částku ${priceForOne * amountOfPeople} Kč`
    }
}
const flavourHaven = (amountOfPeople) => {
    let priceForOne = 3000
    if(amountOfPeople === "1"){
        return `cateringem od Just Food pro ${amountOfPeople} osobu je za předpokládanou částku ${priceForOne * amountOfPeople} Kč`
    } else if(amountOfPeople > 1 && amountOfPeople <= 4){
        return `cateringem od Just Food pro ${amountOfPeople} lidi je za předpokládanou částku ${priceForOne * amountOfPeople} Kč`
    } else {
        return `cateringem od Just Food pro ${amountOfPeople} lidí je za předpokládanou částku ${priceForOne * amountOfPeople} Kč`
    }
}

const createEvent = (nameOfEvent, amountOfPeople, catering) => {

    if(amountOfPeople < 0){
        return " "
    } else{
        return `Událost ${nameOfEvent} s ${catering(amountOfPeople)}.`
    }
}

// createEvent("Svatba", 150, yourMama)

// povinná část ↑ 
// nepovinná část ↓ 

const JF = document.querySelector("#plan1")
const YM = document.querySelector("#plan2")
const FH = document.querySelector("#plan3")


JF.addEventListener("click", () => {
    JF.classList.add("plan--selected")
    YM.classList.remove("plan--selected")
    FH.classList.remove("plan--selected")

})
YM.addEventListener("click", () => {
    YM.classList.add("plan--selected")
    JF.classList.remove("plan--selected")
    FH.classList.remove("plan--selected")

})
FH.addEventListener("click", () => {
    FH.classList.add("plan--selected")
    YM.classList.remove("plan--selected")
    JF.classList.remove("plan--selected")

})

const btn = document.getElementById("btn")
const textInput = document.getElementById("myInput")
const numberInput = document.getElementById("myNumber")
const vysledek = document.getElementById("vysledek")


btn.addEventListener("click", () => {
    const enteredText = textInput.value
    const enteredNumber = numberInput.value
    if(JF.classList.contains("plan--selected")){
        vysledek.textContent = `${createEvent(enteredText, enteredNumber, justFood)}`
    } else if(YM.classList.contains("plan--selected")){
        vysledek.textContent = `${createEvent(enteredText, enteredNumber, yourMama)}`
    } else if(FH.classList.contains("plan--selected")){
        vysledek.textContent = `${createEvent(enteredText, enteredNumber, flavourHaven)}`
    } 
})
// nepovinná část ↑ 

/* ŘESENÍ:
    1. Vytvořila jsem tři funkce podle zadání, ve kterých jsem vytvořila stejnojmennou proměnnou, která představuje cenu cateringu za jednoho člověka. Tuto proměnou jsem vypsala do returnu spolu s parametrem a vynásobila jsem je. 
2. Poté jsem vytvořila 4 proměnnou se 3 vstupními parametry. Třetí vstupní parametr pak představuje prostor pro funkci ze třech cateringů.
4. Při zkoušení kódu jsem si pak všimla, že se správně neskloňuje slovo lidé, a proto jsem přidala podmínku se skloňováním do jednotlivých funkcí. A funkci jsme zavolala.

5. V nepovinné části jsem si chtěla procvičit manipulaci s elementy, html, css a addEventListener.
6. Vzala jsem si předlohu z minulého úkolu (ceník) a použila html a css, které jsem trochu upravila.
7. Propojila jsem elementy s jednotlivými funkcemi, tak aby stránka byla interaktivnější.

*/