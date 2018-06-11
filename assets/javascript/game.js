$(document).ready(function() {

    crystals = ["../images/red.jpeg", "../images/blue.jpeg", "../images/yellow.png", "../images/green.jpeg"];

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

        counter = 0;
        $('#yourScore').text(counter);

        function randomIntFromInterval(min,max) {
            return Math.floor(Math.random()*(max-min+1)+min);
        }

        var computerAnswer = randomIntFromInterval(19,120);

        $('.crystalImage').on('click', function() {
            counter = counter + parseInt($(this).data('num'));

            $('#yourScore').text(counter);

            if (counter == computerAnswer) {
                $('#status').text('You won!');
                wins ++;
                $('#win').text(wins);
                console.log(wins)
                $('#crystals').empty();
                newCrystals();
                newGame;

            } else if (counter > computerAnswer) {
                $('#status').text('You lost!')
                losses ++;
                $('#loss').text(losses);
                console.log(losses)
                $('#crystals').empty();
                newCrystals();
                newGame();
            }
        });
    }
});