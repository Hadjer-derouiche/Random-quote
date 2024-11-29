

var array=["This is the most simple and basic component of life: our struggles determine our successes.",
"Being wrong opens us up to the possibility of change.",
"Who you are is defined by what you're willing to struggle for.",
"You miss 100% of the shots you don't take.",
"The greatest glory in living lies not in never falling, but in rising every time we fall.",
"The way to get started is to quit talking and begin doing.",
"Life is what happens when you're busy making other plans.",
"Don't watch the clock; do what it does. Keep going.",]

var Nboutton=document.getElementById("btn2");
var textt=document.getElementById("textt");
Nboutton.addEventListener("click",suivant);
var i=1
let txt=document.createElement("p")
txt.textContent=array[0]
textt.appendChild(txt)
function suivant()
 {  if(i>=array.length)
    {
        i=array.length-1
    }
     let valeur=array[i]
     txt.textContent=valeur
     textt.appendChild(txt)
     i=i+1
     txt.classList.add("txt")
     textt.classList.add(textt)
    
 }
 var Pboutton=document.getElementById("btn1");
 Pboutton.addEventListener("click",précedent);
 function précedent()
 {  i=i-1
    if(i<0)
    {
        
        i=0
    }
     let valeur=array[i]
     txt.textContent=valeur
     textt.appendChild(txt)
     textt.classList.add(textt)
    
 }
