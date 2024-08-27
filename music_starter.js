let img
let firstRun = true 


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
if (firstRun) {
img = loadImage ('image.jpeg')
firstRun = false 
}


  background(img)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  

  let circle1 = map(drum, 0, 100, 50, 200)
  fill (255) //white 
  ellipse (100, 100, circle1, circle1);

  let circle2 = map(bass, 0, 100, 50, 250)
  fill (0) //black 
  ellipse (400, 200, circle2, circle2);

  let circle5 = map(bass, 0, 150, 100, 270)
  fill (0, 70)
  stroke(255)
  strokeWeight(3)
  ellipse (400, 200, circle5, circle5)

  let ellipse1 = map(vocal, 0, 100, 50, 200)
  fill (255, 0, 0) //red 
  ellipse (260, 400, 200, ellipse1);

  let circle3 = map(other, 0, 50, 100, 250)
  fill (0, 0, 255) //blue 
  ellipse (500, 500, circle3, circle3)




//   let circle4 = map(words, 0, 150, 150, 200)
//  fill (255, 70)
//  ellipse (200, 250, circle4, circle4)

//   if(counter > 300 && counter < 500){
//  fill (0)

//   }
// else {
//   fill (0, 255, 255)
// }


//   for(let i = 0; i <=5; i++){
//   let y = 100 
// ellipse (300, y * i, 50)

//   }



}

  
  //  let bar_spacing = height / 10;
  //  let bar_height = width / 12;
  //  let bar_pos_x = width / 2;
 

  //  // vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
 
  //  // display "words"
  //  textAlign(CENTER);
  //  textSize(vocal);
  //  text(words, width/2, height/3);