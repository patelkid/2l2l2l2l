noseX=0;
noseY=0;

function preload() {
  clown_nose = loadImage('https://i.postimg.cc/J7j0dpN8/imgbin-red-nose-clown-red-balloon-cnm-CVRr-ZJ5we2-ALPp-U36uk19-Q.jpg');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
  console.log(results);
  noseX = results[0].pose.nose.x;
  noseY = results[0].pose.nose.y+5;
  console.log("nose x = " + noseX);
  console.log("nose x = " + noseY);
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  fill(255,0,0);
  stroke(255, 0, 0);
  circle(noseX, noseY, 20);
  image(clown_nose, noseX, noseY, 30, 30)
}

function take_snapshot(){
  save('myFilterImage.png');
}