import { skills } from "./Data.js";



const slides = document.querySelectorAll('.slide');
const navBar = document.querySelector('.navbars');
const nav = document.querySelector('#menu')
const competences = document.querySelector(".theskills")
let currentIndex = 0;



// function to show nav bar when we are on smartphone and tablet
nav.onclick = () => {
    navBar.classList.toggle('active');

}
// function to hide nav bar when we are on smartphone and tablet

window.onscroll = () => {
    navBar.classList.remove('active');

}





const showArticle = (index) => {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
}



export const rotateArticles = () => {
    showArticle(currentIndex);
    currentIndex = (currentIndex + 1) % slides.length;
}

// showArticle(currentIndex);




// function to display Skills

 export const displaySkills = ()=>{
    skills.map((skil)=>{
        console.log(skil);
        competences.innerHTML += `<div class="skill">
        <img src=${skil.imgUrl} alt="maquette creation site e-commerce">
        <h3>${skil.name.toUpperCase()}</h3>
        <p>${skil.status}</p>
    </div>`
    })

}
