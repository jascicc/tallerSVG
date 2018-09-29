var data = {
    title : "Market share of desktop browsers in the United States",
    source : {
        company : "statista",
        url : "https://www.statista.com/statistics/272697/market-share-desktop-internet-browser-usa/",
        month : "April 2018" 
    },
    results : [
        {
            browser : {
                name : "Google Chrome",
                color : '#1BA261'
            },
            value : 59.71
        },
        {
            browser : {
                name : "Internet Explorer",
                color : '#006FC9'
            },
            value : 11.14
        },
        {
            browser :  {
                name : "Mozilla Firefox",
                color : '#FF7F06'
            },
            value : 10.73
        },
        {
            browser : {
                name : "Apple Safari",
                color : '#00C0DF'
            },
            value : 9.15
        },
        {
            browser : {
                name : "Microsoft Edge",
                color : '#BA3FE3'
            },
            value : 7.56
        },
        {
            browser : {
                name : "Opera",
                color : '#FF1B2D'
            },
            value : 0.87
        }
    ]
};

//const NS = '';

function init() {
    console.log('Initializing page...');
    //drawing pie chart
    var pieChart = new PieChart(document.getElementById('svgchart'));
    for(var i=0; i < data.results.length; i++){
        var result = data.results[i];
        pieChart.addDataPoint(new DataPoint(result.browser.name, result.value, result.browser.color));
        pieChart.showLabels();
    }
    
    pieChart.draw();
    pieChart.showTitle(data.title);
    pieChart.showSubtitle(data.source.url);


    //drawSlice(20);
    // drawSlice(40);
    // drawSlice(60);
    // drawSlice(80);
}

//  * @param {Number} p porcentaje de pieza
//  * @param {Number} cx origen x
//  * @param {Number} cy origen y
//  * @param {Number} r radio

// const drawSlice = (p = 20, cx = 200, cy = 200, r = 150) => {
//     const x = cx + (Math.sin((Math.PI / 180) * (p * 3.6)) * r);
//     const y = cy - (Math.cos((Math.PI / 180) * (p * 3.6)) * r);
//     console.log("==================");
//     console.log(x);
//     console.log(y);
//     console.log("==================");
//     return {x, y};
// };

function drawSlice(p){
    var cx = 200;
    var cy = 200;
    var r = 150;
    var x = cx + (Math.sin((Math.PI / 180) * (p * 3.6)) * r);
    var y = cy - (Math.cos((Math.PI / 180) * (p * 3.6)) * r);
    console.log(x+','+y);

    var d= 'M' + cx + ',' + cy + ' L' + cx + ',' + (cy - r) + ' A' + r + ',' + r + ' 1 ';

    if(p < 50) d += '0,1 '; else d += '1,1 '; 
    d += x + ',' + y + ' Z';
    console.log(d);
    // <path class="slice" d="M200,200 L200, 50 A150,150 0 0,1 342.6,153.6 Z"/>    
    drawPathClass(document.getElementById('svgchart'), d, '', 'slice');
}

// const drawCirle = (cx = 200, cy =  200, r = 150) =>{
//     const svg
// };
