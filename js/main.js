function setup() {

  createCanvas(windowWidth, windowHeight);
//
//  drawWindow (50,50); // call the function
//  drawWindow (200,50); // call the function


}

function draw(){
    var x = 0;
    var y = 0;
    var gridWidth = 900;
    for(var i=0; i<100; i++){
        console.log(i);
        drawWindow(x,y);
        //increment our x
        x += 120; //same as x = x + 120;
        //chev=ck if x is past the drid width
        if(x > gridWidth){
            //set X back to the beginning
            x=0;
            //move y down
            y += 270;

        } // end if
    } //end for loop
} //end setup

function drawWindow(startX,startY){
    strokeWeight(1);
    stroke('black');
    fill('lightpink');
    rect(startX,startY,100,250);




}
