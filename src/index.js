import generateJoker from "./generateJoker";
import "./style/main.scss"
import flower from "./images/flower.png"

const flowerEle = document.getElementById("flower")
flowerEle.src = flower
console.log(generateJoker())