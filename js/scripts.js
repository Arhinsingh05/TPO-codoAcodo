

/* Desplazamiento del header */
let ubicacionPrincipal = window.pageYOffset; 

AOS.init();

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset; 
    if(ubicacionPrincipal >= desplazamientoActual){ 
        /* el header aparece y desaparece en todas las páginas, salvo en inicio.html */
        document.getElementsByClassName("header-pag")[0].style.top = "0px"
    }else{
        document.getElementsByClassName("header-pag")[0].style.top = "-100px"
    }
    ubicacionPrincipal = desplazamientoActual; 
})

/* Transición: cambio de color */
function cambiar_color (div) {
	div.style.background = rgb(25, 43, 121);
    div.style.border = dotted;
}

function volver_color (div) {
	div.style.background = '';
    div.style.border = '';
}

/* Formulario de contacto */

import swal from 'sweetalert'

function validacion_al_enviar_datos() {

    if (document.contacto.nombre.value.length == 0) {
        alert("Ingrese su nombre")
        document.contacto.nombre.focus()
        return 0;
    }


    if (document.contacto.apellido.value.length == 0) {
        alert("Ingrese su apellido")
        document.contacto.apellido.focus()
        return 0;
    }


    if (document.contacto.email.value.length == 0) {
        alert("Ingrese una dirección de email válida")
        document.contacto.email.focus()
        return 0;
    }     


     if (document.contacto.mensaje.value.length == 0) {
        alert("Ingrese su mensaje")
        document.contacto.mensaje.focus()
        return 0;
    }
}

const $form = document.querySelector('#form')
$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body:form,
    headers:{
      'Accept': 'application/json'      }
  })

  if(response.ok){
    this.reset()
    swal({
            title: "Mensaje enviado!",
            text: "Gracias por contactarnos! Te responderemos lo más pronto posible.",
            icon:"success",
        })
}

} 