var btn6=document.getElementById("btn6");
var inp3=document.getElementById("inp3");
var inp4=document.getElementById("inp4");
var inp5=document.getElementById("inp5");
var inp6=document.getElementById("inp6");
var p=document.getElementById("p");
var p1=document.getElementById("p1");
var p2=document.getElementById("p2");
var p3=document.getElementById("p3");
var pattern= /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
btn6.addEventListener('click',function(v){
    v.preventDefault();
    localStorage.setItem("username" ,inp5.value)
    localStorage.setItem("password" ,inp6.value)
    if(inp5.value.match(pattern) && inp3.value.length>=2&& inp4.value.length>=2 && inp6.value.length>=2){
        setTimeout(()=>{
            window.location="index.html"
           })
        }
    if(!inp5.value.match(pattern)){
        p.style.visibility='visible'
    }else{
        p.style.visibility='hidden'
    }
    if(inp3.value.length<2){
        p1.style.visibility='visible'
    }else{
        p1.style.visibility='hidden'
    }
    if(inp4.value.length<2){
        p2.style.visibility='visible'
    }else{
        p2.style.visibility='hidden'
    }
    if(inp6.value.length<2){
        p3.style.visibility='visible'
    }else{
        p3.style.visibility='hidden'
    }
})

