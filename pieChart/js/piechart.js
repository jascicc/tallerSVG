//data point class
function DataPoint(title, value, color){
    if(typeof(title) !== 'undefined') this.title = title;
    if(typeof(value) !== 'undefined') this.value = value;
    if(typeof(color) !== 'undefined') this.color = color;
}

//pie chart class
function PieChart(svgParent){
    //attributes
    if(typeof svgParent !== 'undefined') this.svgParent = svgParent;
    this.values = Array();
    //add data point
    PieChart.prototype.addDataPoint = function(dataPoint){
        this.values[this.values.length] = dataPoint;
    }
    //draw
    PieChart.prototype.draw = function(){
        //adjust values
        var sum = 0;

        var cx = this.svgParent.getBoundingClientRect().width / 2;
        var cy = this.svgParent.getBoundingClientRect().height / 2;
        var r = cy - 100;
        if(cx < cy) r = cx - 100;

        for(var i=0; i < this.values.length; i++){
            sum += this.values[i].value;
        }

        var factor = sum / 100;
        var rotate = 0;
        //draw slice
        for(var i = 0; i <  this.values.length; i++){
            this.values[i].value = this.values[i].value / factor;
            var x = cx + (Math.sin((Math.PI / 180) * (this.values[i].value * 3.6)) * r);
            var y = cy - (Math.cos((Math.PI / 180) * (this.values[i].value * 3.6)) * r);

            var d= 'M' + cx + ',' + cy + ' L' + cx + ',' + (cy - r) + ' A' + r + ',' + r + ' 1 ';

            if(this.values[i].value < 50) d += '0,1 '; else d += '1,1 '; 
            d += x + ',' + y + ' Z';
            //draw path  
            drawPathStyle(this.svgParent, d, 'rotate(' + rotate + ' ' + cx + ',' + cy + ')', new Style(this.values[i].color, this.values[i].color, 1)) ;
            rotate += this.values[i].value * 3.6;
        }
        
    }

    //show title
    PieChart.prototype.showTitle = function(title){
        if(typeof title !== 'undefined'){
            drawTextClass(this.svgParent, title, new Point('50%', '50px'), 'title');
        }
    }

    //show labels
    PieChart.prototype.showLabels = function(){
        
        var cx = '1%';
        var cy=this.svgParent.getBoundingClientRect().height-60;

        for(var i=0; i< this.values.length; i++){
            drawRectangleStyle(this.svgParent, new Point('1%',(cy-10)+'px'),{width:10,height:10},{fillColor:this.values[i].color});
            drawTextClass(this.svgParent, this.values[i].title, new Point('2%',cy+'px'), 'label');
            cy-=15;
        }     
    }

    //show subtitle
    PieChart.prototype.showSubtitle = function(subtitle){
        if(typeof subtitle !== 'undefined'){
            drawTextClass(this.svgParent, subtitle, new Point('50%', '490px'), 'subtitle');
        }
    }

}