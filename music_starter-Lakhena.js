let img
let firstRun = true 


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
if (firstRun) {
img = loadImage ('bg img3.jpg')
firstRun = false 
}


  background(img)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

//bc of opacity, darkest layer first then light?
//paramertise the varibales by making one circle and adjusting the rest of tehm so i dont have 100... i thinkkkks
  let circle4 = map(drum, 0, 100, 700, 1250)
  // noFill()
  // fill (161, 29, 179, 200) //pink
  noStroke()
  // strokeWeight (5)
  // stroke(255) //white 
  ellipse (1350, 750, circle4, circle4);
  noFill()

  // // fill (255, 150) //pink
  // strokeWeight (20)
  // stroke(161, 29, 179, 210) //pink 
  // ellipse (1350, 750, circle4, circle4);

  //reverse opacity layers for strokes outer pink 
  fill (255, 150) //pink
  strokeWeight (40)
  stroke(161, 29, 179, 150) //pink
  ellipse (1350, 750, circle4+10, circle4+10);

  fill (255, 150) //pink
  strokeWeight (40)
  stroke(161, 29, 179, 150) //pink
  ellipse (1350, 750, circle4+100, circle4+100);

  let circle3 = map(drum, 0, 100, 600, 1100)
  // noFill()
  fill (255, 150) //white 
  // fill (99, 64, 194, 100)
  strokeWeight (0)
  stroke(255) //white 
  ellipse (1350, 750, circle3, circle3);

  let circle2 = map(drum, 0, 100, 300, 900)
  // noFill()
  fill (255, 150) //white 
  // strokeWeight (5)
  // stroke(255) //white 
  ellipse (1350, 750, circle2, circle2);

  let circle1 = map(drum, 0, 100, 220, 700)
  fill (255, 200) //white 
  ellipse (1350, 750, circle1, circle1);


  let circle6 = map(bass, 0, 50, 150, 250)
  fill (80, 36, 173, 150) //purple
  // stroke(80, 36, 173)
  // strokeWeight(3)
  ellipse (1350, 750, circle6, circle6)

  let circle5 = map(bass, 0, 30, 100, 160)
  fill (80, 36, 173, 150) //purple
  // stroke (80, 36, 173)
  ellipse (1350, 750, circle5, circle5);
  
  let circle8 = map(other, 0, 50, 100, 100)
  fill (74, 45, 189, 100) // dark purple 
  stroke (64, 68, 194)
  ellipse (1350, 750, circle8, circle8);

  let circle7 = map(other, 0, 70, 120, 200)
  fill (74, 45, 189, 130) // dark purple
  stroke (64, 68, 194)
  ellipse (1350, 750, circle7, circle7);

  //flower/star 
  let ellipse1 = map(vocal, 0, 40, 70, 80)
  fill (161, 29, 179, 180) //dark pink 
  strokeWeight(2)
  stroke (161, 29, 179) //white, transparent 
  ellipse (1350, 750, ellipse1, 20); //this is just for weird pattern i made, can be normal circle 

  let ellipse2 = map(vocal, 0, 40, 70, 80)
  fill (161, 29, 179, 180) //dark pink 
  // strokeWeight(2)
  // stroke (255, 100) //white, transparent 
  ellipse (1350, 750, 20, ellipse2);

  // //circle
  // fill (161, 29, 179, 210) //dark pink 
  // stroke (161, 29, 179, 210) //pink, transparent 
  // ellipse (1350, 750, ellipse1, ellipse1); //this is just for weird pattern i made, can be normal circle 









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