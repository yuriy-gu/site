function *gen(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}

var it = gen(5);

console.log( it.next() );//6 x+1=6       
console.log( it.next(12) );//12*2/3=8
console.log( it.next(13) );//42

///////////////////////////////////////

//function *omg(word) {
//    var prefixes = [`such`, `very`, `so`];
//    for (var i = 0; ;i++) {
//        word = yield (prefixes[i % 3] + ` ` + word)
//    }
//}
//
//var iter = omg(`Brain`);
//
//console.log(iter.next())
