const passwordinput=document.getElementById('password')
const background=document.getElementById('background')

passwordinput.addEventListener('input',(E)=>{
const input=E.target.value
const length1=input.length
background.style.filter=`blur(${20-2*length1}px)`
})