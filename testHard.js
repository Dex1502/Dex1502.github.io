let slide=0
let randomArray
let rightAnsw
let wrongList=[]
let wrongAnswers=[]
document.addEventListener('DOMContentLoaded',()=>{
    randomArray = generateRandomUniqueNumbers(words.length, words.length)
    loadSlide(0)

    document.querySelector('#postBtn').addEventListener('click',()=>{
        if(document.querySelector('#userAnsw').value.toUpperCase().trim() != words[randomArray[slide]][0].toUpperCase().trim()){
            wrongList.push(randomArray[slide])
            wrongAnswers.push(document.querySelector('#userAnsw').value)
        }
        if(slide==words.length-1){
            result()
        }else{
            slide++
            loadSlide(slide)
        }
        document.querySelector('#userAnsw').value=''
    })

    document.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            document.querySelector('#postBtn').click()
        }
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
        wrongList.forEach((e,i)=>{
            document.querySelector('.mistakes').innerHTML+=`${words[e][0]} - ${words[e][2]} <span>Ваш вариант: ${wrongAnswers[i]}</span><br>`
        })
    }
}


function loadSlide(slideNum){
    document.querySelector('.testWindow .learnCounter').innerText=`${slideNum+1}/${words.length}`
    document.querySelector('.testWindow img').setAttribute('src', words[randomArray[slideNum]][3])
    document.querySelector('.learnText-rus').innerText=words[randomArray[slideNum]][2]
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
