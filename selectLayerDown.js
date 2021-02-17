var layers = app.activeDocument.layers;
var thisLayer = app.activeDocument.activeLayer;

app.activeDocument.activeLayer = layers.nextItem(thisLayer);