window.addEventListener("load", ()=>{
    const form = document.getElementById("formulario")
    const usuario = document.getElementById("usuario")
    const apellido = document.getElementById("apellido")
    const correo = document.getElementById("email")
    const asunto = document.getElementById("asunto")
    const mensaje = document.getElementById("mensaje")

    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        validaCampos()
        mostarDatos() 
    })

    const validaCampos=()=>{
        //capturar los valores ingresados por el usuario
        const usuarioValor = usuario.value.trim()
        const apellidoValor = apellido.value.trim()
        const correoValor = correo.value.trim()
        const asuntoValor = asunto.value.trim()
        const mensajeValor = mensaje.value.trim()


       //Campo Usuario
        if (usuarioValor ==="") {
            console.log("Campo Vacio");
            validaFalla(usuario, "Campo Vacio")
            
        }else{
            validarCorrecto(usuario)
        }

        //Campo Apellido
        if (apellidoValor ==="") {
            console.log("Campo Vacio");
            validaFalla(apellido, "Campo Vacio")
            
        }else{
            validarCorrecto(apellido)
        }


        //Campo email
        if (!correoValor) {
            validaFalla(correo, "Campo Vacio")

            
        }else if(!validaEmail(correoValor)){
            validaFalla(correo, "El email no es valido")
        }else{
            validarCorrecto(correo)
        }

         //Campo Asunto
        if (asuntoValor ==="") {
            console.log("Campo Vacio");
            validaFalla(asunto, "El Campo no puede estar Vacio")
            
        }else{
            validarCorrecto(asunto)
        }
        if (mensajeValor ==="") {
            console.log("Campo Vacio");
            validaFalla(mensaje, "El Campo no puede estar Vacio")
            
        }else{
            validarCorrecto(mensaje)
        }

    }

    const validaFalla = (input,msj)=>{
        const formControl = input.parentElement
        const aviso = formControl.querySelector("p")
        aviso.innerText=msj

        formControl.className = "form-control falla"

    }
    const validarCorrecto =(input,msj)=>{
        const formControl = input.parentElement

        formControl.className= "form-control correcto"
    }
    const validaEmail=(correo)=>{
        return /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i.test(correo);
    }

    function mostarDatos() {
        const usuarioValor = usuario.value.trim()
        console.log(usuarioValor)
        const apellidoValor = apellido.value.trim()
        console.log(apellidoValor)
        const correoValor = correo.value.trim()
        console.log(correoValor)
        const asuntoValor = asunto.value.trim()
        console.log(asuntoValor)
        const mensajeValor = mensaje.value.trim()
        console.log(mensajeValor)
        
    }

        

    




})