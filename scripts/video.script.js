const video =  document.querySelector('.video');
document.querySelector('.playpause').onclick = function () {
const playpause = document.querySelector(".playpause");

    if(video.paused){
        playpause.style.opacity=0
        video.play();

        setTimeout(()=>{
            playpause.style.opacity=1

        },6000)

    }
    // else{
    //     console.log(video)
    //     playpause.style.opacity=1

    //     video.pause()
    // }
};
document.querySelector(".v1").addEventListener("click",()=>{
    const v1 = document.querySelector(".v1")
    if(v1.paused){
        v1.play()
    }else{
        v1.pause()
    }
})
document.querySelector(".v2").addEventListener("click",()=>{
    const v2 = document.querySelector(".v2")
    if(v2.paused){
        v2.play()
    }else{
        v2.pause()
    }
})
document.querySelector(".additionala").addEventListener("click",()=>{
    document.querySelector(".v1").play()
    setTimeout(() => {
        document.querySelector(".v2").play()
    }, 6000);
})