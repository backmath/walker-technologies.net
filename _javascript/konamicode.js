counter = 0;
window.onkeydown = function(e){konamicode(e.which)}

function konamicode(button)
{

 var code = new Array(38,38,40,40,37,39,37,39,66,65);

 if(code[counter] === button)
 {
   counter++;
   if(counter === 10){Alert();counter = 0; return false;}
   return false;
 }
 else if (button === 38)
 {
  counter = 1;
  return false;
 }
 else
 {
  counter = 0;
  return false;
 }
}

function loadWAVE()
{

 audio = document.createElement("audio");
 audio.setAttribute('autoplay','autoplay');
 audio.setAttribute('id','MGSAlert');


 source = document.createElement("source");
 source.setAttribute('src','/themes/old/scripts/Alert.wav');

 audio.appendChild(source);
 audio.setAttribute('src','/themes/old/scripts/Alert.wav');

 document.body.appendChild(audio);

}

function Alert()
{

 var audio = document.getElementById("MGSAlert");
 if (document.getElementById("MGSAlert") == null)
 {
  loadWAVE();
 }
 else
 {
  audio.play();
 }
}

