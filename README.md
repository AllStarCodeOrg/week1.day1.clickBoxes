# week1.day1.clickBoxes

## Instructions
1. Use command line to create a new project folder called `clickBoxes`
    - Navigate into the folder and create your required files (`index.html`, `sketch.js`) 
    - Include a reference to p5.js in your `index.html` file
2. In your `sketch.js`, setup your canvas (600x600)
    - Draw 2 squares, one taking up the entire left side of the canvas and the other taking up the right side.
    - Fill the squares with the color blue
3. When the blox is clicked, have the color of the box being clicked change from blue to red (it should stay that way, until pressed again).
    - *Hint: Consider using an array to keep track of multiple pieces of related information. You can then loop through the array.*
4. When the mouse is pressed again, the color should change back to red.

## Extra Credit
- Make your boxes smaller (100x100) - the space around both boxes should just be background
    - The color of each box should still only change when clicked by the mouse
    - *Hint: think about what it means for the `mouseX` and `mouseY` to be within the area of the boxes*
- Have both boxes "bounce" around the screen (much like we did for the bouncing ball)
    - Clicking on the box while it moves should still properly change its color

## Helpful Resources
- [p5.js reference](https://p5js.org/reference/)
- [p5.js CDN](https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.js) found at [cdnjs.com](https://cdnjs.com/libraries/p5.js/)
