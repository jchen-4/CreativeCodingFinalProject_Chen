//API Website: https://www.opensecrets.org/
//I never figured out how to import images onto sublime, so this only works in openprocessing for now
let button
let x
let y
let map
var portrait
let photo 
let api
let ring
let scene = 1
let alabamaACounterA = 0
let alabamaACounterB = 0
let alabamaBcounterA = 0
let alabamaBcounterB = 0
let californiaAcounterA = 0
let californiaAcounterB = 0
let californiaBcounterA = 0
let californiaBcounterB = 0
let new_yorkAcounterA = 0
let new_yorkAcounterB = 0
let new_yorkBcounterA = 0
let new_yorkBcounterB = 0
let pac = 'Political Action Committee (PAC) — A popular term for a political committee organized for the purpose of raising and spending money to elect and defeat candidates.'
function setup() {
	createCanvas(1200, 600);
	background(200);
	//button = new Button(529, 346);
	textSize(20);
	textFont(myFont);
	
	



}
function preload() {
map = loadImage('usmap3.png');
alabamaimageA = loadImage('alabamaimageA.jpg');
alabamaimageB = loadImage('alabamaimageB.jpg');
californiaimageA = loadImage('californiaimageA.jpg');
californiaimageB = loadImage('californiaimageB.jpg');
new_yorkimageA = loadImage('new_yorkimageA.jpg');
new_yorkimageB = loadImage('new_yorkimageB.jpg');
ring = loadSound('ring.mp3');
	alabamaA = loadJSON('data.json');
	myFont = loadFont('regular[1].otf');
	boldFont = loadFont('bold[1].otf');
	fancyFont = loadFont('OldStandard-Regular[1].ttf');
	alabamaA = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00024817&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json");
	alabamaB = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00009920&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json");
	californiaA = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00007364&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json");
	californiaB = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00036915&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json");
	new_yorkA = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00001093&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json");
	new_yorkB = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00027658&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json");
	
//hopefully I can slowly add the rest of the states to make it a complete database

	/*alaskaA = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00026050&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json");
	alaskaB = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00035774&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json");
	arizonaA = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00044223&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json");
	arizonaB = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00033983&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json");
	arkansasA = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00013873&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json");
	arkansasB = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00033363&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json");
	coloradoA = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00030608&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json");
	coloradoB = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00030780&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json");
	connecticutA = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00031685&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json"); 
	connecticutB = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00027566&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json"); 
	delawareA = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00012508&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json"); 
	delawareB = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00031820&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json"); 
	floridaA = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00030612&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json"); 
	floridaB = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00043290&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json"); 
	georgiaA = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00046125&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json"); 
	georgiaB = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00035516&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json"); 
	hawaiiA = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00028139&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json"); 
	hawaiiB = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00028138&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json"); 
	idahoA = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00006267&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json"); 
	idahoB = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00029441&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json"); 
	illinoisA = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00027860&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json"); 
	illinoisB = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00004981&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json"); 
	indianaA = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00041731&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json"); 
	indianaB = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00030670&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json"); 
	iowaA = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00035483&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json"); 
	iowaB = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00001758&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json"); 
	kansasA = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00005282&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json"); 
	kansasB = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00005285&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json"); 
	kentuckyA = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00003389&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json"); 
	kentuckyB = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00030836&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json"); 
/*	louisiana =
	louisiana =
	maine =
	maine =
	maryland =
	maryland =
	massachusetts =
	massachusetts =
	michigan =
	michigan =
	minnesota =
	minnesota =
	mississippi =
	mississippi =
	missouri =
	missouri =
	montana =
	montana =
	nebraska =
	nebraska =
	nevada =
	nevada =
	new_hampshire =
	new_hampshire =
	new_jersey =
	new_jersey =
	new_mexico =
	new_mexico =
	north_carolina =
	north_carolina =
	north_dakota =
	north_dakota =
	ohio =
	ohio =
	oklahoma =
	oklahoma =
	oregon =
	oregon =
	pennsylvania =
	pennsylvania =
	rhode_island =
	rhode_island = 
	south_carolina =
	south_carolina =
	south_dakota =
	south_dakota =
	tennessee =
	tennessee =
	texas =
	texas =
	utah =
	utah =
	vermont =
	vermont =
	virginia =
	virginia =
	washington = 
	washington =
	west_virginia =
	west_virginia =
	wisconsin =
	wisconsin =
	wyoming =
	wyoming =
	*/
} 


