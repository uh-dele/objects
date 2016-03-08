//========================
//	City
//========================


//your building object:

var skyColor = (204, 230, 255)
		skyLine  = (windowHeight/2) ;


function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw(){

//sky
	background("lightskyblue");

// sun and moon

		var skyObject = { // object literal sun or moon
			x:100,
			y: 100,
			size:75,
			color:[255, 255, 204],
			ray: [255, 224, 102, 60],
			raySize: 20
		};

		fill(skyObject.color);
		stroke(skyObject.ray);
		strokeWeight(skyObject.raySize);
		ellipse(skyObject.x, skyObject.y, skyObject.size, skyObject.size);

//landscape objects

					// ocean
					fill(0, 26, 51);
					noStroke();
					rect(0,windowHeight/2,windowWidth,windowHeight);

					//fore ground rocks/Mountains
					fill(51, 0, 0);
					triangle(0,windowHeight-100,0,windowHeight,windowWidth-200,windowHeight);

//city buildings

		var skyscraper = {
		x: [windowWidth/2+10],
		y: [windowHeight/2+30],
		sizeX: 5,
		sizeY: 15
	};

		var parking garage = {
		x: [windowWidth/2+20],
		y: [windowHeight/2+30],
		sizeX: 15,
		sizeY: 9
	};

		var building = {
		x: [windowWidth/2+15],
		y: [windowHeight/2+30],
		sizeX: 6,
		sizeY: 11
	};


//background rocks & Mountains

					triangle(windowWidth/2-100,windowHeight/2,windowWidth,windowHeight/2,windowWidth/2,windowHeight/2-30);
					triangle(0,windowHeight/2,windowWidth/2,windowHeight/2,windowWidth/2,windowHeight/2-20);
					triangle(windowWidth,windowHeight/2,windowWidth/2, windowHeight/2, windowWidth,windowHeight/2-35);

//city island location
					arc(windowWidth/2+windowWidth/4,windowHeight/2+30,windowWidth/2,30,PI,0);
					arc(windowWidth,windowHeight/2+30,windowWidth,20,PI,0);



//skyline

//bridge




}
