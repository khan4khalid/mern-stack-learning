let btn = document.querySelectorAll("button");
 
for(btn of btn){
    // btn.onclick=sayhello;
    // btn.onmouseenter=function () {
    //     btn.style.background="red";
    // }
    btn.addEventListener("click",sayhello);
    btn.addEventListener("mouseenter",function () {
        btn.style.background="red";
    });


}
function sayhello(){
    alert("hellow orld");
}