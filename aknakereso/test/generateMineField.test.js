var chai =require('chai');
var expect=chai.expect;

var generateMineField = require('..generateMineField.js')
var Aknakereső=generateMineField.Aknakereső;

var aknamezo = [
    [ 0, -1,  0],
    [-1,  0,  0],
    [-1,  0,  0]
];

//aknamező létre hozása és feltöltése aknával
for( var i=0 ; i<10 ; i++ ) {
    for( var j=0 ; j<10 ; j++ ) {
        aknamezo[i][j] = new mezo();
        if(searchMine(mines, i, j)) aknamezo[i][j].setMine(true);
    }
}

//aknákszomszédos területekhez viszonyítva
for( var l=0 ; l<10 ; l++ ) {
    for( var m=0 ; m<10 ; m++ ) {
        aknamezo[x][y].setNeighbours(calculateNeighbours(x,y));
    }
}
