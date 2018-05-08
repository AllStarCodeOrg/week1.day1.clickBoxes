let colors, 
box_height, 
box_width, 
box_coordinates,
box_speeds;

function setup(){
    createCanvas(600,600);
    
    box_height = 100;
    box_width = 100;

    colors = ["blue","blue"];
    box_coordinates = [
        [random(width-100),random(height-100)], // random location within canvas
        [random(width-100),random(height-100)] // random location within canvas
    ]
    box_speeds = [
        [random(4),random(4)], // random x and y speeds
        [random(4),random(4)]  // random x and y speeds
    ]
}

function draw(){
    background("#454545");
    // for every box coordinate    
    for(let i = 0; i < box_coordinates.length; i++){
        drawBox( box_coordinates[i][0], box_coordinates[i][1], colors[i]);
    }
    moveBoxes();
}

const drawBox = function(x,y,box_color){
    fill(box_color);
    rect(x,y,box_width,box_height);
}

function mousePressed(){
    // for every box coordinate
    for(let i = 0; i < box_coordinates.length; i++){
        const box_x = box_coordinates[i][0];
        const box_y = box_coordinates[i][1];
        if(
            mouseX > box_x              // between left side
            && 
            mouseX < box_x + box_width  // and right side
            &&
            mouseY > box_y              // between top side
            && 
            mouseY < box_y + box_height // and bottom side
        ){
            // change color
            if(colors[i] === "red"){
                colors[i] = "blue";
            }else{
                colors[i] = "red";
            }
        }
    }
}

const moveBoxes = function(){
    // for every box coordinate
    for(let i = 0; i < box_coordinates.length; i++){

        //X DIRECTION
        const x = box_coordinates[i][0];
        if( x >= width - box_width ){
            box_speeds[i][0] = -box_speeds[i][0]; // x_speed
        }else if(x <= 0){
            box_speeds[i][0] = -box_speeds[i][0]; // x_speed
        }
        box_coordinates[i][0] += box_speeds[i][0];
        
        //Y DIRECTION
        const y = box_coordinates[i][1];
        if (y >= height - box_height ) { 
            box_speeds[i][1] = -box_speeds[i][1]; // y_speed            
        }
        else if (y <= 0){ 
            box_speeds[i][1] = -box_speeds[i][1]; // y_speed            
        }
        box_coordinates[i][1] += box_speeds[i][1];
    }

}