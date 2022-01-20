status="";
img="";
objects=[];


 function preload(){
     img=loadImage('dining room.jpg');

 }

 function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectdetector=ml5.objectDetector('cocossd',modalLoaded);
document.getElementById('status').innerHTML="Status : Detecting Objects";
}

function modalLoaded(){
console.log("Modal is loaded") ;
status=true;
objectdetector.detect(img,gotresult);
}

function gotresult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
    }
function draw(){
    image(img,0,0,640,420);
}