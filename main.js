let slide=0
document.addEventListener('DOMContentLoaded',()=>{
    loadSlide(0)

    document.querySelector('#forwradBtn').addEventListener('click',()=>{
        if(slide<words.length-1){
            slide++
            loadSlide(slide)
        }
    })
        
    document.querySelector('#backBtn').addEventListener('click',()=>{
        if(slide>0){
            slide--
            loadSlide(slide)
        }
    })

 
})



function loadSlide(slideNum){
    document.querySelector('.learnCounter').innerText=`${slideNum+1}/${words.length}`
    document.querySelector('.learnWindow img').setAttribute('src', words[slideNum][3])
    document.querySelector('.learnText-eng').innerText=words[slideNum][0]
    document.querySelector('.learnText-trans').innerText=words[slideNum][1]
    document.querySelector('.learnText-rus').innerText=words[slideNum][2]
}