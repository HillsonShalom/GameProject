const cell_1 = document.querySelector(`._1`)
const cell_2 = document.querySelector(`._2`)
const cell_3 = document.querySelector(`._3`)
const cell_4 = document.querySelector(`._4`)
const cell_5 = document.querySelector(`._5`)
const cell_6 = document.querySelector(`._6`)
const cell_7 = document.querySelector(`._7`)
const cell_8 = document.querySelector(`._8`)
const cell_9 = document.querySelector(`._9`)


const rand = Boolean(Math.round(Math.random()));

let corser = `X`

if(rand)
{
     corser = `X`
}
else{
     corser = `⃝`
}


cell_1.addEventListener("click", () => {
    const number = 1
    cell_1.textContent = corser
})
cell_2.addEventListener("click", () => {
    const number = 2
    cell_2.textContent = corser
})
cell_3.addEventListener("click", () => {
    const number = 3
    cell_3.textContent = corser
})
cell_4.addEventListener("click", () => {
    const number = 4
    cell_4.textContent = corser
})
cell_5.addEventListener("click", () => {
    const number = 5
    cell_5.textContent = corser
})
cell_6.addEventListener("click", () => {
    const number = 6
    cell_6.textContent = corser
})
cell_7.addEventListener("click", () => {
    const number = 7
    cell_7.textContent = corser
})
cell_8.addEventListener("click", () => {
    const number = 8
    cell_8.textContent = corser
})
cell_9.addEventListener("click", () => {
    const number = 9
    cell_9.textContent = corser
})
