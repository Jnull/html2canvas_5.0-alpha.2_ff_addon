// pagemod.js

// * version 5.0 alpha 2 library (callback) current way.
html2canvas(document.head, {
    taintTest:false,
    logging:true,
    allowTaint: true,
    useCORS: true,
    onrendered: function(canvas) {
        document.documentElement.replaceChild(canvas, document.head);
    }
});
//*/

/* This works for html2canvas 4.0 (no callback) deprecated way.
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