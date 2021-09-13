const startText = document.querySelector('.startText')
const topNav = document.querySelector('.topNav')
const start = document.querySelector('.start')
const identification = document.querySelector('.identification')
const logo = document.querySelector('.enter')
const sumbit = document.querySelector('.fa-chevron-right')
const firstLabels = document.querySelectorAll('.firstLabels')
const activeForm = document.querySelector('#activeForm')
const forward = document.querySelector('.forward')
const bar = document.querySelector('.bar')
const aboutCovid = document.querySelector('.aboutCovid')
const botNav = document.querySelector('.botNav')
const back = document.querySelector('.back')
const botNavCenter = document.querySelector('.botNavCenter')
const pageNum = document.querySelector('.pageNum')
const antibodiesYes = document.querySelector('#antibodiesYes')
const additionalFirst = document.querySelector('.additionalFirst')
const radios = document.querySelectorAll('.radios')
const additionalSecondYes = document.querySelector('.additionalSecondYes')
const additionalSecondNo = document.querySelector('.additionalSecondNo')
const inputsToCheck = document.querySelectorAll('.inputsToCheck')
const vaxx = document.querySelector('.vaxx')
const vaxxYes = document.querySelector('.vaxxYes')
const oneVaxOnlyPara = document.querySelector('.oneVaxOnlyPara')
const vaxxNo = document.querySelector('.vaxxNo')
const noPlansPara = document.querySelector('.noPlansPara')
const planningVaxxPara = document.querySelector('.planningVaxxPara')
const scroll = document.querySelector('.finalForm')
const final = document.querySelector('.final')
let isDown = false
let startY;
let scrollTop;

let currentPage = "load"
let covidPageCompleted = false
let textState = false
let mailState = false
let covidState = 0;
// animation that triggers when u start survery
const enterTextAnim = () => {
 
    setTimeout(function(){
        bar.style.opacity = 1
        bar.style.width = '30vw'
        bar.style.height = '10vh'
        bar.src = 'assets/yellowBar.svg'
        start.style.top = '35%'
        start.style.right = '15%'
        bar.style.top = '35%'
        bar.style.left = '55%'
    }, 50);
    start.style.width = '30vw'
    start.style.height = '8vh'
    start.style.position = 'absolute'
    start.style.overflow = 'hidden'
    logo.style.opacity = '0'
    identification.style.display = 'block'
    topNav.style.display  = 'flex'
    botNav.style.display = 'flex'
    currentPage = 'first'
    aboutCovid.style.display = 'none'
    pageNum.innerText = '1/4'
    back.style.display = 'none'
    botNavCenter.style.justifyContent = 'flex-end'
}

