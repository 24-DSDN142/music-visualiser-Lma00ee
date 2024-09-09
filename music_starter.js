let img
let firstRun = true 
let x = 1336
let y = 765
let circleX = [1336, 765] //change to pos 
let drumBeat = [700, 1250, 600, 1100, 300, 900, 220, 700] //number ranges of the beat of drums
let ranges = [0, 100, 50, 40, 30, 70] //if i array the ranges it'll be difficult to experiment?
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let bassBeat = [150, 250, 100, 160]
let otherBeat = [120, 200]
let vocalBeat = [80]
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
if (firstRun) {
img = loadImage ('bg img.jpg')
firstRun = false 
}

let drumMap1 = map(drum, ranges[0], ranges[1], drumBeat[0], drumBeat[1])
let drumMap2 = map(drum, ranges[0], ranges[1], drumBeat[2], drumBeat[3])
let drumMap3 = map(drum, ranges[0], ranges[1], drumBeat[4], drumBeat[5])
let drumMap4 = map(drum, ranges[0], ranges[1], drumBeat[6], drumBeat[7])
let bassMap1 = map(bass, ranges[0], ranges[3], bassBeat[0], bassBeat[1])
let bassMap2 = map(bass, ranges[0], ranges[4], bassBeat[0], bassBeat[1])
let otherMap1 = map(other, ranges[0], ranges[2], ranges[1], ranges[1])
let otherMap2 = map(other, ranges[0], ranges[5], otherBeat[0], otherBeat[1])
let vocalMap1 = map(vocal, ranges[0], ranges[3], ranges[5], vocalBeat[0])
let lightPurple1 = color(221, 212, 255, 150)
let Magenta1 = color(161, 29, 179, 180)
let Magenta2 = color(161, 29, 179, 50)
// let blendColor = lerpColor(lightPurple, Magenta, 0.5)
// let drumMap = map(drum, 0, 100, 0, 1)

  background(img)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  console.log(counter)
  //2247 chorus part first 
//baby when we touch liek 10,000 smth 
//end is 11520

