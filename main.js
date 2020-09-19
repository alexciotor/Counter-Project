let a = 0

const upper =()=>{
let up = document.getElementById('content');
a++
 up.innerHTML=a
 if(a>0){
     up.style.color='green'
 
}
else if(a===0){
    up.style.color="black"
 
}
}

const down = ()=>{
    let up = document.getElementById('content');
a--
 up.innerHTML=a
 if(a===0){
     up.style.color="black"
  
 }
 else if(a<0){
     up.style.color='red'
 }
}


