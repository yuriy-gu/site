var button = document.getElementById(`get`),
    preloader = document.getElementById(`preloader`);

///////////////////////////////////////////////////////////

var api = '1d8122e26c8c4d25b225beb9d60f6f48';

function parse(url) {
    return new Promise((resolve, reject) => {
        var req = new XMLHttpRequest();
        req.open(`GET`, url, true);
        req.setRequestHeader(`X-Auth-Token`, api);
        req.send();
        req.onreadystatechange = function() {
            if (req.readyState !== 4) { return; }
            if (req.status === 200) {
                setTimeout(() => {
                    resolve(req.responseText);
                }, 2000);
            } else {
                reject(`${req.status} ${req.statusText}`)
            }
        }
    });
};

//////////////////////////////////////////////////////////////

var url = `http://api.football-data.org/v1/soccerseasons/424`;

function *bitCoin() {
    var promiseResult = yield parse(url);
    console.log(JSON.parse(promiseResult));
}

var iterator = bitCoin();

button.addEventListener(`click`, () => {
    preloader.style.visibility = `visible`;
    var result = iterator.next().value;
    result.then((result) => iterator.next(result)).then(() => {
        button.style.visibility = 'hidden';
        preloader.style.visibility = `hidden`;
    });
})


            //// TASK ///
/// HIDE PRELOADER WHEN DATA IS RECIEVED ///
