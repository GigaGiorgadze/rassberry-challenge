function covidYesHandler() {
    additionalFirst.style.display = 'block'
    forward.disabled = true
}
function covidNoOrNowHandler(){
    forward.disabled = false
    additionalFirst.style.display = 'none'
    additionalSecondYes.style.display = 'none'
    additionalSecondNo.style.display = 'none'
    covidState = -1
}
function antibodiesYesHandler(){
    additionalSecondYes.style.display = 'block'
    additionalSecondNo.style.display = 'none'
    forward.disabled = true
}
function antibodiesNoHandler(){
    additionalSecondNo.style.display = 'block'
    additionalSecondYes.style.display = 'none'
    forward.disabled = true
}
function vaxxYesRadioHandler(){
    vaxxYes.style.display = 'block'
    vaxxNo.style.display = 'none'
    noPlansPara.style.display = 'none'
    forward.disabled = true
    oneVaxOnlyPara.style.display = 'none'
}
function noSecondRegisteredHandler(){
    oneVaxOnlyPara.style.display = 'block'
    noPlansPara.style.display = 'none'
    vaxxNo.style.display = 'none'
    forward.disabled = false
}
function secondRegisteredOrFullVaxxedHandler(){
    oneVaxOnlyPara.style.display = 'none'
    forward.disabled = false   
}
function vaxxNoRadioHanlder(){
    forward.disabled = true
    vaxxNo.style.display = 'block'
    vaxxYes.style.display = 'none'
    oneVaxOnlyPara.style.display = 'none'
    planningVaxxPara.style.display = 'none'
}
function noPlansHandler(){
    forward.disabled = false
    noPlansPara.style.display = 'block'
    planningVaxxPara.style.display = 'none'
}
function planningVaxxHandler(){
    forward.disabled = false
    noPlansPara.style.display = 'none'
    planningVaxxPara.style.display = 'block'
}
function registedWaitingHandler(){
    forward.disabled = false
    noPlansPara.style.display = 'none'
    oneVaxOnlyPara.style.display = 'none'
    planningVaxxPara.style.display = 'none'
}