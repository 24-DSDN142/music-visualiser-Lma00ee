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
  //drums
 //super outer stroke matching ring on image 
  noFill()
  strokeWeight (20)
  stroke(Magenta3) 
  ellipse (circleX[0], circleX[1], drumMap1+200, drumMap1+180);

  //magenta colours of main circle 
  fill (darkMagenta) 
  strokeWeight(40)
  stroke(magentaStroke) 
  ellipse(circleX[0], circleX[1], drumMap1+10, drumMap1+10);
  ellipse(circleX[0], circleX[1], drumMap1+90, drumMap1+90);
 
  //purples
  fill (lightPurple1) 
  strokeWeight (0)
  ellipse (circleX[0], circleX[1], drumMap2, drumMap2);

  fill (lightPurple1) 
  ellipse (circleX[0], circleX[1], drumMap3, drumMap3);

  fill (lightPurple1) 
  ellipse (circleX[0], circleX[1], drumMap4, drumMap4);


//bass beat circles  
//darker purples inner small middle 
  fill (darkPurple) 
  ellipse (circleX[0], circleX[1], bassMap1, bassMap1)

  fill (darkPurple) 
  ellipse (circleX[0], circleX[1], bassMap2, bassMap2);
  
//other beat circles 
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

  

  if(counter >= 5897){

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
  fill (Magenta1) 
  strokeWeight(2)
  stroke (Magenta) 
  ellipse (circleX[0], circleX[1], vocalMap1, 20); 

  fill (Magenta1) 
  strokeWeight(2)
  stroke (Magenta) 
  ellipse (circleX[0], circleX[1], 20, vocalMap1);

  }

  

//   else if ((counter > 100 || counter < 300)) {

//     // if (counter > 100 || counter < 300) {
//       circleCol = lerpColor(Magenta, darkPurple, map(counter, 100, 300, 0, 1))
//       circleCol2 = lerpColor(lightPurple1, Magenta2, map(counter, 100, 300, 0, 1))
//       circleCol3 = lerpColor(darkPurple1, Magenta2, map(counter, 100, 300, 0, 1))
//       circleCol4 = lerpColor(Magenta1, darkPurple2, map(counter, 100, 300, 0, 1))

//   //reverse opacity layers for strokes outer pink 
//   //drums
//  //super outer stroke matching ring on image 
//   noFill()
//   strokeWeight (20)
//   stroke(circleCol) 
//   ellipse (circleX[0], circleX[1], drumMap1+200, drumMap1+180);
  
//   //magenta colours of main circle 
//   noStroke()
//   fill (circleCol) 
//   strokeWeight(40)
//   stroke(circleCol4) 
//   ellipse(circleX[0], circleX[1], drumMap1+10, drumMap1+10);
//   ellipse(circleX[0], circleX[1], drumMap1+90, drumMap1+90);
 
//   //purples
  
//   fill (circleCol3) 
//   strokeWeight (0)
//   ellipse (circleX[0], circleX[1], drumMap2, drumMap2);

//   fill (circleCol3) 
//   ellipse (circleX[0], circleX[1], drumMap3, drumMap3);

//   fill (circleCol3) 
//   ellipse (circleX[0], circleX[1], drumMap4, drumMap4);


// //bass beat circles  
// //darker purples inner small middle 
//   fill (circleCol2) 
//   ellipse (circleX[0], circleX[1], bassMap1, bassMap1)

//   fill (circleCol2) 
//   ellipse (circleX[0], circleX[1], bassMap2, bassMap2);
  
// //other beat circles 
//   fill (circleCol2) 
//   stroke (64, 68, 194)
//   ellipse (circleX[0], circleX[1], otherMap1, otherMap1);
  
//   fill (circleCol3) 
//   stroke (64, 68, 194)
//   ellipse (circleX[0], circleX[1], otherMap2, otherMap2);

//   //flower/star in middle 
//   fill (circleCol4) 
//   strokeWeight(2)
//   stroke (Magenta) 
//   ellipse (circleX[0], circleX[1], vocalMap1, 20); 

//   fill (circleCol4) 
//   strokeWeight(2)
//   stroke (Magenta) 
//   ellipse (circleX[0], circleX[1], 20, vocalMap1);
    
//       }

//   else {

//   }

  }

 





  //fill (255, map(???, 255, 0))

//  rect (1000, 500, 500, 500)
// color (145, 234, 122, map(counter))


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

  
