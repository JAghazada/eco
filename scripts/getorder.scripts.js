const btn = document.querySelector(".get-order");
const modal =document.querySelector(".modal")
const cancel =document.querySelector(".cancel")
const closeModal=()=>{
    document.querySelector(".modal").style.display="none"
    document.querySelector(".ersc").innerHTML = ``
    document.getElementById("o-name").value=""
    document.getElementById("o-phone").value=""
    document.getElementById("o-mail").value=""

}
btn.addEventListener("click",()=>{
    document.querySelector(".modal").style.display="flex"

  
    
})
document.querySelector(".gvm").addEventListener("click",()=>{
    const name =document.getElementById("o-name").value.trim();
    const phone =document.getElementById("o-phone").value.trim();
    const mail =document.getElementById("o-mail").value.trim();
    if(name !=="" && phone !== "" && mail !==""){
        document.querySelector(".ersc").innerHTML='Sifarişiniz alındı'
        setTimeout(()=>{
            closeModal()
        },1500)
    }else {
        document.querySelector(".ersc").innerHTML="Məlumatların düzgünlüyünü yoxlayın."
    };
})
cancel.addEventListener("click",()=>{
    closeModal()
})