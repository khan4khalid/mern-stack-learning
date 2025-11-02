let btn = document.querySelector("button");
let ul=document.querySelector("ul");
let input=document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=input.value;
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);

    ul.appendChild(item);
    input.value="";
});


ul.addEventListener("click",function(){
    if(event.target.nodeName=="BUTTON"){
        let list=event.target.parentElement;
        list.remove();
        console.log("deleted");
    }

    
})

//Event delegation
// let delbtns=document.querySelectorAll(".delete");
// for(let delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let par=this.parentElement;
        
//         console.log(par);
//         par.remove();
//     });
// }