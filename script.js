var signup=document.getElementById("signup");
var btn5=document.getElementById("btn5");
var inp1=document.getElementById("inp1");
var inp2=document.getElementById("inp2");
let getUsername=localStorage.getItem("username");
let getPassword=localStorage.getItem("password");
var hide=document.getElementById("hide");

signup.onclick=function(){
    setTimeout(()=>{
        window.location="index2.html"
    })
}
btn5.addEventListener('click',function(e){
    e.preventDefault();
    if(inp2.value===''||inp1.value===''){
        hide.style.visibility='visible'
    }else{
        if(getUsername && getUsername.trim()===inp1.value  &&  getPassword && getPassword.trim()===inp2.value){
            setTimeout(()=>{
             window.location="index3.html"
            })
         }else{
            hide.style.visibility='visible'
        }
    }
})
