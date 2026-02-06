const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");
const yesText=document.getElementById("yesText");
const question=document.getElementById("question");
const buttons=document.getElementById("buttons");
const clickHere=document.getElementById("clickHere");

const man=document.getElementById("man");
const girl=document.getElementById("girl");
const heart=document.getElementById("heart");

/* NO BUTTON RUNS */
noBtn.addEventListener("mouseover",()=>{
const x=Math.random()*(window.innerWidth-noBtn.offsetWidth);
const y=Math.random()*(window.innerHeight-noBtn.offsetHeight);
noBtn.style.position="absolute";
noBtn.style.left=x+"px";
noBtn.style.top=y+"px";
});

/* YES CLICK */
yesBtn.addEventListener("click",()=>{

question.style.display="none";
buttons.style.display="none";
yesText.style.display="block";

man.style.opacity=1;
girl.style.opacity=1;

const gap = -60; // space between them
const center = window.innerWidth / 2;

const manFinal = center - man.offsetWidth - gap;
const girlFinal = center + gap;

man.animate(
[
 { left:"-300px" },
 { left: manFinal + "px" }
],
{ duration:2500, fill:"forwards", easing:"ease-out" }
);

girl.animate(
[
 { left: window.innerWidth + "px" },
 { left: girlFinal + "px" }
],
{ duration:2500, fill:"forwards", easing:"ease-out" }
);

/* HEART */
setTimeout(()=>{
heart.style.display="block";
heart.style.left="50%";
heart.style.top="50%";
heart.style.transform="translate(-50%,-50%) scale(0)";
heart.animate([
{transform:"translate(-50%,-50%) scale(0)"},
{transform:"translate(-50%,-50%) scale(1.5)"},
{transform:"translate(-50%,-50%) scale(1)"}
],{duration:800,fill:"forwards"});
},2600);

/* SHOW CLICK HERE */
setTimeout(()=>{
clickHere.style.display="inline-block";
},3800);

});
