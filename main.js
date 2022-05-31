canvas = document.getElementById("Canvas");
ctx=canvas.getContext("2d");

Nasa_mars_img["nasa-mars.jpeg","mars.jpeg","mars.jpg"];

random_number = Math.floor(Math.random() * 4);
console.log(random_number);
rover_height = 70;
rover_width = 90;

background_image = nasa_mars_img[random_number];
console.log("background_image = " + background_image);
rover_image = "rover.png";

rover_x = 20;
rover_y = 10;

function add(){
    
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;

}

function uploadBackground(){
    ctx.drawImage(background_ImgTag,0,0,canvas.width,canvas.heigth);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    KeyPressed = e.keyCode;
    console.log(KeyPressed);


     if(KeyPressed == "38")
     {
         up();
         console.log("up");
     }

     if(KeyPressed == "40")
     {
         down();
         console.log("down");
     }
     if(KeyPressed == "37")
     {
         left();
         console.log("left");
     }
     if(KeyPressed == "39")
     {
         right();
         console.log("right");
     }
}

function up()
{
  if (rover_y >=10)
  {
     rover_y = rover_y - 10;
     console.log("When up arrow is pressed, x= " + rover_x + "| y = " + rover_y);
     uploadBackground();
     uploadrover();
  }
}
function down()
{
  if (rover_y <=800)
  {
     rover_y = rover_y + 10;
     console.log("When down arrow is pressed, x= " + rover_x + "| y = " + rover_y);
     uploadBackground();
     uploadrover();
  }
}
function left()
{
  if (rover_x >=0)
  {
     rover_y = rover_y - 10;
     console.log("When left arrow is pressed, x= " + rover_x + "| y = " + rover_y);
     uploadBackground();
     uploadrover();
  }
}
function right()
{
  if (rover_x <=799)
  {
     rover_y = rover_y + 10;
     console.log("When right arrow is pressed, x= " + rover_x + "| y = " + rover_y);
     uploadBackground();
     uploadrover();
  }
}
