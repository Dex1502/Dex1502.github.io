const checkbox=document.querySelector('.Checkbox')

checkbox.addEventListener('click',(e)=>{
    if(checkbox.getAttribute('class')=='Checkbox'){
        checkbox.classList.add('Active')
    }else{
        checkbox.classList.remove('Active')
    }
    
})

const time=30
let timer=time*60
let seconds
let minutes
if(localStorage.timer!=undefined){
    timer=localStorage.timer
}

const interval=setInterval(()=>{
    if(timer==0){
        timer=time*60
    }
    timer-=1
    localStorage.timer=timer
    seconds=timer%60
    minutes=Math.floor(timer/60)
    if(seconds.toString().length==1){
        seconds='0'+seconds
    }
    if(minutes.toString().length==1){
        minutes='0'+minutes
    }
    document.querySelector('.Timer-m').innerHTML=minutes
    document.querySelector('.Timer-s').innerHTML=seconds
    
    

},1000)

const menu=document.querySelector('menu')

document.querySelector('#MenuButton').addEventListener('click',()=>{
    if(menu.getAttribute('style')==null){
        document.body.setAttribute('style','overflow:hidden;')
        menu.setAttribute('style','transform:translateX(0px)')
    }else{
        menu.removeAttribute('style')
        document.body.removeAttribute('style')
    }
})


var scene1 = document.getElementById('Scene-1');
var parallaxInstance1 = new Parallax(scene1, {
    relativeInput: true,
    clipRelativeInput:true
});


var scene2 = document.getElementById('Scene-2');
var parallaxInstance2 = new Parallax(scene2, {
    relativeInput: true,
    clipRelativeInput:true
});



const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });
