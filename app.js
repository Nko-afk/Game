let numVistos = []; 
let CanIntentos = 1;
let Max = 10;

function NumAleatorio() {
    let NumAle = Math.floor(((Math.random())*Max)+1);
    if(numVistos.length==Max){
        asignarTexto("p","Ya se utilizaron todos los numeros posibles!")
        document.querySelector('#intentar').setAttribute('disabled','true');
    }else{
    if(numVistos.includes(NumAle)){
        return NumAleatorio();
    }else{
        numVistos.push(NumAle);
        return NumAle;}
}}
let Num = NumAleatorio();

function CartelDeInicio(){
    asignarTexto('h1',"juego del numero secreto!"); 
    asignarTexto('p',"Indica un numero entre el 1 y el 10:"); 
}

function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function NewGame() {   
    console.log(Num);
    console.log(numVistos); 
    CartelDeInicio();
    //LimpiarCaja();
    Num = NumAleatorio();  
    CanIntentos=1;
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
function VerificarIntento(){
    let numUsuario = parseInt(document.getElementById('valorUsu').value);
    if(numUsuario==Num){
        asignarTexto('p',`Acertaste en ${CanIntentos} ${(CanIntentos==1) ? 'intento' : "Intentos"}`); 
        document.getElementById('reiniciar').removeAttribute('disabled');
        }else 
            if(numUsuario<Num){asignarTexto("p","Ingresa un Numero mas alto:")
                }else{asignarTexto("p","Ingresa un Numero mas bajo:")}
    CanIntentos++;
    LimpiarCaja(); 
    //return ;
}

function LimpiarCaja(){
    let ValorCaja = document.querySelector('#valorUsu').value="";
}

CartelDeInicio();