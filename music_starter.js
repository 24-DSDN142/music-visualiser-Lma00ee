let img
let firstRun = true 
let circleX = [1336, 765] //x and y position of circles in middle of image
let drumBeat = [700, 1250, 600, 1100, 300, 900, 220, 700] //array variables of map of drum ranges
let bassBeat = [150, 250, 100, 160] //array variables of map of bass ranges
let otherBeat = [140, 200] //array variables of map of other ranges
let vocalBeat = [90, 60] //array variable of map of vocal ranges
let ranges = [0, 100, 50, 40, 30, 70, 130] //first and second ranges of maps for all


function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
if (firstRun) {
img = loadImage ('bg img.jpg')
firstRun = false 
}

//variables 
//map variables 
let drumMap1 = map(drum, ranges[0], ranges[1], drumBeat[0], drumBeat[1]) //0, 100, 700, 1250
let drumMap2 = map(drum, ranges[0], ranges[1], drumBeat[2], drumBeat[3]) //0, 100, 600, 110
let drumMap3 = map(drum, ranges[0], ranges[1], drumBeat[4], drumBeat[5]) //0, 100, 300, 900
let drumMap4 = map(drum, ranges[0], ranges[1], drumBeat[6], drumBeat[7]) //0, 100, 220, 700
let bassMap1 = map(bass, ranges[0], ranges[3], bassBeat[0], drumBeat[6]) //0, 40, 220, 250
let bassMap2 = map(bass, ranges[0], ranges[4], bassBeat[0], bassBeat[1]) //0, 30, 150, 250
let otherMap1 = map(other, ranges[0], ranges[2], ranges[1], ranges[6]) //0, 50, 100, 130
let otherMap2 = map(other, ranges[0], ranges[5], otherBeat[0], otherBeat[1]) //0, 70, 140, 200
let vocalMap1 = map(vocal, ranges[0], ranges[3], ranges[5], vocalBeat[0]) //0, 40, 70, 90

//colour variables
let lightPurple1 = color(221, 212, 255, 150)
let Magenta = color(161, 29, 179)
let Magenta1 = color(161, 29, 179, 180)
let Magenta2 = color(161, 29, 179, 50)
let Magenta3 = color(161, 29, 179, 130)
let darkMagenta = color(208, 197, 250, 150)
let magentaStroke = color(161, 29, 179, 170)
let darkPurple = color(80, 36, 173, 150)
let darkPurple1 = color(74, 45, 189, 100)
let darkPurple2 = color(74, 45, 189, 130)


//////////////////////////////////////////////////////////

  background(img)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  console.log(counter)

//2247 chorus part first 
//baby when we touch liek 10,000 smth 
//end is 11520
//4899
//9961 BABY WHEN WE TOOOOOOOOOOUC
  

//bc of opacity, darkest layer first then light?

  //reverse opacity layers for strokes outer pink 
  noStroke()
  fill (darkMagenta) 
  strokeWeight(40)
  stroke(magentaStroke) 
  ellipse(circleX[0], circleX[1], drumMap1+10, drumMap1+10);
  ellipse(circleX[0], circleX[1], drumMap1+90, drumMap1+90);

   //white glowey
  //  noFill()
  //  strokeWeight (3)
  //  stroke(255, 200) //pink
  //  ellipse (circleX[0], circleX[1], drumMap1+200, drumMap1+190);
   
 
  noFill()
  strokeWeight (20)
  stroke(Magenta3) //pink
  ellipse (circleX[0], circleX[1], drumMap1+200, drumMap1+180);

  fill (lightPurple1) 
  strokeWeight (0)
  ellipse (circleX[0], circleX[1], drumMap2, drumMap2);

  fill (lightPurple1) 
  ellipse (circleX[0], circleX[1], drumMap3, drumMap3);

  fill (lightPurple1) 
  ellipse (circleX[0], circleX[1], drumMap4, drumMap4);

  // noFill()
  // strokeWeight (20)
  // stroke(Magenta2) //pink
  // ellipse (circleX[0], circleX[1], drumMap3, drumMap3);
  
  // strokeWeight (20)
  // stroke(Magenta1) //pink
  
  fill (darkPurple) 
  ellipse (circleX[0], circleX[1], bassMap1, bassMap1)

  fill (darkPurple) 
  ellipse (circleX[0], circleX[1], bassMap2, bassMap2);
  
  fill (darkPurple1) 
  stroke (64, 68, 194)
  ellipse (circleX[0], circleX[1], otherMap1, otherMap1);
  
  fill (darkPurple2) 
  stroke (64, 68, 194)
  ellipse (circleX[0], circleX[1], otherMap2, otherMap2);
  

  //flower/star in middle 
  fill (Magenta1) 
  strokeWeight(2)
  stroke (Magenta) 
  ellipse (circleX[0], circleX[1], vocalMap1, 20); 

  fill (Magenta1) 
  strokeWeight(2)
  stroke (Magenta) 
  ellipse (circleX[0], circleX[1], 20, vocalMap1);


  if(counter >= 100){
  //5897

  //cool outer stroke circle colours outlining small inner middle circles/overlaying making a cool effect/colour
  noFill()
  strokeWeight (20)
  stroke(Magenta2) 

  strokeWeight (20)
  stroke(Magenta3) 
  ellipse (circleX[0], circleX[1], bassMap2, bassMap2);

  fill (darkPurple) 
  ellipse (circleX[0], circleX[1], bassMap1, bassMap1)

  fill (darkPurple) 
  ellipse (circleX[0], circleX[1], bassMap2, bassMap2);

  fill (darkPurple1) 
  stroke (64, 68, 194)
  ellipse (circleX[0], circleX[1], otherMap1, otherMap1);

  fill (darkPurple2) 
  stroke (64, 68, 194)
  ellipse (circleX[0], circleX[1], otherMap2, otherMap2);
  

  //flower/star in middle 
  let ellipse1 = map(vocal, 0, 40, 70, 80)
  fill (Magenta1) 
  strokeWeight(2)
  stroke (Magenta) 
  ellipse (circleX[0], circleX[1], vocalMap1, 20); 

  let ellipse2 = map(vocal, 0, 40, 70, 80)
  fill (Magenta1) 
  strokeWeight(2)
  stroke (Magenta) 
  ellipse (circleX[0], circleX[1], 20, vocalMap1);

  }

  else {

  }

  }
 //RHEHRBHEWHR


   //fill (255, map(???, 255, 0))

