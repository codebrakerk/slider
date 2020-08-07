const slides=document.querySelectorAll(".slide");
const prevbtn=document.querySelector(".prevBtn");
const nextbtn=document.querySelector(".nextBtn");


slides.forEach(function(slide,index){
  slide.style.left=`${index*100}%`;
});
let counter=0;
prevbtn.addEventListener("click",function(){
  counter--;
  carousel();
})
nextbtn.addEventListener("click",function(){
  counter++;
  carousel();
})
function carousel(){
/*

if(counter<slides.length-1){
  nextbtn.style.display="block";
}else{
  nextbtn.style.display="none";
}
if(counter>0){
  prevbtn.style.display="block";
}else{
  prevbtn.style.display="none";
}*/
if(counter==slides.length){
  counter=0;
}
if(counter<0){
  counter=slides.length-1;
}


  slides.forEach(function(slide){
    slide.style.transform=`translateX(-${counter*100}%)`;
  });
}
//prevbtn.style.display="none";