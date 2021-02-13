var slider1, slider2, slider3, slider4;


$(document).ready(function(){
    
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
        start:0,
        range: {
            "min": 400,
            "max": 800
        },
        step: 1, 
    });

    slider4 = document.getElementById("param4");
    noUiSlider.create(slider4, {
        start:0,
        range: {
            "min": 0,
            "max": 100
        },
        step: 1, 
    });
});