let colors, 
box_height, 
box_width, 
box_coordinates;

function setup(){
    createCanvas(600,600);
    
    box_height = height; // each box is full height of canvas
    box_width = width/2; // each box is half width of canvas

    colors = ["blue","blue"];
    box_coordinates = [
        [0,0], // first box in upper left corner
        [box_width,0] // second box starts at half width
    ]
}

function draw(){
    background("#454545");
    for(let i = 0; i < 2; i++){
        drawBox( box_coordinates[i][0], box_coordinates[i][1], colors[i]);
    }
}

const drawBox = function(x,y,box_color){
    fill(box_color);
    rect(x,y,box_width,box_height);
}

function mousePressed(){
    // since boxes take up full height, only the x direction matters
    let index;
    if(mouseX < width/2){ // left box
        index = 0;
    }else{ // right box
        index = 1;
    }

    if(colors[index] === "red"){
        colors[index] = "blue";
    }else{
        colors[index] = "red";
    }
}