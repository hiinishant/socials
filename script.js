const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

const container = document.querySelector(".smoke-container");

document.addEventListener("mousemove",(e)=>{

const smoke = document.createElement("div");
smoke.classList.add("smoke");

smoke.style.left = e.clientX + "px";
smoke.style.top = e.clientY + "px";

container.appendChild(smoke);

setTimeout(()=>{
smoke.remove();
},800);

});

const buttons = document.querySelectorAll("a");

buttons.forEach(btn=>{
btn.addEventListener("mousemove",(e)=>{
btn.style.transform = "scale(1.1)";
});

btn.addEventListener("mouseleave",()=>{
btn.style.transform = "scale(1)";
});
});