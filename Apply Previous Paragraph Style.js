//--------Apply Previous Paragraph Style--------//
/*
    When you have a text frame selected, this 
    script will select the previous Paragraph 
    Style in the document's list of paragraph 
    styles. If used on the first, it will loop 
    to the last one.

    Best used when mapped to a keyboard shortcut.

    Main function and isError based on code by
    Sara Linsley. 
    https://github.com/saraoswald/Manga-Scripts
*/

function main() {
    var hasErrors = false,
        selections = app.selection;

    for (var i = 0; i < selections.length && !hasErrors; i++) {
        var textFrame = selections[i] instanceof InsertionPoint ?
            selections[i].parentTextFrames[0] :
            selections[i];
        hasErrors = isError(textFrame);

        if (!hasErrors) {
            textFrame.paragraphs[0].appliedParagraphStyle = applyPreviousStyle(textFrame.paragraphs[0].appliedParagraphStyle);
        };
    }
}

function isError(obj) {
    if (!(obj instanceof TextFrame)) {
        alert('Please select some text frames and try again');
        return true;
    }
    return false;
}

function applyPreviousStyle(currentStyle){
    var allDocParaStyles = app.activeDocument.allParagraphStyles;
    var allStylesCount = allDocParaStyles.length;
    
    var index = 0;
    for (var i = 0; i < allStylesCount; i++) {
        if(allDocParaStyles[i].name === currentStyle.name){
            index = i;
            i = allStylesCount;
        }
    }

    if(index > 0){
        //go to previous
        return allDocParaStyles[index - 1];
    }
    else{
        //go to last
        return allDocParaStyles[allStylesCount -1];
    }
}

main();