function draw() {
//	print(mouseX, mouseY);
switchscene1();
switchscene2();
switchscene3();
switchscene4();
switchscene5();
switchscene6();
switchscene7();
revertscene();

if (scene == 1) { //basic map screen
background(200);
scale(0.58);
image(map, 40, 100);
//button.show();
fill(150);
textSize(20);
textFont(boldFont);
	noStroke(); //small button outline to make the "what is a PAC" more clickable
  ellipse(96, 76, 55, 55);
  rect(99, 48, 140, 56);
  ellipse(235, 76, 55, 55);
fill(22, 32, 107);
text("What is a PAC?", 90, 85);
fill(0);
text("Click a dot on a state to see its senators", 500, 50);	
//alabama
senatorinfo(528, 545, 346, 365, alabamaA);
senatorinfo(536, 548, 390, 400, alabamaB);
//california
senatorinfo(54, 69, 202, 216, californiaA);
senatorinfo(92, 106, 302, 315, californiaB); 
//new york
senatorinfo(660, 675, 146, 159, new_yorkA);
senatorinfo(632, 645, 180, 197, new_yorkB);
	
//alaska
/*senatorinfo(99, 111, 412, 427, alaskaA);
senatorinfo(85, 99, 456, 470, alaskaB);
//arizona
senatorinfo(167, 182, 307, 320, arizonaA);
senatorinfo(170, 185, 356, 370, arizonaB);
//arkansas
senatorinfo(455, 468, 325, 340, arkansasA);
senatorinfo(436, 450, 357, 370, arkansasB);
//colorado
senatorinfo(237, 251, 262, 277, coloradoA);
senatorinfo(295, 308, 265, 278, coloradoB);
//connecticut
senatorinfo(729, 742, 204, 216, connecticutA);
senatorinfo(748, 762, 205, 218, connecticutB);
//delaware
senatorinfo(707, 719, 239, 252, delawareA);
senatorinfo(725, 738, 240, 252, delawareB);
//florida
senatorinfo(606, 620, 415, 429, floridaA);
senatorinfo(633, 647, 464, 476, floridaB);
//georgia
senatorinfo(566, 580, 349, 361, georgiaA);
senatorinfo(593, 603, 382, 392, georgiaB);	
//hawaii
senatorinfo(246, 265, 458, 474, hawaiiA);
senatorinfo(279, 291, 484, 498, hawaiiB);	
//idaho
senatorinfo(154, 168, 140, 152, idahoA);
senatorinfo(185, 200, 182, 195, idahoB);	
*/


}
if (scene == 2){ //scene about PAC definition
	if (!ring.isPlaying()) { //at first I didn't realize that having this in the draw loop was making it play over itself a ton of times per second, but got the solution here:
  ring.play(); //https://discourse.processing.org/t/i-am-trying-to-load-in-a-sound-file-to-my-p5-sound-project-but-they-all-come-out-distorted-or-my-screen-goes-black/6121/4
	ring.setVolume(0.5);
}
	background(0);
	fill(255);
	text(pac, 200, 200, 700, 700);
	text("Back", 100, 600);
	   for (var i = 0; i < 10; i++) { //makes the $ sign background
			 	fill(0, 179, 3);
			 textSize(30);
			 text('$', random(1,1000), random(1000-i));
		 }
}
if (scene == 3){ //doug jones
	background(255);
	fill(50);
	text("Back", 100, 600);
	alabamaACounterA += 250 //shoutout to Ryan for helping me with the counter!
	alabamaACounterB += 250 //I was going to use frameCount, but I realized it would only work once unless I created different variables for each counter
	text("University of Alabama: ", 150, 200);
	 if (alabamaACounterA < 155900){
	text(alabamaACounterA, 500, 200);
	}
	else{
		fill(0, 179, 3);
		text("$155,937 (individuals)", 500, 200);
	
	}
	fill(0);
	text("Democracy Engine:", 230, 300);
		if (alabamaACounterB < 119700){
	text(alabamaACounterB, 530, 300);
	}
		else{
		fill(0, 179, 3);
		text("$119,799 (individuals)", 520, 300);
	
	}
	textSize(30);
	fill(0);
	textFont(fancyFont);
	text("Top Contributors", 450, 100);
		scale(0.2);
		image(alabamaimageA, 4200, 500);
}
	
if (scene == 4){ //richard shelby
d
	background(255);
	fill(50);
	text("Back", 100, 600);
	alabamaBcounterA +=50
	alabamaBcounterB += 50
	text("Maynard, Cooper & Gale: ", 150, 200);
	 if (alabamaBcounterA <4999){
	text(alabamaBcounterA, 530, 200);
	}
	else{
		fill(0, 179, 3);
		text("$5,000 (PAC)", 530, 200);
	
	}
	fill(0);
	text("Oshkosh Corp:", 250, 300);
		if (alabamaBcounterB < 4999){
	text(alabamaBcounterB, 490, 300);
	}
		else{
			fill(0, 179, 3);
		text("$5,000 (PAC)", 490, 300);
	
	}
	textSize(30);
	fill(0);
	textFont(fancyFont);
	text("Top Contributors", 350, 100);
		scale(0.8);
		image(alabamaimageB, 1000, 180);
}
if (scene == 5){ //dianne feinstein

	background(255);
	fill(50);
	text("Back", 100, 600);
	californiaAcounterA +=50
	californiaAcounterB += 20
	text("Blue Cross/Blue Shield:", 150, 200);
	 if (californiaAcounterA <4999){
	text(californiaAcounterA, 530, 200);
	}
	else{
		fill(0, 179, 3);
		text("$5,000 (PAC)", 530, 200);
	
	}
	fill(0);
	text("Simon Youth Foundation:", 110, 300);
		if (californiaAcounterB < 2999){
	text(californiaAcounterB, 500, 300);
	}
		else{
			fill(0, 179, 3);
		text("$3,000 (individuals)", 490, 300);
	
	}
	textSize(30);
	fill(0);
	textFont(fancyFont);
	text("Top Contributors", 350, 100);
		scale(0.4);
		image(californiaimageA, 2000, 240);
}
	if (scene == 6){ //kamala harris

	background(255);
	fill(50);
	text("Back", 100, 600);
	californiaBcounterA +=100
	californiaBcounterB +=100
	text("Plumbers/Pipefitters Union:", 110, 200);
	 if (californiaBcounterA <15999){
	text(californiaBcounterA, 530, 200);
	}
	else{
		fill(0, 179, 3);
		text("$16,000 (PAC)", 530, 200);
	
	}
	fill(0);
	text("Bad Robot Productions:", 110, 300);
		if (californiaBcounterB < 15900){
	text(californiaBcounterB, 500, 300);
	}
		else{
			fill(0, 179, 3);
		text("$15,955 (individuals)", 490, 300);
	
	}
	textSize(30);
	fill(0);
	textFont(fancyFont);
	text("Top Contributors", 350, 100);
		scale(0.3);
		image(californiaimageB, 2800, 240);
}
	if (scene == 7){  //chuck schumer

	background(255);
	fill(50);
	text("Back", 100, 600);
	new_yorkAcounterA +=250
	new_yorkAcounterB +=250
	text("New York Life Insurance:", 100, 200);
	 if (new_yorkAcounterA <	70725){
	text(new_yorkAcounterA, 500, 200);
	}
	else{
		fill(0, 179, 3);
		text("$65,725 (individuals)", 500, 200);
		text("$5,000 (PAC)", 500, 230);
	
	}
	fill(0);
	text("MetLife Inc:", 110, 300);
		if (new_yorkAcounterB < 33906){
	text(new_yorkAcounterB, 370, 300);
	}
		else{
			fill(0, 179, 3);
		text("$33,906 (individuals)", 370, 300);
	
	}
	textSize(30);
	fill(0);
	textFont(fancyFont);
	text("Top Contributors", 350, 100);
		scale(0.3);
		image(new_yorkimageA, 2700, 240);
}
	if (scene == 8){ //kirsten gillibrand

	background(255);
	fill(50);
	text("Back", 100, 600);
	new_yorkBcounterA +=50
	new_yorkBcounterB +=50
	text("Mona Shah & Assoc:", 100, 200);
	 if (new_yorkBcounterA <		5600){
	text(new_yorkBcounterA, 430, 200);
	}
	else{
		fill(0, 179, 3);
		text("$5,600 (individuals)", 430, 200);
	}
	fill(0);
	text("Nuride Transportation Group:", 50, 300);
		if (new_yorkBcounterB < 	5600){
	text(new_yorkBcounterB, 500, 300);
	}
		else{
			fill(0, 179, 3);
		text("$5,600 (individuals)", 500, 300);
	
	}
	textSize(30);
	fill(0);
	textFont(fancyFont);
	text("Top Contributors", 350, 100);
		scale(0.3);
		image(new_yorkimageB, 3000, 240);
}
function senatorinfo(a, b, c, d, state) { //creates the "buttons" for the dots I drew on the map
		if (mouseX  >= a && mouseX <= b && mouseY >= c && mouseY <= d) {
		textFont(myFont);
		textSize(40);
		text(state.response.contributors["@attributes"].cand_name, 1550, 140); 
		text(state.response.contributors["@attributes"].cycle, 1550, 180); 
//		text(state.response.contributors["@attributes"].org_name, 1500, 200); I had a bit of trouble calling the organization names from the json file, it kept saying there were too many nested objects, could not display
			
		
			
		
		
} 

//scene switch buttons
}
function switchscene1() { 
if (mouseIsPressed){
  if (mouseX >= 55 && mouseX <= 144 ){
    if (mouseY >= 28 && mouseY <= 62)
      scene = 2
  	}
  }
}

function switchscene2() {
if (mouseIsPressed){
		if (mouseX >= 528 && mouseX <= 545){
			if (mouseY >=346 && mouseY <= 365)
				 scene =3
		}
	}
}
	function switchscene3() {
if (mouseIsPressed){
	if (mouseX >= 536 && mouseX <=548){
		if (mouseY >=390 && mouseY <= 400)
				 scene =4
		}
	}
}
function switchscene4() {
if (mouseIsPressed){
	if (mouseX >= 54 && mouseX <=69){
		if (mouseY >=202 && mouseY <= 216)
				 scene =5
		}
	}
}
	function switchscene5() {
if (mouseIsPressed){
	if (mouseX >= 92 && mouseX <=106){
		if (mouseY >=302 && mouseY <= 315)
				 scene =6
		}
	}
}
	function switchscene6() {
if (mouseIsPressed){
	if (mouseX >= 660 && mouseX <=675){
		if (mouseY >=146 && mouseY <= 159)
				 scene =7
		}
	}
}
	function switchscene7() {
if (mouseIsPressed){
	if (mouseX >= 632 && mouseX <=645){
		if (mouseY >=180 && mouseY <= 197)
				 scene =8
		}
	}
}
function revertscene(){
if (mouseIsPressed){
	if(mouseX >= 98 && mouseX <= 149){
		if (mouseY >= 579 && mouseY <= 606){
			scene = 1
		}
	}
}
}
}