//bc of opacity, darkest layer first then light?
//paramertise the varibales by making one circle and adjusting the rest of tehm so i dont have 100... i thinkkkks
  
  // noFill()
  // fill (161, 29, 179, 200) //pink
  noStroke()
  // strokeWeight (5)
  // stroke(255) //white 
  // ellipse (circleX[0], circleX [1], drumMap, drumMap);
  // noFill()

  // // fill (255, 150) //pink
  // strokeWeight (20)
  // stroke(161, 29, 179, 210) //pink 
  // ellipse (1350, 750, circle4, circle4);

  //reverse opacity layers for strokes outer pink 
  fill (208, 197, 250, 150) //pink
  strokeWeight (40)
  stroke(161, 29, 179, 170) //pink
  ellipse (circleX[0], circleX[1], drumMap1+10, drumMap1+10);

  // fill (255, 150) //pink
  strokeWeight (40)
  stroke(Magenta1) //pink
  ellipse (circleX[0], circleX[1], drumMap1+90, drumMap1+90);

   //white glowey
  //  noFill()
  //  strokeWeight (3)
  //  stroke(255, 200) //pink
  //  ellipse (circleX[0], circleX[1], drumMap1+200, drumMap1+190);
   
  // fill (255, 150) //pink, outsideerr
  noFill()
  strokeWeight (20)
  stroke(161, 29, 179, 130) //pink
  ellipse (circleX[0], circleX[1], drumMap1+200, drumMap1+180);

 

  let circle3 = map(drum, 0, 100, 600, 1100)
  // noFill()
  fill (lightPurple1) 
  // fill (99, 64, 194, 100)
  strokeWeight (0)
  stroke(255) //white 
  ellipse (circleX[0], circleX[1], drumMap2, drumMap2);

  let circle2 = map(drum, 0, 100, 300, 900)
  // noFill()
  fill (lightPurple1) 
  // strokeWeight (5)
  // stroke(255) //white 
  ellipse (circleX[0], circleX[1], drumMap3, drumMap3);

  let circle1 = map(drum, 0, 100, 220, 700)
  fill (lightPurple1) 
  ellipse (circleX[0], circleX[1], drumMap4, drumMap4);

 


  let circle6 = map(bass, 0, 50, 150, 250)

  // noFill()
  // strokeWeight (20)
  // stroke(Magenta2) //pink
  // ellipse (circleX[0], circleX[1], drumMap3, drumMap3);
  
  // strokeWeight (20)
  // stroke(Magenta1) //pink
  fill (80, 36, 173, 150) //purple
  // stroke(80, 36, 173)
  // strokeWeight(3)
  ellipse (circleX[0], circleX[1], bassMap1, bassMap1)

  

  let circle5 = map(bass, 0, 30, 100, 160)
  fill (80, 36, 173, 150) //purple
  // stroke (80, 36, 173)
  ellipse (circleX[0], circleX[1], bassMap2, bassMap2);
  
  
  let circle8 = map(other, 0, 50, 100, 100)
  fill (74, 45, 189, 100) // dark purple 
  stroke (64, 68, 194)
  ellipse (circleX[0], circleX[1], otherMap1, otherMap1);
  

  let circle7 = map(other, 0, 70, 120, 200)
  fill (74, 45, 189, 130) // dark purple
  stroke (64, 68, 194)
  ellipse (circleX[0], circleX[1], otherMap2, otherMap2);
  


  //flower/star 
  let ellipse1 = map(vocal, 0, 40, 70, 80)
  fill (Magenta1) 
  strokeWeight(2)
  stroke (161, 29, 179) //dark pink, transparent 
  ellipse (circleX[0], circleX[1], vocalMap1, 20); //this is just for weird pattern i made, can be normal circle 

  let ellipse2 = map(vocal, 0, 40, 70, 80)
  fill (Magenta1) 
  // strokeWeight(2)
  // stroke (255, 100) //white, transparent 
  ellipse (circleX[0], circleX[1], 20, vocalMap1);

  // //circle
  // fill (161, 29, 179, 210) //dark pink 
  // stroke (161, 29, 179, 210) //pink, transparent 
  // ellipse (1350, 750, ellipse1, ellipse1); //this is just for weird pattern i made, can be normal circle 

  if(counter >= 5897){
  //4899
  //9961 BABY WHEN WE TOOOOOOOOOOUC

  strokeWeight (20)
  stroke(Magenta1) //pink
  fill (80, 36, 173, 150) //purple
  // stroke(80, 36, 173)
  // strokeWeight(3)
  ellipse (circleX[0], circleX[1], bassMap1, bassMap1)

  

  let circle5 = map(bass, 0, 30, 100, 160)
  fill (80, 36, 173, 150) //purple
  // stroke (80, 36, 173)
  ellipse (circleX[0], circleX[1], bassMap2, bassMap2);
  
  
  let circle8 = map(other, 0, 50, 100, 100)
  fill (74, 45, 189, 100) // dark purple 
  stroke (64, 68, 194)
  ellipse (circleX[0], circleX[1], otherMap1, otherMap1);
  

  let circle7 = map(other, 0, 70, 120, 200)
  fill (74, 45, 189, 130) // dark purple
  stroke (64, 68, 194)
  ellipse (circleX[0], circleX[1], otherMap2, otherMap2);
  


  //flower/star 
  let ellipse1 = map(vocal, 0, 40, 70, 80)
  fill (Magenta1) 
  strokeWeight(2)
  stroke (161, 29, 179) //dark pink, transparent 
  ellipse (circleX[0], circleX[1], vocalMap1, 20); //this is just for weird pattern i made, can be normal circle 

  let ellipse2 = map(vocal, 0, 40, 70, 80)
  fill (Magenta1) 
  // strokeWeight(2)
  // stroke (255, 100) //white, transparent 
  ellipse (circleX[0], circleX[1], 20, vocalMap1);

  // //circle
  // fill (161, 29, 179, 210) //dark pink 
  // stroke (161, 29, 179, 210) //pink, transparent 
  // ellipse (1350, 750, ellipse1, ellipse1); //this is just for weird pattern i made, can be normal circle 

     }
   else {
     
   }


  }


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