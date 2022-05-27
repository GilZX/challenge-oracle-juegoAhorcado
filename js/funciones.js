
let charSession=sessionStorage.getItem('newPalabra') || null 
palabras=["Alura","Oracle","Capital","Bruja","Caballero","Cruz","Trebol","Mago","Posima","Talisman"];
if(charSession!=null){
    palabras.push(charSession)
}


window.onload=cargarPalabra;


letras=[]////f
var gameOver=false;
var intentos=0;
var vidas=0;
var aciertos=0;



document.addEventListener('keydown',function(event){ 

    let regla=new RegExp('[A-Za-z]')
    if(regla.test(event.key)){
        if (letras.includes(event.key)){

        }else{
            letras.push(event.key)//h
            console.log(event.key)
            if(gameOver==false){///
                jugar(event.key)
            }
           
        
        
        }
   
    }
        
   
})

function agregarPalabra(){
   
    let input=document.getElementById('inputNuevaPalabra');
    input.style.visibility="";
    gameOver=true;

   
}
function guardar(){
    let input=document.getElementById('inputNuevaPalabra');
    let palabra=input.value;
    sessionStorage.setItem('newPalabra',palabra);
    gameOver=false;
    location.reload();
   
   
}



function rendirte(){
    location.href="index.html"
}
function aleatorio(){
    let num=parseInt((Math.random()*10)+(palabras.length-10))
    return num
}
function nuevaPalabra(){
    location.href="palabra.html"
}


function cargarPalabra(){
   // let input=document.getElementById("input-letra")
   // input.addEventListener('input',function(){alert(this.value)})
    console.log(palabras)
    //let palabra=document.querySelector(".palabra")
    //let divInput=document.querySelector("#input-letra")
    let tabla=document.getElementById("tablero")
    let tr=document.createElement("tr")
    let trbase=document.createElement("tr")
   // palabra.textContent=palabras[aleatorio()]
    let frase=palabras[aleatorio()]
    
    //divInput.textContent=frase
    let palabraElejida=frase.split('')
    for(let i=0; i<palabraElejida.length; i++){
        let nodo=document.createElement("td")
        nodo.classList.add(palabraElejida[i])
        nodo.style.visibility="hidden"
        nodo.textContent=palabraElejida[i]
        tr.appendChild(nodo)
        let nodo2=document.createElement("td")
        nodo2.textContent="__"
        trbase.appendChild(nodo2)
    }
    tr.classList.add("tr-palabra")
    tabla.appendChild(tr)
    trbase.classList.add("tr-base")
    tabla.appendChild(trbase)
    console.log(tabla)
}

function dibujar(numVidas){

    let canva=document.getElementById("pantalla");
    let content=canva.getContext("2d");
    content.fillStyle="rgb(200,0,0)";
    switch (numVidas){
        case 1:
            content.fillRect(10,10,10,300);
        break;    
        case 2:
            content.fillRect(10,10,200,10);
        break;
        case 3:
            content.fillRect(210,10,10,35);
        break;
        case 4:
            content.fillStyle="black";
            content.beginPath();
            content.arc(212,50,25,0,2*Math.PI);
            content.fill();
        break;
        case 5:
            content.fillStyle="black";
            content.fillRect(210,75,10,75);
        break;
        case 6:
            content.lineWidth = 6;
            content.fillStyle="black";
            content.beginPath();
            content.moveTo(212, 75);
            content.lineTo(250, 105);
            content.stroke();
        break;    
        case 7:
            content.lineWidth = 6;
            content.fillStyle="black";
            content.beginPath();
            content.moveTo(212, 75);
            content.lineTo(185,105);
            content.stroke();
        break;
        case 8:
            content.fillStyle="black";
            content.beginPath();
            content.moveTo(212,150);
            content.lineTo(190, 200);
            content.stroke();
        break;
        
        case 9:
            let game=document.getElementById("img-gameover")
            content.fillStyle="black";
            content.beginPath();
            content.moveTo(216,150);
            content.lineTo(250, 200);
            content.stroke();
            game.style.visibility=""
            console.log("perdiste")
            gameOver=true;

            

        break;    
    }
    

}

function jugar(char){//h

    let letra=document.querySelector(".tr-palabra")
    let fallos=document.querySelector("#tr-fallos")
    
    let contador=letra.childNodes.length
    let inlista=false
    for(let l=0;l<contador;l++){
      if(letra.children[l].textContent.toLowerCase()==char){
          letra.children[l].style.visibility=""
          console.log(letra.children[l])
          aciertos+=1
          inlista=true
      }
        
    }

    if(aciertos==contador){
        let win=document.getElementById("img-winner");
        let pront=document.getElementById("resultado");
        let mensaje=document.createElement("h1");
        win.style.visibility=""
        mensaje.textContent="!!! Ganaste Buen Trabajo !!!"
        mensaje.classList.add("resultadoH1")
        pront.appendChild(mensaje)
        console.log("Ganaste")
        gameOver=true
    }

    if(!(inlista)){
        vidas=vidas+1
        
        let nodo=document.createElement("td")
        nodo.textContent=char
        fallos.appendChild(nodo)
    
        dibujar(vidas)
        
      
    }


    console.log(vidas)
    console.log(char)
   
}

function newGame(){
    location.reload()
}