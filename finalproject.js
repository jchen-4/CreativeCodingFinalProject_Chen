//I never figured out how to import images onto sublime, so this only works in openprocessing for now

let map
let displayMap
let alabama, alabamaJSON;
let alaska, alaskaJSON
let arizona
let arkansas
let california
let colorado
let connecticut
let delaware
let florida
let georgia
let hawaii
let idaho
let illinois
let indiana
let iowa
let kansas
let kentucky
let louisiana
let maine
let maryland
let massachusetts
let michigan
let minnesota
let mississippi
let missouri
let montana
let nebraska
let nevada
let new_hampshire
let new_jersey
let new_mexico
let new_york
let north_carolina
let north_dakota
let ohio
let oklahoma
let oregon
let pennsylvania
let rhode_island
let south_carolina
let south_dakota
let tennessee
let texas
let utah
let vermont
let virginia
let washington
let west_virginia
let wisconsin
let wyoming

function setup() {
	displayMap = true;
	createCanvas(1200, 600);
	background(200);
}
function preload() {
map = loadImage('usmap2.png');
	
	alabamaJSON = loadJSON("https://www.opensecrets.org/api/?method=candContrib&cid=N00024817&cycle=2020&apikey=7f412b514c58c75045615ea8481c9773&output=json");

}


function draw() {

	scale(0.58);
image(map, 40, 100);


if (mouseIsPressed && mouseX >= 529 && mouseX <= 542 && mouseY >=346 && mouseY <= 357) {

	textSize(30);
			text(alabamaJSON.response.contributors["@attributes"].cand_name, 1500, 100);
			text(alabamaJSON.response.contributor["@attributes"].org_name, 1500, 50);


}

	
		
}