//   //  rect (1000, 500, 500, 500)
//    // color (145, 234, 122, map(counter))

//    noStroke()
//    // strokeWeight (5)
//    // stroke(255) //white 
//    // ellipse (circleX[0], circleX [1], drumMap, drumMap);
//    // noFill()
 
//    // // fill (255, 150) //pink
//    // strokeWeight (20)
//    // stroke(161, 29, 179, 210) //pink 
//    // ellipse (1350, 750, circle4, circle4);
 
//    //reverse opacity layers for strokes outer pink 
//    fill (circleCol) //pink
//    strokeWeight (40)
//    stroke(161, 29, 179, 170) //pink
//    ellipse (circleX[0], circleX[1], drumMap1+10, drumMap1+10);
 
//    // fill (255, 150) //pink
//    strokeWeight (40)
//    stroke(Magenta1) //pink
//    ellipse (circleX[0], circleX[1], drumMap1+90, drumMap1+90);
 
//     //white glowey
//    //  noFill()
//    //  strokeWeight (3)
//    //  stroke(255, 200) //pink
//    //  ellipse (circleX[0], circleX[1], drumMap1+200, drumMap1+190);
    
//    // fill (255, 150) //pink, outsideerr
//    noFill()
//    strokeWeight (20)
//    stroke(161, 29, 179, 130) //pink
//    ellipse (circleX[0], circleX[1], drumMap1+200, drumMap1+180);
 
  
 
//    let circle3 = map(drum, 0, 100, 600, 1100)
//    // noFill()
//    fill (circleCol) 
//    // fill (99, 64, 194, 100)
//    strokeWeight (0)
//    stroke(255) //white 
//    ellipse (circleX[0], circleX[1], drumMap2, drumMap2);
 
//    let circle2 = map(drum, 0, 100, 300, 900)
//    // noFill()
//    fill (circleCol) 
//    // strokeWeight (5)
//    // stroke(255) //white 
//    ellipse (circleX[0], circleX[1], drumMap3, drumMap3);
 
//    let circle1 = map(drum, 0, 100, 220, 700)
//    fill (circleCol) 
//    ellipse (circleX[0], circleX[1], drumMap4, drumMap4);
 
  
 
 
//    let circle6 = map(bass, 0, 50, 150, 250)
 
//    // noFill()
//    // strokeWeight (20)
//    // stroke(Magenta2) //pink
//    // ellipse (circleX[0], circleX[1], drumMap3, drumMap3);
   
//    // strokeWeight (20)
//    // stroke(Magenta1) //pink
//    fill (80, 36, 173, 150) //purple
//    // stroke(80, 36, 173)
//    // strokeWeight(3)
//    ellipse (circleX[0], circleX[1], bassMap1, bassMap1)
 
   
 
//    let circle5 = map(bass, 0, 30, 100, 160)
//    fill (80, 36, 173, 150) //purple
//    // stroke (80, 36, 173)
//    ellipse (circleX[0], circleX[1], bassMap2, bassMap2);
   
   
//    let circle8 = map(other, 0, 50, 100, 100)
//    fill (74, 45, 189, 100) // dark purple 
//    stroke (64, 68, 194)
//    ellipse (circleX[0], circleX[1], otherMap1, otherMap1);
   
 
//    let circle7 = map(other, 0, 70, 120, 200)
//    fill (74, 45, 189, 130) // dark purple
//    stroke (64, 68, 194)
//    ellipse (circleX[0], circleX[1], otherMap2, otherMap2);
   
 
 
//    //flower/star 
//    let ellipse1 = map(vocal, 0, 40, 70, 80)
//    fill (circleCol) 
//    strokeWeight(2)
//    stroke (161, 29, 179) //dark pink, transparent 
//    ellipse (circleX[0], circleX[1], vocalMap1, 20); //this is just for weird pattern i made, can be normal circle 
 
//    let ellipse2 = map(vocal, 0, 40, 70, 80)
//    fill (circleCol) 
//    // strokeWeight(2)
//    // stroke (255, 100) //white, transparent 
//    ellipse (circleX[0], circleX[1], 20, vocalMap1);
//  }
//  else {
//  }
  

  // //circle
  // fill (161, 29, 179, 210) //dark pink 
  // stroke (161, 29, 179, 210) //pink, transparent 
  // ellipse (1350, 750, ellipse1, ellipse1); //this is just for weird pattern i made, can be normal circle 



  // //circle
  // fill (161, 29, 179, 210) //dark pink 
  // stroke (161, 29, 179, 210) //pink, transparent 
  // ellipse (1350, 750, ellipse1, ellipse1); //this is just for weird pattern i made, can be normal circle 

   
  
  
  


//   let circle10 = map(words, 0, 150, 150, 200)
//  fill (255, 70)
//  ellipse (200, 250, circle10, circle10)

//   if(counter > 300 && counter < 1000){
//  fill (0)

//   }
// else {
//   fill (0, 255, 255)
// }


//   for(let i = 0; i <=5; i++){
//   let y = 100 
// ellipse (300, y * i, 50)

//   }




  
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

  
