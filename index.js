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
const finalBackBtn = document.querySelector('.FinalBack')
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

/**
 * validating inputs on first page
 * @param {e} click information  
 */
const inputPatternCheck = (e) => {
    let MissMatchAlertName =  e.target.querySelector('input').nextElementSibling
    let MissMatchAlertSurname = e.target.querySelectorAll('input')[1].nextElementSibling
    let name = e.target.querySelector('input')
    let surname = e.target.querySelectorAll('input')[1]
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


/**
 * this function sends information to 
 * to another function to show what radio button or what 
 * input field to display you can find this functions in js/radioCheckHandler.js
 * @param {*} e 
 * 
 */
const radiosCheck = e =>{
    if(e.target.id == 'covidYes'){
        covidYesHandler()
    }else if(e.target.id == 'covidNo' || e.target.id == 'covidNow'){
        covidNoOrNowHandler()
    }else if(e.target.id == 'antibodiesYes'){
        antibodiesYesHandler()
    }else if(e.target.id == 'antibodiesNO'){
        antibodiesNoHandler()
    }else if(e.target.id == 'vaxxYesRadio'){
        vaxxYesRadioHandler()
    }else if(e.target.id == 'noSecondRegistered'){
        noSecondRegisteredHandler()
    }else if(e.target.id == 'secondRegistered' || e.target.id == 'fullVaxxed'){
        secondRegisteredOrFullVaxxedHandler()
    }else if(e.target.id == 'vaxxNoRadio'){
        vaxxNoRadioHanlder()
    }else if(e.target.id == 'noPlans'){
        noPlansHandler()
    }else if(e.target.id == 'planningVaxx'){
        planningVaxxHandler()
    }else if(e.target.id == 'registeredWaiting'){
        registedWaitingHandler()
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
finalBackBtn.addEventListener('click', () => {
    thirdPageLoad()
    forward.disabled = false
})