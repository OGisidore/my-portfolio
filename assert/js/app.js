// the nav parameter

var navBa = document.querySelector('.navbars');

document.querySelector('#menu').onclick = () =>{
    navBa.classList.toggle('active');
    
}

window.onscroll = ()=>{
    navBa.classList.remove('active');

}

let articles = document.querySelectorAll('.article');


// function showArticle(){
//     for(art of articles){
//         art.classList.remove('active');
//     }
    
// }

// document.addEventListener('DOMContentLoaded', ()=>{
//     function showArticlet(){
//         for(article of articles){
//             if(article.classList === 'active'){
//                 article.classList.remove('active');
//             } else article.classList.toggle('active');
//         }
        
        
//     }

//     setTimeout(showArticlet, 4000);

// })

document.addEventListener("DOMContentLoaded", function () {
    const articles = document.querySelectorAll(".article");
  
    function showArticle(index) {
      articles.forEach((article, i) => {
        article.classList.toggle("active", i === index);
      });
    }
  
    let currentIndex = 0;
  
    function rotateArticles() {
      showArticle(currentIndex);
      currentIndex = (currentIndex + 1) % articles.length;
    }
  
    // Afficher la première div immédiatement
    showArticle(currentIndex);
  
    // Utilisation de setInterval pour afficher les divs toutes les 3 secondes
    setInterval(rotateArticles, 10000);
  });