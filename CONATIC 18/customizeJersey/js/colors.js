//variables
var selectedItem = '';

//colors
var colors = [
	'#FFF',
	'#AAA',
	'#555',
	'#111',
	'#003CA9',
	'#0072B5',
	'#5EB1E5',
	'#51209C',
	'#BE0B31',
	'#EE0031',
	'#004138',
	'#51A518',
	'#FE4E13',
	'#FFB408',
	'#FFCF00'
];

//init
function init() {
	console.log('Initializing page...');
	//svg Parent
	var svgParent = document.getElementById('drawing');
	//draw colors
	var y = 10;
	for (var i = 0; i < colors.length; i++) {
		//attributes
		var id = 'color' + i;
		var point = new Point('10px', y + 'px');
		var size = new Size('30px', '30px');
		var event = 'changeColor(' + i + ')';
		//create element
		drawRectangle(svgParent, id, point, size, 'defaultclickable', event);
		//change color
		document.getElementById('color' + i).style.fill = colors[i];
		//increment y
		y += 40;
	}	
}

//change color
function changeColor(colorIndex) {
	if (selectedItem != '')
		document.getElementById(selectedItem).style.fill = colors[colorIndex];
}

//change selection
function changeSelection(id) {
	//de-select previous item
	if (selectedItem != '') 
		document.getElementById(selectedItem).setAttribute('class', 'defaultclickable');
	//select new
	document.getElementById(id).setAttribute('class', 'default selecteditem');
	//save selection
	selectedItem = id;
}

//clear selection
function clearSelection() {
	//de-select previous item
	if (selectedItem != '') 
		document.getElementById(selectedItem).setAttribute('class', 'defaultclickable');
	//clear selection
	selectedItem = '';
}