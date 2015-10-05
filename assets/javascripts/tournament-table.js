var players2;
var timerId2;
var updateInterval2 = 1000;
function descending2(a, b) { return a.score < b.score ? 1 : -1; }

function reposition2() {
    var height = 50;
    var y = height;
    for(var i = 0; i < players2.length; i++) {
            players2[i].$item.css({
                top: y + "px",
                position: "absolute"
            });
        if (i % 2 == 0) {
            players2[i].$item.css({
                right: "150px",
                left: 0
            });
            players2[i].$item.find(".bg").css({
                left: "-1px",
                right: "",
                background: "url(../assets/images/tournaments-user-row-left.png) no-repeat 0 0",
                width: "151px"
            });
        } else {
            y += height;
            players2[i].$item.css({
                right: 0,
                left: "150px"
            });
            players2[i].$item.find(".bg").css({
                left: 0,
                right: 0,
                background: "url(../assets/images/tournaments-user-row-right.png) repeat 0 0",
                width: "149px"
            });
        }
    }
}

function updateBoard2() {
    var player = getRandomPlayer2();
    player.score += getRandomScoreIncrease2();
    player.$item.find(".score").text(player.score);

    players2.sort(descending2);
    updateRanks2(players2);
    reposition2();
}

function getRandomPlayer2() {
    var index = getRandomBetween2(0, players2.length);
    return players2[index];
}

function getRandomScoreIncrease2() {
    return getRandomBetween2(500, 1000);
}

function getRandomBetween2(minimum, maximum) {
    return Math.floor(Math.random() * maximum) + minimum;
}

function updateRanks2(players2) {
    for(var i = 0; i < players2.length; i++) {
        players2[i].$item.css("position","absolute").find(".rank").text(i + 1);
        switch(i) {
            case (i % 2 == 0):
                players2[i].$item.css("right","0");
                break;
            case (i % 2 == 1):
                players2[i].$item.css("left","0");
                break;
            default:
                break;
        }
    }
}
function resetBoard2() {
    var $list = $(".leaders .leaders-table");
    $list.css("top","-43px").find("li").remove();
    if (timerId2 !== undefined) {
        clearInterval(timerId2);
    }

    players2 = [
        {name: "raiseonce", score: 35354},
        {name: "skv_055", score: 35300},
        {name: "senna1993", score: 25000},
        {name: "sakis68", score: 24600},
        {name: "nemosea18", score: 1000},
        {name: "You", score: 0}
    ];
    var listHeight = (50 * Math.ceil(1/2*players2.length)) + 10;
    $list.css("height",listHeight + "px");
    for (var i = 0; i < players2.length; i++) {
        if (players2[i].name == "You") {
                var $item = $("<li class='current-user clearfix'><div class=bg></div>" +
                "<div class=name><span class=rank>" + (i + 1) + "</span>" + ". " + players2[i].name + "</div>" +
                "<div class=score>" + players2[i].score + "</div>" +
                "</li>");
        } else {
                var $item = $("<li class=clearfix><div class=bg></div>" +
                "<div class=name><span class=rank>" + (i + 1) + "</span>"+ ". " + players2[i].name + "</div>" +
                "<div class=score>" + players2[i].score + "</div>" +
                "</li>");
        }
        players2[i].$item = $item;
        $list.append($item);
    }

    timerId2 = setInterval('updateBoard2();', updateInterval2);

    reposition2();
}

resetBoard2();