       var players;
       var timerId;
       var scoreToWin = 2000;
       var updateInterval = 2000;
       function descending(a, b) { return a.score < b.score ? 1 : -1; }

       function reposition() {
           var height = 30;
           var y = height;
           for(var i = 0; i < players.length; i++) {
               players[i].$item.css({
                   top: y + "px",
                   position: "absolute"
               });
               y += height;
           }
       }

       function updateBoard() {
           var player = getRandomPlayer();
           player.score += getRandomScoreIncrease();
           player.$item.find(".score").text(player.score);

           players.sort(descending);
           updateRanks(players);
           reposition();

           if(isGameOver(player.score)) {
               resetBoard();
           }
       }

       function isGameOver(score) {
           return score >= scoreToWin;
       }

       function getRandomPlayer() {
           var index = getRandomBetween(0, players.length);
           return players[index];
       }

       function getRandomScoreIncrease() {
           return getRandomBetween(50, 150);
       }

       function getRandomBetween(minimum, maximum) {
           return Math.floor(Math.random() * maximum) + minimum;
       }

       function updateRanks(players) {
           for(var i = 0; i < players.length; i++) {
               players[i].$item.find(".rank").text(i + 1);
               switch(i) {
                   case 0:
                       players[i].$item.css("width","280px");
                       break;
                   case 1:
                       players[i].$item.css("width","250px");
                       break;
                   case 2:
                       players[i].$item.css("width","215px");
                       break;
                   case 3:
                       players[i].$item.css("width","130px");
                       break;
                   case 4:
                       players[i].$item.css("width","100px");
                       break;
                   default:
                       break;
               }
           }
       }
       function resetBoard() {
               var $list = $("#players .tourney-leaders-list");
           $list.css("top","-23px").find("li").remove();
               if (timerId !== undefined) {
                   clearInterval(timerId);
               }

               players = [
                   {name: "tanechka.klenova", score: 500},
                   {name: "0028708", score: 400},
                   {name: "Alexander", score: 300},
                   {name: "You", score: 200},
                   {name: "tanechka.klenova", score: 100}
               ];

               for (var i = 0; i < players.length; i++) {
                   if (players[i].name != "You") {
                       var $item = $(
                           "<li>" +
                           "<div class='rank'>" + (i + 1) + "</div>" +
                           "<div class='bg'></div>" + "<span>" + players[i].name + "</span>" +
                           "<div class='score'>" + players[i].score + "</div>" +
                           "</li>");
                   } else {
                       var $item = $(
                           "<li class='current-user'>" +
                           "<div class='rank'>" + (i + 1) + "</div>" +
                           "<div class='bg'></div>" + "<span>" + players[i].name + "</span>" +
                           "<div class='score'>" + players[i].score + "</div>" +
                           "</li>");
                   }
                   players[i].$item = $item;
                   $list.append($item);
               }

               timerId = setInterval('updateBoard();', updateInterval);

               reposition();
       }

       resetBoard();

