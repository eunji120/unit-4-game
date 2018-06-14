$(document).ready(function() {

    crystals = ["../images/red.jpeg", "../images/blue.jpeg", "../images/yellow.png", "../images/green.jpeg"];

    //variables of scoreboard
    var counter = 0;
    var wins = 0;
    var losses = 0;

    $('#win').text(wins);
    $('#loss').text(losses);

    newCrystals();
    newGame();

    function newCrystals () {
        var numbers = []
            whiel(numbers.length < 4); {
                var computerNumber = Math.ceil(Math.random()*12)
                var found = false;
                //each round continues until the player's number equals the computerNumber
                for (var i = 0; i < numbers.length; i++) {
                    if (numbers[i] === computerNumber) {
                        found = true; break
                    }
                }
                if(!found)numbers[numbers.length]=computerNumber;
            }
        console.log(numbers);

        for (i = 0; i < numbers.length; i++) {
            var imageCrystal = $('<img>');
            imageCrystal.attr('data-num', numbers[i]);
            imageCrystal.attr('src', crystals[i]);
            imageCrystal.attr('alt', 'crystals');
            imageCrystal.addClass('crystalImage');
            $('#crystals').append(imageCrystal);
        }
    }

    function newGame() {
        //after each round, the value of counter goes back to 0
        counter = 0;
        $('#yourScore').text(counter);

        //randomly generated computerAnswer 
        function randomIntFromInterval(min,max) {
            return Math.floor(Math.random()*(max-min+1)+min);
        }

        var computerAnswer = randomIntFromInterval(19,120);

        $('.crystalImage').on('click', function() {
            counter = counter + parseInt($(this).data('num'));

            $('#yourScore').text(counter);

            //when the player's number and the computerAnswer matches,
            if (counter === computerAnswer) {
                //'You won!' shows up
                $('#status').text('You won!');
                //the number of Wins gies up by 1
                wins ++;
                $('#win').text(wins);
                console.log(wins)
                //reset to a new round
                $('#crystals').empty();
                newCrystals();
                newGame;

            //when the player's number goes over the computerAnswer, 
            } else if (counter > computerAnswer) {
                //'You lost!' shows up 
                $('#status').text('You lost!')
                //the number of Losses goes up by 1
                losses ++;
                $('#loss').text(losses);
                console.log(losses)
                //reset to a new round 
                $('#crystals').empty();
                newCrystals();
                newGame();
            }
        });
    }
});