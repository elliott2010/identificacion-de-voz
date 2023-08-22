x=0;
y=0;
dibujar_circulo="";
dibujar_rectangulo="";

var SpeechRecognition=window.webkitSpeechRecognition
 var recognition=new SpeechRecognition()
function setup(){
    canvas=createCanvas(900,600)
}
function start(){
    document.getElementById("statue").innerHTML="Habla!!!!!!!!";
    recognition.start()
}
recognition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript;
    document.getElementById("statue").innerHTML="dijiste"+content;
    if(content=="Circle"){
        x=Math.floor(Math.random()*900)
        y=Math.floor(Math.random()*600);
dibujar_circulo="bruh"
    }
}
function draw(){
    if(dibujar_circulo=="bruh"){
        circle(x,y,20)
    }
}