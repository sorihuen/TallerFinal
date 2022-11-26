const container = document.getElementById("container")

container.addEventListener("click",(e)=>{
    if(e.target.classList.contains("codigo")){
        console.log(e.target.parentElement)
        e.target.parentElement.classList.toggle("scale")
      
    }
})