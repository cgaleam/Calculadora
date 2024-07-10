const pantalla= document.querySelector("#pantalla");
const buttons= document.querySelectorAll('button'); // crea un array con todos los botones

buttons.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        if(btn.id==="="){
            pantalla.value=eval(pantalla.value); // calcula el resultado
        }else if(btn.id==="c"){
            pantalla.value="";   // limpia la pantalla
        }else if(btn.id==="de"){
            pantalla.value= pantalla.value.slice(0, -1); // elimina el último caracter
        }else if(btn.id==="%"){
            pantalla.value= (pantalla.value)/100;
        }else{
            pantalla.value+=btn.id; // agrega el nuevo caracter, para trabajar con mas cifras
        }
    })
})