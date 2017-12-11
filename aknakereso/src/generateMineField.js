    var mineCount = 10;

    var aknamezo = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ];

    var size = aknamezo[0].length;

    var sum = 0;
    var side = size *size;

    for (var    i=0; i<size; i++){
        for(var j=0; j<size; j++){
            var rand = Math.random();

            if ((rand < mineCount/(size*size) || (side <= (mineCount/size)* 1.5 && side <= mineCount -sum)) && mineCount > sum){
                aknamezo[i][j] = -1;
                sum++;
            }
            else aknamezo[i][j] = 0;
            side--;
        }
    }

    for(var i=0; i<aknamezo.length; i++){
        console.log(aknamezo[i])
    }

    exports.aknamezo = aknamezo.toString();

