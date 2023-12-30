var inputEmail=document.querySelector(".input1");
var inputPassword=document.querySelector(".input2")
var btn=document.querySelector(".btn")
var alertmessage=document.querySelector(".alert")
var buttn2 =document.querySelector(".button2")
var register=[];




function creat(){
   var loginContent={
        emailvalue: inputEmail.value,
        Passwordvalue:inputPassword.value
    }
    if(validateEmail()&& inputEmail!=""&&inputPassword!=""){
        registe.push(loginContent);
    
    
    }else{

    }
}
    var jsonsrt=JSON.stringify(registe)
    localStorage.setItem('sites',jsonsrt)
  
    

function validateEmail(){
    var regexEmail=/^[a-z ]{4,}[0-9]{0,}(@)$/;
   var regex2= inputEmail.value;
   
if( regexEmail.test(regex2)){
    inputEmail.classList.add('is-valid')
    inputEmail.classList.remove('is-invalid')
    alertmessage.classList.add('d-none')
    return true;
}else{
    inputEmail.classList.add('is-invalid')
    inputEmail.classList.remove('is-valid')
    alertmessage.classList.remove('d-none')
return false;
}
}
inputEmail.addEventListener("blure",validateEmail)
btn.addEventListener("click",function(){
    creat();
    window.location.replace("index.html","loginout.html")
})

buttn2.addEventListener("click",function(){
    window.location.replace("loginout.html","index.html")
})