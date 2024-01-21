let input=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
btn.addEventListener("click",function()
{
    let item=document.createElement("li");
    let delBtn=document.createElement("button");
    delBtn.innerText= "Delete";
    delBtn.classList.add("delete");
    item.innerText=input.value;
    ul.appendChild(item);
    item.appendChild(delBtn);
    input.value="";
});
ul.addEventListener("click",function(event)
{
    if(event.target.nodeName=="BUTTON")
    {
       let par =event.target.parentElement;
        par.remove();
    }
});
