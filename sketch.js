//Program is based of what i learned from Daniel Shiffman, codingtrain.com and skillcrush.com

let x = 0;
let y = 0;
let spacing = 100;
let saveButton;
let clearButton;
let printButton;
let spacingButton;
var slider;
var sliderColor;
var col = {
  r: 255,
  g: 0,
  b: 0
  }

function setup() {
  
  createCanvas(500, 500);
  background(255);
  saveButton = createButton('SAVE');
  saveButton.position(100, 350);
  saveButton.size(100, 100)
  saveButton.mousePressed(save);
  printButton = createButton('LINES');
  printButton.position(240, 350);
  printButton.size(100, 100);
  printButton.mousePressed(make);
  makeButton = createButton('SQUARE')
  makeButton.position(240, 220);
  makeButton.size(100, 100); makeButton.mousePressed(makesquare);
  //drawButton = createButton('Draw')
  BGButton = createButton('CHANGE BG')
  BGButton.position(100, 220);
  BGButton.size(100, 100);
  BGButton.mousePressed(ChangeBG);
  slider = createSlider(5, 100, 50);
  slider.position(100, 570);
  sliderColor = createSlider(50, 255, 255, 0);
  sliderColor.position(100, 670);
  sliderSpacing = createSlider(10, 200, 100);
  sliderSpacing.position(100, 620);
}
function saveArt() {
  save('Art.png');
}

function makesquare() {
  
r = random(255, 0);
  g = random(0, 255);
  b = random(0, 255);
  

  strokeWeight(slider.value());
  fill(r,g,b, sliderColor.value());
  if (random (1) < 0.5) {
    //(x,y,spacing,spacing);
    rect(x, y, sliderSpacing.value());
    //point(x, y + spacing, y + spacing)
    
   } else {
     
    //line(x, y + spacing, x + spacing, y);
}
  x = x + sliderSpacing.value();
  if (x > width) {
    x = 0;
    y = y + sliderSpacing.value();
    }
  
  }


function make() {
  
r = random(255, 0);
  g = random(0, 255);
  b = random(0, 255);
  
  stroke(r,g,b, sliderColor.value());
  strokeWeight(slider.value());
  if (random (1) < 0.5) {
    //(x,y,spacing,spacing);
    line(x, y, x + sliderSpacing.value(), + y + sliderSpacing.value());
    //point(x, y + sliderSpacing.value(), y + sliderSpacing.value());
    
   } else {
     
    line(x, y + sliderSpacing.value(), x + sliderSpacing.value(), y);
}
  x = x + sliderSpacing.value();
  if (x > width) {
    x = 0;
    y = y + sliderSpacing.value();
    if(y <= height);
    
    }
  
  
  }
function mousePressed(){
  r = random(255, 0);
  g = random(0, 255);
  b = random(0, 255);
 strokeWeight(slider.value());
  fill(r,g,b, sliderColor.value());
  circle(mouseX, mouseY, random(100, 0))
  }
function ChangeBG(){
  background(random(0, 255));
  }
