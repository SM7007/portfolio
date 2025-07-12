let kunai=document.getElementById("kunai");
let contact2=document.getElementById("contact2")
let link=document.getElementsByClassName("links")
kunai.addEventListener("click",()=>{
   kunai.classList.add("rotate");

   
   kunai.addEventListener("animationend",()=>{
    kunai.classList.remove("rotate")
    contact2.classList.add("madara")
   
   })
 
  
})

kunai.addEventListener("dblclick",()=>{
    kunai.classList.add("rotate");
    
    
    kunai.addEventListener("animationend",()=>{
     kunai.classList.remove("rotate")
     contact2.classList.remove("madara")
    })
  
   
 })
 
 
