var editor = '';
var wysihtml5ParserRules = {
    tags: {
        strong: {},
        b: {},
        i: {},
        em: {},
        br: {},
        p: {},
        div: {},
        span: {},
        ul: {},
        ol: {},
        li: {}
    }
};
var wmh = [];

wmh.get = () => {
    let vlr = $('#' + wmh.dv).val();
    
    console.log(vlr);
}

function iniWHM(vlr) {
    console.log(vlr);
    wmh.dv = vlr;
    editor = new wysihtml5.Editor(wmh.dv, {
        toolbar: "wmh",
        parserRules: wysihtml5ParserRules
    });
}

