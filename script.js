// GALERIA SLIDER DESKTOP //
$(document).ready(function() {
    let $sliderInner = $(".img-container-mobile");
    let $images = $sliderInner.find("img");
    let index = 1;

    setInterval(function() {
        let percentage = index * -100;
        $sliderInner.css("transform", "translateX(" + percentage + "%)");
        index++;
        if (index > $images.length - 1) {
            index = 0;
        }
    }, 3000);
});


// GALERIA SLIDER DESKTOP //
$(document).ready(function() {
    let $sliderInner = $(".container");
    let $images = $sliderInner.find("img");
    let index = 1;

    setInterval(function() {
        let percentage = index * -100;
        $sliderInner.css("transform", "translateX(" + percentage + "%)");
        index++;
        if (index > $images.length - 1) {
            index = 0;
        }
    }, 3000);
});

