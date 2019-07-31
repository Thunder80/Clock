
var r = -15;//to scale the size of heart
var v1 = 0, v2 = 0;//variable to increase 
var back = false;
var r1 = 0, g1 = 0, b1 = 0;
var r2 = 255, g2 = 255, b2 = 255;

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
	textFont("Georgia");
	hr = d.getHours() * 30;
	mr = d.getMinutes() * 6;
	sr = d.getSeconds() * 6;
	sec = (int)(d.getMilliseconds() / 17);
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
	stroke(r1, g1, b1);
	strokeWeight(10);
	beginShape();
	for(var t = 0;t < 2*PI;t+=0.01)
	{
		var x = r * 16 * pow(sin(t), 3);
		var y = r * (13 * cos(t) - 5 * cos(2 * t) - 2 * cos(3 * t) - cos(4 * t));
		vertex(x, y);
	}
	endShape();
	noFill();
	stroke(r2, g2, b2);
	strokeWeight(10);
	beginShape();
	for(var t = 0;t < v2;t+=0.01)
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
	stroke(255, 255, 255, 100);
	rotate(-hr);
	rotate(mr);
	line(0, 0, m.x2-m.x1, m.y2-m.y1);
	rotate(-mr);
	
	//date and digital time
	textSize(40);
	fill(255);
	noStroke();
	text("Date:", -180, -120);
	text(months[d.getMonth()] + " " + d.getDay(), -175, -80);
	text(hr/30 + " : " + mr/6 + ":" + sr/6, 50, -120);

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
	v2 += PI/30;
	if(v2 >= 2*PI)
	{
		r1 = r2;
		g1 = g2;
		b1 = b2;
		r2 = random(0, 255);
		g2 = random(0, 255);
		b2 = random(0, 255);
		v2 = 0;
	}

}