document.addEventListener('DOMContentLoaded',()=>{
    words.forEach(e=>{
        const btn=document.createElement('button')
        btn.innerText=e[2]
        btn.setAttribute('rus',e[2])
        btn.setAttribute('eng',e[1]+' '+e[0])
        document.querySelector('.hintWindow').append(btn)
    })

    document.querySelectorAll('.hintWindow button').forEach(e=>{
        e.addEventListener('click',()=>{
            if(e.innerText==e.getAttribute('rus')){
                e.innerText=e.getAttribute('eng')
                e.setAttribute('style','background:#4388e4; border-color:rgb(184, 53, 155);')
            }else{
                e.innerText=e.getAttribute('rus')
                e.removeAttribute('style')
            }
        })
    })

})
