      
let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");
console.log(card);
let blog = document.querySelector(".trends");
let mainPage = document.querySelector(".main");
 
      function homes(){
            mainPage.style.display="flex";
            card.style.display="block";
            card2.style.display="block";
            blog.style.display="block";
            about.style.display="block";
            document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="rgba(89, 238, 238)";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black";

      }

function shops(){
mainPage.style.display="none";
blog.style.display="none";
about.style.display="none";
card.style.display="block";
card2.style.display="block";
document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color=" rgba(89, 238, 238)";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black";
 }
      function blogs(){
            mainPage.style.display="none";
            card.style.display="none";
            card2.style.display="none";
            blog.style.display="block";
            about.style.display="none";
document.getElementById("blog").style.color=" rgba(89, 238, 238)";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black";
  }
      function abouts(){
            mainPage.style.display="none";
            card.style.display="none";
            card2.style.display="none";
            blog.style.display="none";
            about.style.display="block";
document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="rgba(89, 238, 238)";
      }
       function contacts(){
            mainPage.style.display="none";
            card.style.display="none";
            card2.style.display="none";
            blog.style.display="none";
            about.style.display="none";
            contact.style.display="block";
document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black";
document.getElementById("contact").style.color="rgba(89, 238, 238)";
       }
       //cart
      
      
       function show(img){
           let  newImg = document.getElementById("newImg");
           newImg.src=img.src;
           mainPage.style.display="none";
           card.style.display="none";
           card2.style.display="none";
           blog.style.display="none";
           about.style.display="none";
           contact.style.display="none";
         document.querySelector(".cart").style.display="flex"  
       }
         function addCart(){
                 alert("Added to cart");
                 location.reload()

         }