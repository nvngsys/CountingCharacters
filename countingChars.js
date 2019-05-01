countLetters = function (str) {
    str = str.replace(/\s/g, '');
    var objResult = {}; 
    var arrString = str.split(''); 
    if (arrString instanceof Array) {
        arrString.forEach(function (v, i) {
            if (!objResult[v]) {
                objResult[v] = [i];
            } else {
                objResult[v].push(i);
            }
        })

        Object.keys(objResult).forEach(function (v) {
            objResult[v] = objResult[v].length;
        });

    }
    console.log(objResult);
    return objResult;
}
countLetters("lighthouse in the house") 