let a=document.getElementById('inp')
let b=document.getElementById('inp1')
let c=document.getElementById('inner')
let d=document.getElementById('inner1')

function teXt() {
   let A=Number(a.value)
   let B=Number(b.value)
   switch (inner.value) {
       case '1':
             c.innerText=A+B
           break;
   
       default:
           break;
   }
}