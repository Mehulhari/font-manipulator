size="0";

canvas  =  createCanvas(500, 500);

Webcam.attach( '#camera' );

camera = document.getElementById("camera");
      
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90,
  });
  
function  draw(){
  background("#e39f07");
  fill( "FF0000");
  stroke("#FF0000");  
  textSize("");

}
    