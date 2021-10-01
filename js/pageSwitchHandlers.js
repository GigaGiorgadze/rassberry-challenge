/**
 * animation that triggers when u start survery
 * @returns(void)
 * @requires(void)
 */
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
/**
 * animation that triggers when u go to second page both back and forward
 * @requires(void)
 * @returns(void)
 */
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
/**
 * @requires(void)
 * @returns(void)
 */
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
/**
 * button that handles going forward besides first page
 * @requires(void)
 * @return(void)
 */ 
const pageForward = () =>{
    if(currentPage == 'second'){
        thirdPageLoad()
    }else if(currentPage == 'third'){
        lastPageLoad()
    }
}
/**
 * @requires(void)
 * @returns(void)
 */
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
/**
 * animation that plays on fourth page about company
 * @requires(void)
 * @returns(void)
 */
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
/**
 * 
 * @param {e} click event information 
 * @returns (void)
 */
const thankYouScreen = e =>{
    e.preventDefault()
    // i had to use this way because for some reason just checking value missing wasn't working on group of radio buttons so i had to find and use this way i know its not the best :/
    let radioArray = []
    
    const lastRadios = e.target.querySelectorAll('input[type="radio"]')
    /* 
      i couldn't find way how to delete else stament from ternery operator
     what this does it pushes values of validity missing to an array so i can later check if all radio groups are filled out
     so if its not 0 then one of the group isn't check :/ not the best approach but oh well
      */
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
        lastErorr.style.display = 'inline'
        return 
    }
}