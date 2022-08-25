noseX=0;
noseY=0;
function setup() {
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    poseNet=ml5.poseNet(video, modelloaded)
    poseNet.on("pose", gotposes)
}
function draw() {
    image(video, 0, 0, 300, 300)
    image(mustache, noseX-40, noseY-60, 50, 50)
}
function modelloaded() {
    console.log("poseNet is prepared")
}
function gotposes( results) {
    if (results.length>0) {
        console.log(results)
        console.log("noseX="+results[0].pose.nose.x)
        console.log("noseY="+results[0].pose.nose.y)
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y
    }
}
function preload() {
    mustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}
