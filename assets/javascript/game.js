$(document).ready(function () {
    var Random = Math.floor(Math.random() * 60 + 60)
    $('#scoreToMatch').text(Random);


    var num1 = Math.floor(Math.random() * 10 + 3)
    var num2 = Math.floor(Math.random() * 10 + 3)
    var num3 = Math.floor(Math.random() * 10 + 3)
    var num4 = Math.floor(Math.random() * 10 + 3)

    var userTotal = 0;
    var wins = 0;
    var losses = 0;


    $('#wins').text(wins);
    $('#losses').text(losses);


    function reset() {
        Random = Math.floor(Math.random() * 60 + 60);
        console.log(Random)
        $('#scoreToMatch').text(Random);
        num1 = Math.floor(Math.random() * 10 + 3);
        num2 = Math.floor(Math.random() * 10 + 3);
        num3 = Math.floor(Math.random() * 10 + 3);
        num4 = Math.floor(Math.random() * 10 + 3);
        userTotal = 0;
        $('#totalScore').text(userTotal);
    }

    function winner() {
        alert("Winner!!!");
        wins++;
        $('#wins').text(wins);
        reset();
    }

    function loser() {
        alert("You Lose!!");
        losses++;
        $('#losses').text(losses);
        reset();
    }

    $('.red').on('click', function () {
        userTotal = userTotal + num1;
        console.log("New userTotal= " + userTotal);
        $('#totalScore').text(userTotal);
        if (userTotal == Random) {
            winner();
        }
        else if (userTotal > Random) {
            loser();
        }
    })
    $('.blue').on('click', function () {
        userTotal = userTotal + num2;
        console.log("New userTotal= " + userTotal);
        $('#totalScore').text(userTotal);
        if (userTotal == Random) {
            winner();
        }
        else if (userTotal > Random) {
            loser();
        }
    })
    $('.yellow').on('click', function () {
        userTotal = userTotal + num3;
        console.log("New userTotal= " + userTotal);
        $('#totalScore').text(userTotal);
        if (userTotal == Random) {
            winner();
        }
        else if (userTotal > Random) {
            loser();
        }
    })
    $('.green').on('click', function () {
        userTotal = userTotal + num4;
        console.log("New userTotal= " + userTotal);
        $('#totalScore').text(userTotal);
        if (userTotal == Random) {
            winner();
        }
        else if (userTotal > Random) {
            loser();
        }
    });


});