const gettingTextInputs = () => {
    const inputs = document.querySelectorAll('.firstInputs')
    inputs.forEach(input => input.addEventListener('keyup', e =>{
        inputPatternCheck(input,e)
    } ))
    inputs.forEach(input => input.addEventListener('change', (e) => {
        if(e.target.value == ''){
            nameState = false
        }
    }))
}
const inputPatternCheck = (input, e) => {
    let MissMatchAlert =  e.target.nextElementSibling
    
    if (e.keyCode > 31 && (e.keyCode < 65 || e.keyCode > 90) &&
    (e.keyCode < 97 || e.keyCode > 122)) {
        MissMatchAlert.innerText = `${e.target.dataset.name}ს ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს`
        textState = false
    } else if(e.target.value.length < 3 ){
        MissMatchAlert.innerText = `${e.target.dataset.name}ს ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან`
        textState = false
    }else if(e.target.value.length > 256){
        MissMatchAlert.innerText = `${e.target.dataset.name}ს ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან`
        textState = false
    }else{
        MissMatchAlert.innerText = ''
        textState = true
    }
    if(textState && mailState){
        forward.disabled = false
    }else{
        forward.disabled = true
    }

}
const emailValidity = () =>{
    const email = document.querySelector('#mail')
    email.addEventListener('keyup', e => {
    let MissMatchAlert =  e.target.nextElementSibling
    if(email.value.endsWith('@redberry.ge')){
        MissMatchAlert.innerText = ''
        mailState = true
    }else if(email.validity.typeMismatch){
        MissMatchAlert.innerText = 'თქვენ მიერ შეყვანილი მეილი არასწორია'
        mailState = false
    }else{
        MissMatchAlert.innerText = 'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)'
        mailState = false
    }
    if(mailState && textState){
        forward.disabled = false
    }else{
        forward.disabled = true

    }   
    })
    email.addEventListener('change', () => {
        if(email.value == ''){
            mailState = false
        }
    })
} 
const summonSecondPage = () =>{
    identification.style.display = 'none'
    vaxx.style.display = 'none'
    aboutCovid.style.display = 'flex' 
    setTimeout(function(){
        
        bar.style.width = '15vw'
        bar.style.height = '20vh'
        bar.style.top = '37%'
        bar.style.left = '50%'
        bar.src = 'assets/red circle.svg'
    }, 50);
    forward.disabled = true
    back.style.display = 'block'
    botNavCenter.style.justifyContent = 'space-between'
    currentPage = 'second'
    pageNum.innerText = '2/4'
    forward.type = 'button'
}
const pageBack = () => {
    if(currentPage == 'second'){
    forward.disabled = false
    enterTextAnim()
    }else if(currentPage == 'third'){
        summonSecondPage()
    }
}
const covidYesCheck = e =>{
    if(e.target.checked){
        additionalFirst.style.display = 'block'
        forward.disabled = true
    }
}
const radiosCheck = e =>{
    if(e.target.id == 'covidYes'){
        covidYesCheck(e)
    }else if(e.target.id == 'covidNo' || e.target.id == 'covidNow'){
        forward.disabled = false
        console.log('heelo')
        additionalFirst.style.display = 'none'
        additionalSecondYes.style.display = 'none'
        additionalSecondNo.style.display = 'none'
        covidState = -1
    }else if(e.target.id == 'antibodiesYes'){
        additionalSecondYes.style.display = 'block'
        additionalSecondNo.style.display = 'none'
        forward.disabled = true
    }else if(e.target.id == 'antibodiesNO'){
        additionalSecondNo.style.display = 'block'
        additionalSecondYes.style.display = 'none'
        forward.disabled = true
    }else if(e.target.id == 'vaxxYesRadio'){
        vaxxYes.style.display = 'block'
        vaxxNo.style.display = 'none'
        noPlansPara.style.display = 'none'
        forward.disabled = true
        oneVaxOnlyPara.style.display = 'none'
    }else if(e.target.id == 'noSecondRegistered'){
        oneVaxOnlyPara.style.display = 'block'
        noPlansPara.style.display = 'none'
        vaxxNo.style.display = 'none'
        forward.disabled = false
    }else if(e.target.id == 'secondRegistered' || e.target.id == 'fullVaxxed'){
        oneVaxOnlyPara.style.display = 'none'
        forward.disabled = false
        
    }else if(e.target.id == 'vaxxNoRadio'){
        forward.disabled = true
        vaxxNo.style.display = 'block'
        vaxxYes.style.display = 'none'
        oneVaxOnlyPara.style.display = 'none'
        planningVaxxPara.style.display = 'none'
    }else if(e.target.id == 'noPlans'){
        forward.disabled = false
        noPlansPara.style.display = 'block'
        planningVaxxPara.style.display = 'none'
    }else if(e.target.id == 'planningVaxx'){
        forward.disabled = false
        noPlansPara.style.display = 'none'
        planningVaxxPara.style.display = 'block'
    }else if(e.target.id == 'registeredWaiting'){
        forward.disabled = false
        noPlansPara.style.display = 'none'
        oneVaxOnlyPara.style.display = 'none'
        planningVaxxPara.style.display = 'none'
    }
}
inputsToCheckFunc = e =>{
    if(e.target.id == 'covidDate'){
        covidState = true
        forward.disabled = false
    }else if(e.target.value != '' && e.target.id != 'covidDate'){
        covidState += 1
        if(covidState>=2){
            console.log(covidState)
            forward.disabled = false
        }
    } 
 
}
const thirdPageLoad = () =>{
    aboutCovid.style.display = 'none'
    vaxx.style.display = 'flex' 
    setTimeout(function(){
        bar.style.width = '20vw'
        bar.style.height = '20vh'
        bar.style.top = '17%'
        bar.style.left = '49.5%'
        bar.src = 'assets/star.svg'
    }, 50);
    forward.disabled = true
    currentPage = 'third'
    pageNum.innerText = '3/4'
}

const pageForward = () =>{
    if(currentPage == 'second'){
        thirdPageLoad()
    }else if(currentPage == 'third'){
        lastPageLoad()
    }
}
const lastPageLoad = () => {
    setTimeout(function(){
        bar.style.width = '20vw'
        bar.style.height = '20vh'
        bar.style.top = '23%'
        bar.style.left = '51%'
        bar.src = 'assets/heart.svg'
    }, 50);
    vaxx.style.display = 'none'
    final.style.display = 'flex'
}
startText.addEventListener('click',enterTextAnim)
activeForm.addEventListener('submit', e =>{
    e.preventDefault()
    if(mailState && textState){
        summonSecondPage()
    }else{
        return 
    }
})
back.addEventListener('click', pageBack)
forward.addEventListener('click', pageForward)

inputsToCheck.forEach(input => input.addEventListener('change', e => inputsToCheckFunc(e)))
radios.forEach(radio => radio.addEventListener('click', e => radiosCheck(e)))
gettingTextInputs()
emailValidity()
scroll.addEventListener('mousedown', (e) => {
    isDown = true
    startY = e.pageY - scroll.offsetTop
    scrollTop = scroll.scrollTop
})
scroll.addEventListener('mouseleave', () => {
    isDown = false
})
scroll.addEventListener('mouseup', () => {
    isDown = false
})
scroll.addEventListener('mousemove', (e) => {
    if(!isDown) return
    const y = e.pageY - scroll.offsetTop
    const walk = y - startY
    console.log(walk)
    scroll.scrollTop = scrollTop + (-walk)
})
