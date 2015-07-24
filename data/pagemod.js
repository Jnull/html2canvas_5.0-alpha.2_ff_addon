// pagemod.js

//timeout method from cptdanko in comment 7 https://github.com/niklasvh/html2canvas/issues/491
//* This doesn't work for me -Null 7/23/2015
function getScreenshot(callbackFunc){
    var content = document.body;
    setTimeout(function(){screenCap();},0); //tried changing 0 to 5000 but didn't result in a difference. 
    function screenCap(){
        html2canvas(content, {
            onrendered: function(canvas) {
                document.documentElement.replaceChild(canvas, document.body);
            }
        });
    }
}
getScreenshot();
//*/

/* version 5.0 alpha 2 library (callback) current way.
html2canvas(document.head, {
    taintTest:false,
    logging:true,
    allowTaint: true,
    useCORS: true,
    onrendered: function(canvas) {
        document.documentElement.replaceChild(canvas, document.body);
    }
});
//*/

/* html2canvas 4.0 (no callback - deprecated).
html2canvas(document.body, {
    taintTest:false,
    logging:true,
    allowTaint: true,
    useCORS: true,
    onrendered: function(canvas) {
        document.documentElement.replaceChild(canvas, document.body);
    }
});
//*/