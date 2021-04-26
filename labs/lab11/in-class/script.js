let w = 600;
let h = 400;

// let buttonL = document.getElementById("buttonL");
// let buttonR = document.getElementById("buttonR");
// let buttonU = document.getElementById("buttonU");
// let buttonD = document.getElementById("buttonD");


let viz = d3.select("#vizContainer").append("svg")
	.attr("width", w)
	.attr("height", h)
	.attr("class", "viz")
	.style("background-color", "black")
;

let myData = [
	[50, 50, 50, "lightblue"]
]

let xScale = d3.scaleLinear().domain([0, 100]).range([0, w]);
let yScale = d3.scaleLinear().domain([0, 100]).range([0, h]);
let rScale = d3.scaleLinear().domain([0, 100]).range([10, h/2]);


let graphGroup = viz.append("g").attr("class", "graphGroup");

function updateGraph(){

	let elements = graphGroup.selectAll(".datapoint").data(myData);

	let enteringElements = elements.enter();
	let exitingElements = elements.exit();

	enteringElements.append("circle")
		.attr("class", "datapoint")
		.attr("cx", function(d, i){
			let x = d[0]
			return xScale(x)
		})
		.attr("cy", function(d, i){
			let y = d[1]
			return yScale(y)
		})
		.attr("r", function(d, i){
			let r = d[2]
			return rScale(r)
		})
		.attr("fill", function(d,i){
			return d[3]
		})
	;

	elements
		.transition()
		.duration(700)
		.attr("cx", function(d, i){
			let x = d[0]
			return xScale(x)
		})
		.attr("cy", function(d, i){
			let y = d[1]
			return yScale(y)
		})
		.attr("r", function(d, i){
			let r = d[2]
			return rScale(r)
		})
		.attr("fill", function(d,i){
			return d[3]
		})
	;

}


updateGraph();



d3.select("#buttonL").on("click", function(){
	console.log("LEFT")
	myData[0][0] = 0
	updateGraph();

})

d3.select("#buttonR").on("click", function(){
	console.log("Right")
	myData[0][0] = 100
	updateGraph();

})


d3.select("#buttonS").on("click", function(){
	console.log("Small")
	myData[0][2] = 0
	updateGraph();

})

d3.select("#buttonB").on("click", function(){
	console.log("Big")
	myData[0][2] = 100
	updateGraph();

})








// in the javascript
// the only ingirdient we need
// is a way to determine when exactly
// an element passes a certain point
// e.g. when a scrolling text reaches the middle
// of the page you might want to trigger
// a transition in your vvisualization

// we could code such a mechanism outselves, but
// on https://pudding.cool/process/scrollytelling-sticky/
// i found various light-weight libraries that do just that.
// one I tested is this: https://github.com/russellgoldenberg/enter-view
// you need to include it in the html:
//
//
// and after that you can use it just like this:


enterView({
	selector: '.recolor',
	enter: function(el) {
		console.log('a special element entered');
		console.log("Color")
		myData[0][3] = "lightyellow"
		updateGraph();

	},
	exit: function(el) {
    console.log('a special element exited');
		myData[0][3] = "lightblue"
		updateGraph();

	},
	progress: function(el, progress) {
    console.log("the special element's progress is:", progress);
	},
	offset: 0.5, // enter at middle of viewport
	// once: true, // trigger just once
});



enterView({
	selector: '.origcolor',
	enter: function(el) {
		console.log('a special element entered');
		console.log("Color")
		myData[0][3] = "lightblue"
		updateGraph();

	},
	exit: function(el) {
    console.log('a special element exited');
		myData[0][3] = "lightyellow"
		updateGraph();

	},
	progress: function(el, progress) {
    console.log("the special element's progress is:", progress);
	},
	offset: 0.5, // enter at middle of viewport
	// once: true, // trigger just once
});


enterView({
	selector: '.oversize',
	enter: function(el) {
		console.log('a special element entered');
		myData[0][2] = 300
		updateGraph();

	},
	exit: function(el) {
    console.log('a special element exited');
		myData[0][2] = 50
		updateGraph();

	},
	progress: function(el, progress) {
    console.log("the special element's progress is:", progress);
	},
	offset: 0.5, // enter at middle of viewport
	// once: true, // trigger just once
});


enterView({
	selector: '.minisize',
	enter: function(el) {
		console.log('a special element entered');
		myData[0][2] = 0
		updateGraph();

	},
	exit: function(el) {
    console.log('a special element exited');
		myData[0][2] = 300
		updateGraph();

	},
	progress: function(el, progress) {
    console.log("the special element's progress is:", progress);
	},
	offset: 0.5, // enter at middle of viewport
	// once: true, // trigger just once
});


enterView({
	selector: '.initial',
	enter: function(el) {
		console.log('a special element entered');
		myData[0] = [50, 50, 50, "lightblue"]
		updateGraph();

	},
	exit: function(el) {
    console.log('a special element exited');
		myData[0][2] = 0
		updateGraph();

	},
	progress: function(el, progress) {
    console.log("the special element's progress is:", progress);
	},
	offset: 0.5, // enter at middle of viewport
	// once: true, // trigger just once
});
