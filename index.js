const ratingEls=document.querySelectorAll(".rating");
const btn=document.querySelector(".button");
// const container=document.querySelector(".container");
let feedback="";
ratingEls.forEach((rating)=>{
    rating.addEventListener("click",(event)=>{
        removeActive();
        feedback=event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    })
})
function removeActive(){
ratingEls.forEach((rating)=>{
    rating.classList.remove("active");
})
}
btn.addEventListener("click",()=>{
   if(feedback!="")container.innerHTML=`
   <br/>
   <strong> Thank you!</strong><br/><br/><br/>
   <strong>Feedback : ${feedback} </strong><br/><br/>
   <p>We will use your feedback to improve our customer support.</p><br/>
   ` 
})




