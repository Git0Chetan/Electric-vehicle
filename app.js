

const one=document.getElementsByClassName('sol');
const mod=document.getElementsByClassName("mod");
const solcon=document.getElementsByClassName("solCon");
const but=document.getElementById("but");

const one2=document.getElementsByClassName('sol2');
const mod2=document.getElementsByClassName("mod2");
const solcon2=document.getElementsByClassName("solCon2");
const but2=document.getElementById("but2");


// function fun(){
//     one.innerHTML="HEllo";
// }
// one.addEventListener("click",fun());
for(let i=0;i<one.length;i++){
  one[i].addEventListener("click", function() {
    solcon[0].style.display="none";
    mod[0].style.display="flex";
  });
}


but.addEventListener("click",()=>{
    solcon[0].style.display="flex";
    mod[0].style.display="none";
});


for(let i=0;i<one2.length;i++){
  one2[i].addEventListener("click", function() {
    solcon2[0].style.display="none";
    mod2[0].style.display="flex";
  });
}


but2.addEventListener("click",()=>{
    solcon2[0].style.display="flex";
    mod2[0].style.display="none";
});