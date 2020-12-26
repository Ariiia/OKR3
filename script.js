window.addEventListener("scroll", function(){

// menu
    let header=document.querySelector("header");
header.classList.toggle("sticky", window.scrollY>0);

})
// cursor
const cursor=document.querySelector(".cursor");
document.addEventListener("mousemove",(e)=>{
    cursor.style.left=e.clientX-10+'px';
    cursor.style.top=e.clientY-10+'px';

})

