// const startText = document.querySelector('.startText')
// const topNav = document.querySelector('.topNav')
// const start = document.querySelector('.start')
// const identification = document.querySelector('.identification')
// const logo = document.querySelector('.enter')
// const sumbit = document.querySelector('.fa-chevron-right')
// const firstLabels = document.querySelectorAll('.firstLabels')
// const activeForm = document.querySelector('#activeForm')
// const forward = document.querySelector('.forward')
// const bar = document.querySelector('.bar')
// let textState = false
// let mailState = false
// // animation that triggers when u start survery
// const enterTextAnim = () => {
 
//     setTimeout(function(){
//         bar.style.opacity = 1
//         bar.style.width = '30vw'
//         bar.style.height = '10vh'
//     }, 50);
//     start.style.width = '30vw'
//     start.style.height = '8vh'
//     start.style.position = 'absolute'
//     start.style.top = '35%'
//     start.style.right = '15%'
//     start.style.overflow = 'hidden'
//     logo.style.opacity = '0'
//     identification.style.display = 'block'
//     topNav.style.display  = 'flex'
// }

// const gettingTextInputs = () => {
//     const inputs = document.querySelectorAll('input[type="text"]')
//     inputs.forEach(input => input.addEventListener('keyup', e =>{
//         inputPatternCheck(input,e)
//     } ))
//     inputs.forEach(input => input.addEventListener('change', (e) => {
//         if(e.target.value == ''){
//             nameState = false
//         }
//     }))
// }
// const inputPatternCheck = (input, e) => {
//     let MissMatchAlert =  e.target.nextElementSibling
    
//     if (e.keyCode > 31 && (e.keyCode < 65 || e.keyCode > 90) &&
//     (e.keyCode < 97 || e.keyCode > 122)) {
//         MissMatchAlert.innerText = 'სახელის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს'
//         textState = false
//     } else if(e.target.value.length < 3 ){
//         MissMatchAlert.innerText = 'სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან'
//         textState = false
//     }else if(e.target.value.length > 256){
//         MissMatchAlert.innerText = 'სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან'
//         textState = false
//     }else{
//         MissMatchAlert.innerText = ''
//         textState = true
//     }
//     if(textState && mailState){
//         forward.disabled = false
//     }else{
//         forward.disabled = true
//     }

// }
// const emailValidity = () =>{
//     const email = document.querySelector('#mail')
//     email.addEventListener('keyup', e => {
//     let MissMatchAlert =  e.target.nextElementSibling
//     if(email.value.endsWith('@redberry.ge')){
//         MissMatchAlert.innerText = ''
//         mailState = true
//     }else if(email.validity.typeMismatch){
//         MissMatchAlert.innerText = 'თქვენ მიერ შეყვანილი მეილი არასწორია'
//         mailState = false
//     }else{
//         MissMatchAlert.innerText = 'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)'
//         mailState = false
//     }
//     if(mailState && textState){
//         forward.disabled = false
//     }else{
//         forward.disabled = true

//     }   
//     })
//     email.addEventListener('change', () => {
//         if(email.value == ''){
//             mailState = false
//         }
//     })
// }
// startText.addEventListener('click',enterTextAnim)
// activeForm.addEventListener('submit', e =>{
//     e.preventDefault()
//     if(mailState && nameState){
//         console.log('LETS GOO')
//     }else{
//         console.log('SADGE')
//     }
// })
// gettingTextInputs()
// emailValidity()