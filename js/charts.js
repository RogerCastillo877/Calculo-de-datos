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

    $('#chart_donut').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Resultados en %',
            align: 'center',
            verticalAlign: 'top',
            y: 50
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage: .1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                    // distance: -50,
                    // estyle: {
                    //     fontWeight: 'bold',
                    //     color: 'white',
                    //     textShadow: '0px 1px 2px black'
                    // }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '100%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Porciento',
            innerSize: '50%',
            data: [
                ['Val. 1', 20],
                ['Val. 2', 60],
                ['Val. 3', 80],
                ['Val. 4', 10]
            ]
        }]
    });
    
    $('#chart_pie').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
        },
        title: {
            text: 'Resultado por zonas',
            y: 30
        },
        credits: {
              enabled: false
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage: .1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                // Desde este punto también se pueden desactivar la etiquetas directamente
                showInLegend: false
            }
        },
        legend: {
            // Si se coloca true aparecen las etiquetas en la parte inferior derecha
            enabled: false
            // Layout: 'vertical',
            // aling: 'right',
            // verticalAlign: 'bottom',
            // borderWidth: 0
        },
        series: [{
            name: 'Porcentaje',
            colorByPoint: true,
            data: [{
                name: 'Zona 1',
                y: 56.33
            }, {
                name: 'Zona 2',
                y: 24.03,
                sliced: true,
                selected: true
            },{
                name: 'Zona 3',
                y: 10.38
            },{
                name: 'Zona 4',
                y: 4.77
            }]
        }]
    });
})