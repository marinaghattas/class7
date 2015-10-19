function setup() {

  createCanvas(windowWidth, windowHeight);

  drawWindow (50,50); // call the function
  drawWindow (200,50); // call the function




    for(var i=0; i<150; i++){
        console.log(i);
        drawWindow(50*i,50);
}
}

function draw(){
}

function drawWindow(startX,startY){
    strokeWeight(1);
    stroke('black');
    fill('lightpink');
    rect(startX,startY,100,250);


}
