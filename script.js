const submit = document.querySelector("#btn-submit")
const msg = document.getElementById("msg")
submit.addEventListener("click", (ev)=> {
    ev.preventDefault()

    console.log("Enviado")
msg.textContent= "Enviado"
})