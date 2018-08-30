var editor = '';
var wysihtml5ParserRules = {
    classes: {
        "wysiwyg-text-align-right": 1,
        "wysiwyg-text-align-center": 1,
        "wysiwyg-text-align-left": 1
    },
    tags: {
        strong: {},
        b: {},
        i: {},
        em: {},
        br: {},
        p: {},
        div: 1,
        span: {},
        ul: {},
        ol: {},
        li: {}
    }
};
var wmh = [];

wmh.geti = (tipo) => {
    let vlr = '';
    let markdown = '';
    switch (tipo) {
        case 'markdown':
            vlr = $('#' + wmh.dv).val();
            markdown = turndownService.turndown(vlr)
            return markdown;
            break;
        case 'html':
            vlr = $('#' + wmh.dv).val().replace(/\n/g, "<br />");
            
            markdown = turndownService.turndown(vlr)
            vlr = markdown;
            wmh.backHTML(vlr);
            break;
        default:
            vlr = $('#' + wmh.dv).val();
            break;
    }
}

function iniWHM(vlr, style) {
    if (style == undefined) {
        style = "";
    }
    let vlrinp = $('#' + vlr);
    vlrinp = vlrinp[0].parentElement.id;
    $('#' + vlrinp).append(wmh.menu);
    wmh.dv = vlr;
    editor = new wysihtml5.Editor(wmh.dv, {
        toolbar: "wmh",
        stylesheets: style,
        parserRules: wysihtml5ParserRules
    });
}

wmh.menu = `<div id="wmh">
                <a class='btn' data-wysihtml5-command="bold"  title='CTRL+U'>  <i class="material-icons">format_bold</i></a>
                <a class='btn' data-wysihtml5-command="italic"  title='CTRL+i'><i class="material-icons">format_italic</i></a>    
                <a class='btn' data-wysihtml5-command="insertUnorderedList"><i class="material-icons">format_list_bulleted</i></a>
                <a class='btn' data-wysihtml5-command="insertOrderedList"><i class="material-icons">format_list_numbered</i></a>
                <a class='btn' data-wysihtml5-command="formatBlock"  data-wysihtml5-command-value="h1">h1</a>
                <a class='btn' data-wysihtml5-command="formatBlock"  data-wysihtml5-command-value="h2">h2</a>
                <a class='btn' data-wysihtml5-command="justifyLeft" ><i class="material-icons">format_align_left</i></a>
                <a class='btn' data-wysihtml5-command="justifyCenter" ><i class="material-icons">format_align_center</i></a>
                <a class='btn' data-wysihtml5-command="justifyRight" ><i class="material-icons">format_align_right</i></a>
            </div>`;


wmh.backHTML = (vlr) => {
    console.clear();

    // vlr = vlr.replace(/\n/g, "<br />");
   

    var vlrTXT = '';
    var alinhamento = '';
    for (let i = 0; i < wmh.marcDown.length; i++) {
        console.log(vlr.indexOf(wmh.marcDown[i]));
        if (vlr.indexOf(wmh.marcDown[i]) != -1) {
            
       
            switch (wmh.marcDown[i]) {
                case '|-|-|':
                    alinhamento = 'center';
                    break;
                case '||-|':
                    alinhamento = 'left';

                    break;
                case '|-||':
                    alinhamento = 'right';

                    break;
            
                default:
                    break;
            }

            let arr = vlr.split(wmh.marcDown[i]);
            let act = 0;
        
        
        for (let z = 0; z < arr.length; z++) {
                if (act == 0) {
                    if (arr.length - 1 != z) {
                        vlrTXT += arr[z] + '<p class="whm-' + alinhamento+'">';
                    }else{
                        vlrTXT += arr[z]
                    }
                    act = 1;
                } else {
                    console.log(arr.length - 1, z);
                    if (arr.length - 1 != z) {
                        vlrTXT += arr[z] + '</p>';
                    } else {
                        vlrTXT += arr[z]
                    }
                    act = 0;       
                }
            }
            vlr = vlrTXT;
            vlrTXT = '';
        }
    }
    console.log(vlr);
    let md = new Remarkable();
    let vlrRec = md.render(vlr);
    console.log(vlrRec);
    $('#md').html(vlrRec)
}

wmh.marcDown = [
    '|-|-|',
    '|-||',
    '||-|'
]


// if (act == 0) {
//     console.log(arr.length - 1 + '!=' + z);
//     if (arr.length - 1 != z) {
//         vlrTXT += arr[z] + '<p class="whm-center">';
//     }
//     act = 1;
// } else {
//     vlrTXT += arr[z] + '</p>';
//     act = 0;
// }