$(function(){
    
    $("#chart_main").highcharts({
        title:{
            text: "Generador de ondas",
            x: 0,
            y: 20,
        },
        // Este es para ocultar el letrero de "Highcharts.com"
        credits: {
            enabled: false,
        },
        xAxis: {
            title: {
                text: 'Potencial'
            },
            Categoria: []
        },
        tooltip: {
            enabled: false,
            valueSuffix: 'v'
        },
        legend: {
            Layout: 'vertical',
            aling: 'right',
            verticalAling: 'bottom',
            borderWidth: 0
        },
        series: [{
            name: 'caso1',
            data: [20, 30, 50]
        }, {
            name: 'caso2',
            data: [10, 45, 85]
        }]
    });
})