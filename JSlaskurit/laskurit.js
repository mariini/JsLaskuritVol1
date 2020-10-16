

function lajitteleNumerot(){
event.preventDefault();
let luvut=new Array();
luvut[0]=document.getElementById("luku1").value;
luvut[1]=document.getElementById("luku2").value;
luvut[2]=document.getElementById("luku3").value;
luvut.sort(function(a,b){return a - b});   
    document.getElementById("tulos").innerHTML=luvut;
    }

function nollaaLaskuri(){
    document.getElementById("tulos").innerHTML=(" ");
    document.getElementById("luku1").value=" ";
    document.getElementById("luku2").value=" ";
    document.getElementById("luku3").value=" ";
}




function tarkistaLuku(){
    event.preventDefault();
    let luku = document.getElementById("pariLuku1").value;
    let result = (luku % 2 == 0) ? "parillinen." : "pariton.";
    document.getElementById("kumpi").innerHTML=("Luku on " + result);
}
function nollaaLaskuri(){
    document.getElementById("kumpi").innerHTML=(" ");
}



function tulkkaa(){
    let kaannos=document.getElementById("kielet").value;
if (kaannos=="eng"){
    document.getElementById("tulkkaus").innerHTML=("Käännös on: Hello world!");
} else if (kaannos=="fra"){
    document.getElementById("tulkkaus").innerHTML=("Käännös on: Bonjour le monde!");
} else if (kaannos=="esp"){
    document.getElementById("tulkkaus").innerHTML=("Käännös on: Hola mundo!");
} else if (kaannos=="pol"){
    document.getElementById("tulkkaus").innerHTML=("Käännös on: Witaj świecie!");
}
  else
    document.getElementById("tulkkaus").innerHTML=("Käännös on: ");
}  



function suurinLuku(){
    event.preventDefault();
    let lukujono=new Array();
lukujono[0]=document.getElementById("eka").value;
lukujono[1]=document.getElementById("toka").value;
lukujono[2]=document.getElementById("kolmas").value;
lukujono[3]=document.getElementById("neljas").value;
lukujono[4]=document.getElementById("viides").value;
let suurin = Math.max(...lukujono);
document.getElementById("suurin").innerHTML = "Suurin luku on " + suurin;

}
function nollaaSuurin(){
    document.getElementById("suurin").innerHTML=(" ");
}



function lupaAjaa(){

    let age = document.getElementById("age").value;

if (age<=14)
{document.getElementById("lupa").innerHTML = 
"Saat ajaa polkupyörää.";}
else if (age>=15 && age<18)
{document.getElementById("lupa").innerHTML = 
"Saat ajaa polkupyörää ja mopoa.";}
else
{document.getElementById("lupa").innerHTML = 
"Saat ajaa polkupyörää, mopoa ja autoa.";}
}
 


