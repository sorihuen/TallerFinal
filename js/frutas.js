const boton = document.getElementById("boton")
const lista1 = document.getElementById("lista")
var color=0


var contador =0

function par() {
    var elementos=document.querySelectorAll("li[class='par']")
    
    for(var i =0;i<elementos.length;i++) {
       
       
      elementos[i].classList.toggle("colorCoral")
        
      

    }
    
}

function impar(){

    if(contador==0){

        lista.classList.add("colorCoral")
        contador=1
    }else{
        lista.classList.remove("colorCoral")
        contador=0
    }
}
