//I never figured out how to import images onto sublime, so this only works in openprocessing for now

let button
let x
let y
let map
let displayMap


function setup() {
	displayMap = true;
	createCanvas(1200, 600);
	background(200);
	//button = new Button(529, 346);
}
function preload() {
map = loadImage('usmap3.png');
	
	alabamaA = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00024817&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json");
	alabamaB = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00009920&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json");
	alaskaA = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00026050&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json");
	alaskaB = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00035774&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json");
	arizonaA = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00044223&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json");
	arizonaB = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00033983&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json");
	arkansasA = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00013873&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json");
	arkansasB = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00033363&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json");
	californiaA = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00007364&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json");
	californiaB = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00036915&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json");
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
	new_york =
	new_york =
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

	scale(0.58);
image(map, 40, 100);

//button.show();
 
if (mouseIsPressed) {
//alabama
senatorinfo(528, 545, 346, 365, alabamaA);
senatorinfo(536, 548, 390, 400, alabamaB);
//alaska
senatorinfo(99, 111, 412, 427, alaskaA);
senatorinfo(85, 99, 456, 470, alaskaB);
//arizona
senatorinfo(167, 182, 307, 320, arizonaA);
senatorinfo(170, 185, 356, 370, arizonaB);
//arkansas
senatorinfo(455, 468, 325, 340, arkansasA);
senatorinfo(436, 450, 357, 370, arkansasB);
//california
senatorinfo(54, 69, 202, 216, californiaA);
senatorinfo(92, 106, 302, 315, californiaB); 
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

	
} 


	
}

function senatorinfo(a, b, c, d, state) {
		if (mouseX  >= a && mouseX <= b && mouseY >= c && mouseY <= d){
		textSize(30);
			text(state.response.contributors["@attributes"].cand_name, 1500, 100);
		
} 


}