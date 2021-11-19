function preload(){

}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 230, 150, 220, 200);
    fill("fc0000");
    stroke("fc0000");
    circle(50, 50, 80);
    circle(50, 430, 80);
    circle(590, 50, 80);
    circle(590, 430, 80);
    fill("00fc15");
    stroke("00fc15");
    rectangle(90, 40, 460, 20);
    rectangle(90, 420, 460, 20);
    rectangle(40, 90, 20, 300);
    rectangle(580, 90, 20, 300);
}
function takeSnapshot(){
    save("my_snapshot");
}