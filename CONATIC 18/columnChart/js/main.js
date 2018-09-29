var values = {
    temperatures : [
        {
            month : "January",
            high : 65,
            low : 49
        },
        {
            month : "February",
            high : 66,
            low : 49
        },
        {
            month : "March",
            high : 68,
            low : 50
        },
        {
            month : "April",
            high : 73,
            low : 53
        },
        {
            month : "May",
            high : 75,
            low : 55
        },
        {
            month : "June",
            high : 79,
            low : 59
        },
        {
            month : "July",
            high : 84,
            low : 62
        },
        {
            month : "August",
            high : 85,
            low : 64
        },
        {
            month : "September",
            high : 84,
            low : 62
        },
        {
            month : "October",
            high : 79,
            low : 56
        },
        {
            month : "November",
            high : 74,
            low : 49
        },
        {
            month : "December",
            high : 69,
            low : 45
        },
    ]
};

function init() {
    displayValues();
    drawChart(values.temperatures);
    updateChart(values.temperatures);
}

//display values
function displayValues() {
    //get table body
    var tableValues = document.getElementById('tablevalues');
    //read values
    for (var i = 0; i < values.temperatures.length; i++) {
        //read value
        var value = values.temperatures[i];
        //create row
        var row = document.createElement('tr');
        //create cells
        createLabelCell(tableValues, value.month);
        createInputCell(tableValues, value.month + 'high', value.high);
        createInputCell(tableValues, value.month + 'low', value.low);
        //add row to table
        tableValues.appendChild(row);
    }
}

//draw chart
function drawChart(temperatures) {
    //get svg element
    var svg = document.getElementById('svgchart');
    //titles
    drawTextClass(svg, 'Average Monthly Temperature', new Point('50%', '50px'), 'title');
    drawTextClass(svg, 'Tijuana B.C. México', new Point('50%', '80px'), 'subtitle');
    drawTextClass(svg, 'Temperature', new Point('5%', '50%'), 'yaxisheader');
    //y axis
    drawLineClass(svg, new Point('10%', '20%'), new Point('10%', '80%'), 'axisline');
    var yAxisValue = 100;
    for (var i = 20; i <= 80; i += 6) {
        drawLineClass(svg, new Point('9.5%', i + '%'), new Point('90%', i + '%'), 'guideline');
        drawTextClass(svg, yAxisValue + '&deg', new Point('9%', (i + .4) + '%'), 'yaxistext');
        yAxisValue -=10;
    }
    //x axis
    drawLineClass(svg, new Point('10%', '80%'), new Point('90%', '80%'), 'axisline');
    var xAxisSkip = 80 / temperatures.length;
    for (var i = 0; i < temperatures.length; i ++) {
        //column width
        var columnWidth = (xAxisSkip/2) - 1.25;
        //draw columns
        drawRectangleClass(svg,new Point(((i * xAxisSkip) + 11) + '%', '79%'), new Size(columnWidth + '%', '1%'),'series1', 'bar' + temperatures[i].month + 'high');
        drawRectangleClass(svg,new Point(((i * xAxisSkip) + 10.25 + (xAxisSkip / 2)) + '%', '79%'), new Size(columnWidth + '%', '1%'),'series2', 'bar' + temperatures[i].month + 'low');
        //axis text
        drawTextClass(svg, temperatures[i].month, new Point( ((i * xAxisSkip) + (10 + (xAxisSkip/2))) + '%', '82%'), 'xaxistext');
        //axis header
        drawTextClass(svg, 'Month', new Point('50%', '86%'), 'xaxisheader');
        //series headers
        drawTextClass(svg, temperatures[i].high + '&deg;F', new Point( ((i * xAxisSkip) + 11 + (columnWidth/2)) + '%', '78%'), 'series1header', 'header' + temperatures[i].month + 'high');
        drawTextClass(svg, temperatures[i].low + '&deg;F', new Point( ((i * xAxisSkip) + 10.25 + (xAxisSkip / 2) + (columnWidth/2)) + '%', '78%'), 'series2header', 'header' + temperatures[i].month + 'low');
    }
}

//update chart
function updateChart(temperatures) {
    for (i = 0; i < temperatures.length; i++) {
        //get high temperature column
        var highColumn = document.getElementById('bar' + temperatures[i].month + 'high');
        //height
        var columnHeight = (temperatures[i].high * .6);
        highColumn.removeAttribute('height');
        highColumn.setAttribute('height', columnHeight + '%' );
        //y value
        highColumn.removeAttribute('y');
        highColumn.setAttribute('y', (80 - columnHeight) + '%');
        //header y
        var highColumnHeader = document.getElementById('header' + temperatures[i].month + 'high');
        highColumnHeader.removeAttribute('y');
        highColumnHeader.setAttribute('y', (79 - columnHeight) + '%');

        //get low temperature column
        var lowColumn = document.getElementById('bar' + temperatures[i].month + 'low');
        //height
        var columnHeight = (temperatures[i].low * .6);
        lowColumn.removeAttribute('height');
        lowColumn.setAttribute('height', columnHeight + '%' );
        //y value
        lowColumn.removeAttribute('y');
        lowColumn.setAttribute('y', (80 - columnHeight) + '%');
        //header y
        var lowColumnHeader = document.getElementById('header' + temperatures[i].month + 'low');
        lowColumnHeader.removeAttribute('y');
        lowColumnHeader.setAttribute('y', (79 - columnHeight) + '%');
    }

}

//update data point
function updateDataPoint(id) {
    //get temperature value
    var temperature = document.getElementById(id).value;
    //get  column
    var column = document.getElementById('bar' + id);
    //height
    var columnHeight = temperature * .6;
    column.removeAttribute('height');
    column.setAttribute('height', columnHeight + '%' );
    //y value
    column.removeAttribute('y');
    column.setAttribute('y', (80 - columnHeight) + '%');
    //header y
    var columnHeader = document.getElementById('header' + id);
    columnHeader.innerHTML = temperature + '&deg;F';
    columnHeader.removeAttribute('y');
    columnHeader.setAttribute('y', (79 - columnHeight) + '%');

}

//add table cell with text
function createLabelCell(parent, text) {
    var cellLabel = document.createElement('td');
    cellLabel.innerHTML = text;
    parent.appendChild(cellLabel);
}

//add table cell with input
function createInputCell(parent, id, value) { 
    var cellInput = document.createElement('td');
    var input = document.createElement('input');
    input.type = 'number';
    input.id = id;
    input.value = value;
    input.addEventListener('change', function() { updateDataPoint(this.id); });
    cellInput.appendChild(input);
    parent.appendChild(cellInput);
}