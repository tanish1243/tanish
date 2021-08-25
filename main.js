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
    }
}




 function draw(){
background("#42b0d4") 
 }