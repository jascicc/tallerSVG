//point class
function Point(x, y) {
	if (typeof x !== 'undefined') this.x = x;
	if (typeof y !== 'undefined') this.y = y;
}
//size class
function Size(width, height) {
	if (typeof width !== 'undefined') this.width = width;
	if (typeof height !== 'undefined') this.height = height;
}
//style
function Style(fillColor, borderColor, borderWidth) {
	if (typeof fillColor !== 'undefined') this.fillColor = fillColor;
	if (typeof borderColor !== 'undefined') this.borderColor = borderColor;
	if (typeof borderWidth !== 'undefined') this.borderWidth = borderWidth;
}

//rectangle with CSS class
//arguments
//=============================================================
//svgParent : SVG element where the object will be added
//startPoint : starting point (x, y)
//size : size of the rectangle (width, height)
//cssClass : CSS class name that will be applied to the element
//id : id tag of the element (optional)
function drawRectangleClass(svgParent, startPoint, size, cssClass, id) {
	//create element
	var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	//starting position
	rect.setAttribute('x', startPoint.x); 
	rect.setAttribute('y', startPoint.y);
	//size
	rect.setAttribute('width', size.width); 
	rect.setAttribute('height', size.height);
	//css class
	rect.setAttribute('class', cssClass);
	//id
	if (typeof id !== 'undefined') rect.setAttribute('id', id);
	//add to parent
	svgParent.appendChild(rect);
}

//rectangle with style
//arguments
//=============================================================
//svgParent : SVG element where the object will be added
//startPoint : starting point (x, y)
//size : size of the rectangle (width, height)
//style : object style
//id : id tag of the element (optional)
function drawRectangleStyle(svgParent, startPoint, size, style, id) {
	//create element
	var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	//starting position
	rect.setAttribute('x', startPoint.x); 
	rect.setAttribute('y', startPoint.y);
	//size
	rect.setAttribute('width', size.width); 
	rect.setAttribute('height', size.height);
	//style
	rect.style.fill = style.fillColor;
	rect.style.stroke = style.borderColor;
	rect.style.strokeWidth = style.borderWidth;
	//id
	if (typeof id !== 'undefined') rect.setAttribute('id', id);
	//add to parent
	svgParent.appendChild(rect);
}	

//line with CSS class
//arguments
//=============================================================
//svgParent : SVG element where the object will be added
//startPoint : starting point (x, y)
//endPoint : ending point (x, y)
//cssClass : CSS class name that will be applied to the element
//id : id tag of the element (optional)
function drawLineClass(svgParent, startPoint, endPoint, cssClass, id) {
	//create element
	var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	//starting position
	line.setAttribute('x1', startPoint.x); 
	line.setAttribute('y1', startPoint.y);
	//end point
	line.setAttribute('x2', endPoint.x); 
	line.setAttribute('y2', endPoint.y);
	//css class
	line.setAttribute('class', cssClass);
	//id
	if (typeof id !== 'undefined') line.setAttribute('id', id);
	//add to parent
	svgParent.appendChild(line);
}

//line with style
//arguments
//=============================================================
//svgParent : SVG element where the object will be added
//startPoint : starting point (x, y)
//endPoint : ending point (x, y)
//style : object style
//id : id tag of the element (optional)
function drawLineStyle(svgParent, startPoint, endPoint, style, id) {
	//create element
	var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	//starting position
	line.setAttribute('x1', startPoint.x); 
	line.setAttribute('y1', startPoint.y);
	//end point
	line.setAttribute('x2', endPoint.x); 
	line.setAttribute('y2', endPoint.y);
	//style
	line.style.stroke = style.borderColor;
	line.style.strokeWidth = style.borderWidth;
	//id
	if (typeof id !== 'undefined') line.setAttribute('id', id);
	//add to parent
	svgParent.appendChild(line);
}

//text with CSS class
//arguments
//=============================================================
//svgParent : SVG element where the object will be added
//innerText : text that will be displayed
//startPoint : starting point (x, y)
//cssClass : CSS class name that will be applied to the element
//id : id tag of the element (optional)
function drawTextClass(svgParent, innerText, startPoint, cssClass, id) {
	//create element
	var t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
	//starting position
	t.setAttribute('x', startPoint.x); 
	t.setAttribute('y', startPoint.y);
	//inner text
	t.innerHTML = innerText;
	//css class
	t.setAttribute('class', cssClass);
	//id
	if (typeof id !== 'undefined') t.setAttribute('id', id);
	//add to parent
	svgParent.appendChild(t);
}

 //text with style
//arguments
//=============================================================
//svgParent : SVG element where the object will be added
//innerText : text that will be displayed
//startPoint : starting point (x, y)
//style : object style
//id : id tag of the element (optional)
function drawTextStyle(svgParent, innerText, startPoint, cssClass, id) {
	//create element
	var t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
	//starting position
	t.setAttribute('x', startPoint.x); 
	t.setAttribute('y', startPoint.y);
	//inner text
	t.innerHTML = innerText;
	//style
	t.style.fill = style.fillColor;
	t.style.stroke = style.borderColor;
	t.style.strokeWidth = style.borderWidth;
	//id
	if (typeof id !== 'undefined') t.setAttribute('id', id);
	//add to parent
	svgParent.appendChild(t);
}

//Path with CSS class
//arguments
//=============================================================
//svgParent : SVG element where the object will be added
//d : path
//cssClass : CSS class name that will be applied to the element
//id : id tag of the element (optional)
function drawPathClass(svgParent, d, transform, cssClass, id) {
	//create element
	var p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	//path
	p.setAttribute('d', d);
	//transform
	p.setAttribute('transform', transform);
	//css class
	p.setAttribute('class', cssClass);
	//id
	if (typeof id !== 'undefined') p.setAttribute('id', id);
	//add to parent
	svgParent.appendChild(p);
}


//arguments
//=============================================================
//svgParent : SVG element where the object will be added
//d : path
//style : style
//id : id tag of the element (optional)
function drawPathStyle(svgParent, d, transform, style, id) {
	//create element
	var p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	//path
	p.setAttribute('d', d);
	//transform
	p.setAttribute('transform', transform);
	//style
    p.style.fill = style.fillColor;
    p.style.stroke = style.borderColor;
	p.style.strokeWidth = style.borderWidth;
	//id
	if (typeof id !== 'undefined') p.setAttribute('id', id);
	//add to parent
	svgParent.appendChild(p);
}