let slide=0
let randomArray
let rightAnsw
let wrongList=[]
document.addEventListener('DOMContentLoaded',()=>{
    randomArray = generateRandomUniqueNumbers(words.length, words.length)
    loadSlide(0)

    document.querySelectorAll('.testButtons button').forEach((e,i)=>{
        e.addEventListener('click',()=>{
            if(e.getAttribute('id')==`testBtn${rightAnsw}`){
                if(slide==words.length-1){
                    result()
                }else{
                    slide++
                    loadSlide(slide)
                }
            }else{
                e.setAttribute('style','background:red;')
                if(!wrongList.includes(randomArray[slide])){
                    wrongList.push(randomArray[slide])
                }
            }
        })
    })

 
})


function result(){
    document.querySelector('.testWindow').setAttribute('style','display:none;')
    document.querySelector('.testResult').setAttribute('style','display:block;')
    document.querySelector('.testResult .learnCounter').innerText=`${words.length-wrongList.length}/${words.length}`
    if(wrongList.length == 0){
        document.querySelector('.mistakeLabel').innerText='Нет ошибок!'
    }else{
        document.querySelector('.mistakeLabel').innerText='Список ошибок:'
        wrongList.forEach(e=>{
            document.querySelector('.mistakes').innerText+=`${words[e][0]} - ${words[e][2]}\n`
        })
    }
}


function loadSlide(slideNum){
    document.querySelector('.testWindow .learnCounter').innerText=`${slideNum+1}/${words.length}`
    document.querySelector('.testWindow img').setAttribute('src', words[randomArray[slideNum]][3])
    document.querySelector('.learnText-rus').innerText=words[randomArray[slideNum]][2]

    rightAnsw = Math.floor(Math.random() * 4);
    document.querySelector(`#testBtn${rightAnsw}`).innerText=words[randomArray[slideNum]][0]

    let wrongAnswers
    do{
        wrongAnswers = generateRandomUniqueNumbers(words.length, 3)
    }while(wrongAnswers.includes(randomArray[slideNum]))


    let counter=0
    document.querySelectorAll('.testButtons button').forEach((e,i)=>{
        e.removeAttribute('style')
        if(i!=rightAnsw){
            e.innerText=words[wrongAnswers[counter]][0]
            counter++
        }
    })
}

function generateRandomUniqueNumbers(max, count) {
  const uniqueNumbers = new Set();
  while (uniqueNumbers.size < count) {
    const randomNumber = Math.floor(Math.random() * max);
    if (!uniqueNumbers.has(randomNumber)) {
      uniqueNumbers.add(randomNumber);
    }
  }
  return Array.from(uniqueNumbers);
}
