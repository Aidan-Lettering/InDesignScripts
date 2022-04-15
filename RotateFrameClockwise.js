var rotationFactor = -1; // change this number to increase/decrease the amount the text frame is rotated by
var doc = app.activeDocument;

function main() {
    var hasErrors = false,
        selections = app.selection;

    for (var i = 0; i < selections.length && !hasErrors; i++) {
        var textFrame = selections[i];
        hasErrors = isError(textFrame);

        if (!hasErrors) {
            rotateFrame(textFrame, rotationFactor);
        };
    }
}

function isError(obj) {
    if (!(obj instanceof TextFrame)) {
        alert('Please select a text frames and try again');
        return true;
    }
    return false;
}

function rotateFrame(srcObj, degree) {
    srcObj.rotationAngle = srcObj.rotationAngle + degree;
}

main();