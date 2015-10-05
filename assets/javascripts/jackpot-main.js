      $(function() {
          var jackpot_counter = $("#jackpot-counter");
          if (jackpot_counter.length > 0) {

              jackpot_interval = setInterval(function () {
                  var data = jackpot_counter.data();
                  data.currentValue = data.currentValue + data.difference;
                  jackpot_counter.data({currentValue: data.currentValue, difference: data.difference});
                  jackpot_counter.flipCounter('setNumber', data.currentValue / 100);
              }, 1000);

              jackpot_counter.flipCounter({
                  number: (jackpot_counter.data().currentValue / 100),
                  formatNumberOptions: {format: "#,###.0", locale: "us"},
                  dotWidth: 7,
                  dashWidth: 17,
                  commaWidth: 7,
                  spaceWidth: 11
              });
          }
          var small_jackpot_counter = $("#small-jackpot-counter");
          if (small_jackpot_counter.length > 0) {

              small_jackpot_interval = setInterval(function () {
                  var data = small_jackpot_counter.data();
                  data.currentValue = data.currentValue + data.difference;
                  small_jackpot_counter.data({currentValue: data.currentValue, difference: data.difference});
                  small_jackpot_counter.flipCounter('setNumber', data.currentValue / 100);
              }, 1000);

              small_jackpot_counter.flipCounter({
                  number: (small_jackpot_counter.data().currentValue / 100),
                  formatNumberOptions: {format: "#,###.0", locale: "us"},
                  imagePath: '../assets/images/small-flip.png',
                  digitWidth: 24,
                  digitHeight: 30,
                  dotWidth: 8,
                  dashWidth: 20,
                  commaWidth: 8,
                  spaceWidth: 11
              });
          }
          var little_jackpot_counter = $("#little-jackpot-counter");
          if (little_jackpot_counter.length > 0) {

              little_jackpot_interval = setInterval(function () {
                  var data = little_jackpot_counter.data();
                  data.currentValue = data.currentValue + data.difference;
                  little_jackpot_counter.data({currentValue: data.currentValue, difference: data.difference});
                  little_jackpot_counter.flipCounter('setNumber', data.currentValue / 100);
              }, 1000);

              little_jackpot_counter.flipCounter({
                  number: (little_jackpot_counter.data().currentValue / 100),
                  formatNumberOptions: {format: "#,###.0", locale: "us"},
                  imagePath: '../assets/images/little-flip.png',
                  digitWidth: 13,
                  dotWidth: 6,
                  dashWidth: 17,
                  commaWidth: 6,
                  spaceWidth: 5
              });
          }
      });