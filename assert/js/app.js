import { displaySkills, rotateArticles } from "./function.js"


window.onload = ()=>{
  setInterval(rotateArticles, 10000);
  displaySkills()
}