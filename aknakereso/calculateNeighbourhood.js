var xkord=i;
var ykord=j;
var neighbours = 0;


for( var i=0 ; i<10 ; i++ ) {
    for( var j=0 ; j<10 ; j++ ) {
        aknamezo[i][j]
    }
}
var makeValidCoordinate=aknamezo[i][j];

    // valódi kordináta létrehozása a szomszédos oldalak vizsgálatával
    for( var x=makeValidCoordinate(xkord - 1) ; x<=makeValidCoordinate(xkord + 1) ; x++ ) {

    for( var y=makeValidCoordinate(ykord - 1) ; y<=makeValidCoordinate(ykord + 1) ; y++ ) {

        //oldalak vizsgálata van e benne bomba illetve van e egyáltalán szomszédja
        if(x != xkord || y != ykord) if(minefield[x][y].getMine()) neighbours++;

    }

}




