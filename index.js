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
const meetingRadios = document.getElementsByName('meeting')
const finalForm = document.querySelector('.finalForm')
const FinalBackBtn = document.querySelector('.FinalBack')
const tyH1 = document.querySelector('.ty')
const topStar = document.querySelector('.TopStar')
const BotStar = document.querySelector('.BotStar')
const lastErorr = document.querySelector('.lastErorr')
let isDown = false
let startY;
let scrollTop;
let currentPage = "load"
let covidPageCompleted = false
let surnameState = false
let NameState = false
let mailState = false
let covidState = 0;
// animation that triggers when u start survery
const enterTextAnim = () => {
    // time out is needed because if i don't use it transition doesn't trigger but using timeout transition triggers correctly
    setTimeout(function(){
        bar.style.opacity = 1
        bar.style.width = '30vw'
        bar.style.height = '10vh'
        bar.querySelector('img').src = 'assets/yellowBar.svg' 
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
// validating inputs on first page
const inputPatternCheck = (e) => {
    let MissMatchAlertName =  e.target.querySelector('input').nextElementSibling
    let MissMatchAlertSurname = e.target.querySelectorAll('input')[1].nextElementSibling
    let name = e.target.querySelector('input')
    let surname = e.target.querySelectorAll('input')[1]
    console.log({surname, MissMatchAlertSurname})
    const email = document.querySelector('#mail')
    let MailMissMatchAlert =  email.nextElementSibling

    let numRegex = /\d/
    if(numRegex.test(name.value)) {
    MissMatchAlertName.innerText = `${name.dataset.name}ს ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს`
    NameState = false
    }else if(name.value.length < 3){
        MissMatchAlertName.innerText = `${name.dataset.name}ს ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან`
        NameState = false
    }else if(name.value.length >= 255){
        MissMatchAlertName.innerText = `${name.dataset.name}ს  ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან`
        NameState = false
    }else{
        MissMatchAlertName.innerText = '';
        NameState = true
    }
    if(numRegex.test(surname.value)){
        MissMatchAlertSurname.innerText = `${surname.dataset.name}ს ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს`
        surnameState = false
    }else if(surname.value.length < 3 || surname.value.length == ''){
        MissMatchAlertSurname.innerText = `${surname.dataset.name}ს ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან`
        surnameState = false
    }else if(surname.value.length >= 255){
        MissMatchAlertSurname.innerText = `${surname.dataset.name}ს  ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან`
        surnameState = false
    }else{
        MissMatchAlertSurname.innerText = ''
        surnameState = true

    }
    if(email.value.endsWith('@redberry.ge')){
        MailMissMatchAlert.innerText = ''
        mailState = true
    }else if(email.validity.typeMismatch){
        MailMissMatchAlert.innerText = 'თქვენ მიერ შეყვანილი მეილი არასწორია'
        mailState = false
    }else{
        MailMissMatchAlert.innerText = 'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)'
        mailState = false
    }  
}
// animation that triggers when u go to second page both back and forward
const summonSecondPage = () =>{
    identification.style.display = 'none'
    vaxx.style.display = 'none'
    aboutCovid.style.display = 'flex' 
    setTimeout(function(){
        
        bar.style.width = '15vw'
        bar.style.height = '20vh'
        bar.style.top = '37%'
        bar.style.left = '50%'
        bar.querySelector('img').src = 'assets/red circle.svg' 
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
    forward.type = 'submit'
    enterTextAnim()
    }else if(currentPage == 'third'){
        summonSecondPage()
        forward.disabled = false
    }
}
// massive function that checks which radio button was clicked on 2nd and 3rd page and reveals other check boxes accordingly
const radiosCheck = e =>{
    if(e.target.id == 'covidYes'){
        additionalFirst.style.display = 'block'
        forward.disabled = true
    }else if(e.target.id == 'covidNo' || e.target.id == 'covidNow'){
        forward.disabled = false
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
// this checks 3 inputs on second page about antiboides
const inputsToCheckFunc = e =>{
    if(e.target.id == 'covidDate'){
        covidState = true
        forward.disabled = false
    }else if(e.target.value != '' && e.target.id != 'covidDate'){
        covidState += 1
        if(covidState>=2){
            forward.disabled = false
        }
    } 
 
}
const thirdPageLoad = () =>{
    aboutCovid.style.display = 'none'
    vaxx.style.display = 'flex' 
    final.style.display = 'none'
    setTimeout(function(){
        bar.style.width = '20vw'
        bar.style.height = '20vh'
        bar.style.top = '17%'
        bar.style.left = '49%'

        bar.innerHTML = '<img src="assets/star.svg"  alt="">'
    }, 50);
    forward.disabled = true
    currentPage = 'third'
    pageNum.innerText = '3/4'
    botNav.style.display = 'flex'
}
// button that handles going forward besides first page 
const pageForward = () =>{
    if(currentPage == 'second'){
        thirdPageLoad()
    }else if(currentPage == 'third'){
        lastPageLoad()
    }
}
// animation that plays on fourth page about company 
const lastPageLoad = () => {
   
    setTimeout(function(){
        bar.style.width = '20vw'
        bar.style.height = '20vh'
        bar.style.top = '25%'
        bar.style.left = '51%'
        bar.querySelector('img').remove()
        bar.innerHTML = '<svg width="196" height="173" viewBox="0 0 196 173" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M48.5005 12C75.7005 9.6 94.5005 28.3333 100.501 38C110.501 1.5 143.5 0.5 161.5 0.5C179.5 0.5 203.5 22 192.5 69C183.7 106.6 144.5 153.667 126 172.5C87.6668 153.5 9.30051 107.3 2.50051 74.5C-5.99949 33.5 14.5005 15 48.5005 12Z" fill="#F39494"/></svg>'

    }, 50);
    currentPage = 'fourth'
    vaxx.style.display = 'none'
    final.style.display = 'flex'
    pageNum.innerText = '4/4'
    botNav.style.display = 'none'
    
}
const thankYouScreen = e =>{
    e.preventDefault()
    let radioArray = []
    
    const lastRadios = e.target.querySelectorAll('input[type="radio"]')
    // i couldn't find way how to delete else stament from ternery operator
    lastRadios.forEach(radio => radio.validity.valueMissing ? radioArray.push(radio.validity.valueMissing) : true)
  
    if(radioArray.length == 0){
        let barSvgPath = bar.querySelector("svg").querySelector('path')
    setTimeout(() => {
        bar.style.width = '300vw'
        bar.style.height = '300vh'
        bar.style.top = '-100%'
        bar.style.left = '-100%'
        bar.style.zIndex = 2
    }, 50);
    // im nesting so many timeouts because i want animations to be delayed and not activate at same time
    setTimeout(() => {
        barSvgPath.style.fill = '#232323'
        setTimeout(() => {
            tyH1.style.display = 'block'
            tyH1.style.zIndex = 5
            topStar.style.display = 'inline'
            BotStar.style.display = 'inline'            
            setTimeout(() => {
                topStar.style.transform = 'translate(-300%, -200%)'
                BotStar.style.transform = 'translate(200%, 150%)'
            }, 300);
        }, 500);
    }, 500);
    }else{
        console.log(lastRadios)
        console.log(radioArray.length)
        lastErorr.style.display = 'inline'
        return 
    }
        
    
}
startText.addEventListener('click',enterTextAnim)
// submuting first form on main page
activeForm.addEventListener('submit', e =>{
    e.preventDefault()
    inputPatternCheck(e)

    if(mailState && NameState && surnameState ){
        summonSecondPage()
    }else{
        return 
    }
})
back.addEventListener('click', pageBack)
forward.addEventListener('click', pageForward)
// data and number inputs on second page
inputsToCheck.forEach(input => input.addEventListener('change', e => inputsToCheckFunc(e)))
// buttons on third and second page
radios.forEach(radio => radio.addEventListener('click', e => radiosCheck(e)))
scroll.addEventListener('mousedown', (e) => {
    // so later we know if user is actually holding mouse
    isDown = true
    // where user clicked first time
    startY = e.pageY - scroll.offsetTop
    // currect position of scroll inside form
    scrollTop = scroll.scrollTop
})
scroll.addEventListener('mouseleave', () => {
    // so scroll stops when user leaves form
    isDown = false
})
scroll.addEventListener('mouseup', () => {
    // so i know that user isn't holding mouse anymore
    isDown = false
})
scroll.addEventListener('mousemove', (e) => {
    if(!isDown) return
    // where cursor is inside form when user is moving it
    const y = e.pageY - scroll.offsetTop
    // how far is mouse from user's starting position
    const walk = (y - startY) * 2
    // scrools page based on walk and where scrool was at start
    scroll.scrollTop = scrollTop + (-walk)
})
// last form submit
finalForm.addEventListener('submit',(e) => {thankYouScreen(e)})
// back button on last page i couldn't use the same one because this one was supposed to be inside form :/
FinalBackBtn.addEventListener('click', () => {
    thirdPageLoad()
    forward.disabled = false
})