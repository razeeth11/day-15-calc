document.querySelector('body').addEventListener('keypress',(e)=>{
  console.log(e)
})

var dataInput = document.querySelector('.data')
function calcFun(e){
  var val_calc = dataInput.value
  console.log(e.innerText)
  dataInput.value = val_calc + e.innerText
}



