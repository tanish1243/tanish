leftwristx="";
rightwristx="";
distance="";
nosex="";
nosey="";


function setup(){
 canvas = createCanvas(550 ,500);
canvas.position(785, 150)

video= createCapture(VIDEO);
video.size(550 ,550);

poseNet= ml5.poseNet(video,modelloaded);
poseNet.on('pose', gotPoses);
}
function modelloaded(){
    console.log(" Model has loaded");
}
function gotPoses(Results){
    if(Results.length > 0){
        console.log(Results)
     leftwristx= Results[0].pose.leftWrist.x;
     rightwristx= Results[0].pose.rightWrist.x;
     distance= floor(leftwristx-rightwristx)
     nosex= Results[0].pose.nose.x;
     nosey= Results[0].pose.nose.y;


    }

}




 function draw(){
background("#42b0d4") 
textSize(distance);
fill("red");
text("Tanish",nosex,nosey)
document.getElementById("fontsize").innerHTML="Font Size Of Text Is " + distance + " pixels"
 }