function setup() {

  createCanvas(windowWidth, windowHeight);

//  drawWindow (50,50); // call the function
//  drawWindow (200,50); // call the function

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



function draw(){
}
function drawWindow(startX,startY){
    strokeWeight(1);
    stroke('black');
    fill('lightpink');
    var winWidth = 100;
    var winHeight = 250;
    rect(startX,startY,winWidth,winHeight);

    strokeWeight(3);
    line(startX + winWidth/2, startY, startX + winWidth/2, startY+ winHeight);

line(startX, startY+winHeight/3, startX + winWidth, startY+winHeight/3);
line(startX, startY+winHeight*.66, startX + winWidth, startY+winHeight*.66);


}
