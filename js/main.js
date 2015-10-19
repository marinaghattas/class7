function setup() {

  createCanvas(windowWidth, windowHeight);

  drawWindow () ; // call the function
  drawWindow () ; // call the function

}

function draw(){
}

function drawWindow(startX,startY){
  strokeWeight(1);
  stroke('black');
  fill('lightpink');
  rect(50,50,100,250);

  strokeWeight(1);
  stroke('black');
  fill('Antiquewhite');
  rect(170,50,100,250);

}
