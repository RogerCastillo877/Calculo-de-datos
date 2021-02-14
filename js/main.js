var slider1, slider2, slider3, slider4;
var chart_main, chart_donut, chart_pie;

$(document).ready(function(){
    
    $(window).resize(function(){
        window.controlSize();
    });
});

function initCharts(){
    chart_main = $("#chart_main").highcharts();
    chart_donut = $("#chart_donut").highcharts();
    chart_pie = $("#chart_pie").highcharts();
    
    slider1 = document.getElementById("param1");
    noUiSlider.create(slider1, {
        start: 0,
        range: {
            "min": 0,
            "max": 360
        },
        step: 1,
    });
    
    slider2 = document.getElementById("param2");
    noUiSlider.create(slider2, {
        start: 500,
        range: {
            "min": 0,
            "max": 1000
        },
        step: 1,
    });
    
    slider3 = document.getElementById("param3");
    noUiSlider.create(slider3, {
        start: 600,
        range: {
            "min": 400,
            "max": 800
        },
        step: 1,
    });
    
    slider4 = document.getElementById("param4");
    noUiSlider.create(slider4, {
        start: 50,
        range: {
            "min": 0,
            "max": 100
        },
        step: 1,
    });
    
    slider1.noUiSlider.on("update", function(values, handle){
        $(slider1).parent().find(".valor").html(values[0]);
    });
    slider2.noUiSlider.on("update", function(values, handle){
        $(slider2).parent().find(".valor").html(values[0]);
    });
    slider3.noUiSlider.on("update", function(values, handle){
        $(slider3).parent().find(".valor").html(values[0]);
    });
    slider4.noUiSlider.on("update", function(values, handle){
        $(slider4).parent().find(".valor").html(values[0]);
    });
    
     slider1.noUiSlider.on("change", function(values, handle){
        procesaValores();
    });
    slider2.noUiSlider.on("change", function(values, handle){
        procesaValores();
    });
    slider3.noUiSlider.on("change", function(values, handle){
        procesaValores();
    });
    slider4.noUiSlider.on("change", function(values, handle){
        procesaValores();
    });
    
    procesaValores();
    controlSize();
}

function procesaValores(){
    var sl1 = slider1.noUiSlider.get();
    var sl2 = slider2.noUiSlider.get();
    var sl3 = slider3.noUiSlider.get();
    var sl4 = slider4.noUiSlider.get();
    
    var serie1 = [], serie2 = [];
    for(var i=0; i<=100; i++){
         val1 = 1000 + 50 * Math.sin( sl1 * 2 );
         val1 =  100* Math.sin( val1 * i * Math.pow(sl2, 2) );
        val1 = val1 / Math.pow(sl3, 2);
        val1 = 100 + val1 * 1000 * sl4;
        val1 = Math.round(100 * val1); 
        serie1.push(val1);
        serie2.push(2 * val1 + Math.sin( sl1 * 2 ));
    }
    
    chart_main.series[0].setData(serie1, true);
    chart_main.series[1].setData(serie2, true);
    
        var serie3 = [];
        serie3.push(["Val. 1", 40000 + (sl1 * 100)]);
        serie3.push(["Val. 2", sl2 * sl2]);
        serie3.push(["Val. 3", sl3 * sl3]);
        serie3.push(["Val. 4", sl4 / (sl1 + 10)]);
        chart_donut.series[0].setData(serie3, true);
            
        var serie4 = [];
        serie4.push(["Resultado. 1", 100 + (sl1 * 2)]);
        serie4.push(["Resultado. 2", Number(sl2)]);
        serie4.push(["Resultado. 3", Number(sl3)]);
        serie4.push(["Resultado. 4", 20 + sl4 * 2]);
        chart_pie.series[0].setData(serie4, true);
}

var cargadas = 0;
function chartOk(){
    cargadas ++;
    if(cargadas >= 3){
        initCharts();
    }
}

var ancho = true;
function controlSize(){
    if($(window).width() < 600){
        if(ancho){
            chart_main.legend.group.hide();
            ancho = false;
        }
    }else{
        if(!ancho){
            chart_main.legend.group.show();
            ancho = true;
        }       
    }
}