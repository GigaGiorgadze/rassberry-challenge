const startText = document.querySelector('.startText')
const start = document.querySelector('.start')
const identification = document.querySelector('.identification')
const logo = document.querySelector('.enter')
const sumbit = document.querySelector('.fa-chevron-right')
const firstLabels = document.querySelectorAll('.firstLabels')
const activeForm = document.querySelector('#activeForm')
const forward = document.querySelector('.forward')
let state = false
const enterTextAnim = () => {
    start.style.background = 'rgba(214, 209, 50, 0.555)'
    start.style.width = '30vw'
    start.style.height = '8vh'
    start.style.position = 'absolute'
    start.style.top = '35%'
    start.style.right = '15%'
    start.style.overflow = 'hidden'
    logo.style.opacity = '0'
    identification.style.display = 'block'
}

const gettingTextInputs = () => {
    const inputs = document.querySelectorAll('input[type="text"]')
    inputs.forEach(input => input.addEventListener('keyup', e =>{
        inputPatternCheck(input,e)
    } ))
}
const inputPatternCheck = (input, e) => {
    let MissMatchAlert =  e.target.nextElementSibling
    
    if (e.keyCode > 31 && (e.keyCode < 65 || e.keyCode > 90) &&
    (e.keyCode < 97 || e.keyCode > 122)) {
        MissMatchAlert.innerText = 'სახელის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს'
        state = false
    } else if(e.target.value.length < 3 ){
        MissMatchAlert.innerText = 'სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან'
        state = false
    }else if(e.target.value.length > 256){
        MissMatchAlert.innerText = 'სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან'
        state = false
    }else{
        MissMatchAlert.innerText = ''
        state = true
    }
    if(state){
        forward.disabled = 'false'
    }
}
const emailValidity = () =>{
    const email = document.querySelector('#mail')
    email.addEventListener('keyup', e => {
    let MissMatchAlert =  e.target.nextElementSibling
    if(e.target.value.endsWith('@redberry.ge')){
        MissMatchAlert.innerText = ''
        state = true
    }else if(email.validity.typeMismatch){
        MissMatchAlert.innerText = 'თქვენ მიერ შეყვანილი მეილი არასწორია'
        state = false
    }
    else{
        MissMatchAlert.innerText = 'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)'
        state = false
    }
    if(state){
        forward.disabled = 'false'
    }
    })
}
startText.addEventListener('click',enterTextAnim)
activeForm.addEventListener('submit', e =>{
    e.preventDefault()
    if(state){
        console.log('LETS GOO')
    }else{
        console.log('SADGE')
    }
})
gettingTextInputs()
emailValidity()