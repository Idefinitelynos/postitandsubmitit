function setup() {
    canvas=createCanvas(500, 500)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
}
function draw() {
    image(video, 100, 100, 300, 300)
    circle(250, 50, 20 )
    rect(125, 35, 40, 40)
    ellipse(56, 46, 55, 76)
    rect(30, 250, 55, 55, 20);
    rect(15, 125, 60, 90)
    circle(35, 375, 50 )
    triangle(70, 380, 45, 450, 105, 450);
    rect(10, 452, 200, 45,);
    circle(125, 425, 35 )
    rect(225, 410, 80, 80)
    ellipse(370, 450, 100, 50)
    circle(450, 400,80 )
    rect(420, 280, 70, 70, 15);
    triangle(485, 200, 415, 270, 485, 270);
    circle(430, 215, 35 )
    rect(418, 80, 65, 100)
    ellipse(418, 46, 76, 55)
    rect(320, 35, 40, 40)
}
function oe() {
    save("photo.png")
}
