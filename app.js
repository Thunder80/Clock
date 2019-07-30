
var r = -15;//to scale the size of heart
var v = 0;//variable to increase 
var back = false;

//months
var months = ["Jan", "Feb", "Marh", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//date object
var d, day;

//clock arm variables
var sr = 0, sec = 0;
var mr = 348;
var hr = 330;

//canvas
var cnv;

//clock arm positions
var h = {
	x1 : 250, y1 : 250,
	x2 : 250, y2 : 190
};

var m = {
	x1 : 250, y1 : 250,
	x2 : 250, y2 : 150
};

var s = {
	x1 : 250, y1 : 250,
	x2 : 250, y2 : 120
};


function setup(){
	cnv = createCanvas(windowWidth, windowHeight);
	d = new Date();
	day = d.getDate();
	if(day-1 < 0)
	{
		d = 11;
	}
	textFont("Georgia");
}

function draw(){
	background(0);

	//clock
	translate(cnv.width / 2, 200);
	angleMode(RADIANS);
	fill(255, 0, 128);
	noStroke();
	beginShape();
	for(var t = 0;t < 2*PI;t+=0.01)
	{
		var x = r * 16 * pow(sin(t), 3);
		var y = r * (13 * cos(t) - 5 * cos(2 * t) - 2 * cos(3 * t) - cos(4 * t));
		vertex(x, y);
	}
	endShape();
	noFill();
	stroke(255);
	strokeWeight(10);
	beginShape();
	for(var t = 0;t < v;t+=0.01)
	{
		var x = r * 16 * pow(sin(t), 3);
		var y = r * (13 * cos(t) - 5 * cos(2 * t) - 2 * cos(3 * t) - cos(4 * t));
		vertex(x, y);
	}
	endShape();

	//clock arms
	translate(-cnv.width / 2, -200);
	translate(cnv.width / 2, 270);
	angleMode(DEGREES);
	stroke(255);
	strokeWeight(10);
	rotate(hr);
	line(0, 0, h.x2-h.x1, h.y2-h.y1);
	stroke(0, 0, 0, 100);
	rotate(-hr);
	rotate(mr);
	line(0, 0, m.x2-m.x1, m.y2-m.y1);
	rotate(-mr);
	
	//date and digital time
	textSize(40);
	fill(255);
	noStroke();
	text("Date:", -180, -120);
	text(months[month], -180, -80);
	text(, -110, -80);
	text(hr/30 + " : " + mr/6 + ":" + sr/6, 60, -100);

	//calculation
	sec++;
	if(sec == 60)
	{
		sr += 6;
		sec = 0;
	}
	if(sr == 360)
	{
		mr += 6;
		sr = 0;
	}
	if(mr == 360)
	{
		hr += 30;
		mr = 0;
	}
	if(hr == 360)
	{
		hr = 0;
	}
	if(!back)
	{
		v += PI/30;
		if(v >= 2*PI)
			back = true;
	}
	else
	{
		v -= PI/30;
		if(v <= 0)
			back = false;
	}
}