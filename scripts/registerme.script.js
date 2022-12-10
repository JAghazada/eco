const registerme = document.querySelector(".registerme");
registerme.addEventListener("click",()=>{
    const name=document.getElementById("name").value.trim();
    const surname =document.getElementById("surname").value.trim()
    const mail =document.getElementById("mail").value.trim()
    const pass=document.getElementById("pass").value.trim()
    const repass=document.getElementById("repass").value.trim()
    if(name !=="" && surname!=="" && mail !=="" && pass !== "" && repass !==""){
        if(pass === repass){
            document.querySelector(".erscc").innerHTML='Qeydiyyat uğurla başa çatdı!'
            setTimeout(()=>{
        location.href="index.html"

            },1000)
        }else{
            document.querySelector(".erscc").innerHTML='Şifrələr eyni deyil!'
        }
    }else{
        document.querySelector(".erscc").innerHTML='Məlumatların doğruluğunu yoxlayın!'
    }
})