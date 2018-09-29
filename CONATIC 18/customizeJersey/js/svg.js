//Point class
function Point(x, y) {
	if (typeof x !== 'undefined') this.x = x; else this.x = 0;
	if (typeof y !== 'undefined') this.y = y; else this.y = 0;
}

//Size class
function Size(width, height) {
	if (typeof width !== 'undefined') this.width = width; else this.width = 0;
	if (typeof height !== 'undefined') this.height = height; else this.height = 0;
}

//draw Rectangle
function drawRectangle(svgParent, id, point, size, cssClass, onClickEvent) {
	//create element
	var r = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	//id
	if (id != null) r.setAttribute('id', id);
	//point
	if (point != null) { 
		r.setAttribute('x', point.x);
		r.setAttribute('y', point.y);
	}
	//size
	if (size != null) {
		r.setAttribute('width', size.width);
		r.setAttribute('height', size.height);
	}
	//class
	if (cssClass != null) r.setAttribute('class', cssClass);
	//event
	if (onClickEvent != null) r.setAttribute('onclick', onClickEvent);
	//add to parent
	svgParent.appendChild(r);
}