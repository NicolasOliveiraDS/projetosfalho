var nextbtn = document.querySelector('.next'),
    prevbtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'),
    item = document.querySelectorAll('.item'),
    runningtime = document.querySelector('.timerunning')

let timerunning = 3000
let timeautonext = 7000

nextbtn.onclick = function(){
    showSlider('next')
}

prevbtn.onclick = function(){
    showSlider('prev')
}

let runTimeOut
let runNextAuto = setTimeout(() =>{
    nextbtn.click()
}, timeautonext )

function resetTimeAnimation(){
    runningtime.style.animation = 'none'
    runningtime.offsetHeight
    runningtime.style.animation = null
    runningtime.style.animation = 'runningtime 7s linear 1 forwards'

}
function showSlider(type){
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item ')
    if(type === 'next'){
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    }else{
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout( () =>{
        carousel.classList.remove('next')
        carousel.classList.remove('prev')

    }, timerunning)

    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() =>{
        nextbtn.click()
    }, timeautonext)

    resetTimeAnimation()
}

resetTimeAnimation()
