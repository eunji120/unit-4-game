$(document).ready(function() {

    crystals = ["../images/crystals/red.jpeg", "../images/crystals/blue.jpeg", "../images/crystals/yellow.png", "../images/crystals/green.jpeg"];

    //creating variables of scoreboard
    var counter = 0;
    var wins = 0;
    var losses = 0;

    //sets win ID
    $('#win').text(wins);
    //sets loss ID
    $('#loss').text(losses);

//    newCrystals();
    //newGame();

    //randomly generating computerNumber that is between 19 and 120
    computerNumber = Math.floor(Math.random() * 101 ) + 19;
    $("#computerNumber").html('Number to Guess: ' + computerNumber);

    //4 crystals generating random values between 1 and 12
    for (var i = 0; i < crystals.length; i++) {
        
        var random = Math.floor(Math.random() * 11) + 1;
        
        var crystal = $("<img>");
            crystal.attr({
                "class": "crystal",
                "src": crystals[i],
                "data-random": random
        });


        crystal.on('click', function () {

            var num = parseInt($(this).attr('data-random'));
            
            var counter = num;
    
            console.log(num, '+',  counter);
        });
//console.log('here');

            $(".crystals").append(crystal);


        }
newGame();

    //when clicking any crystal, it should add with the previous result
   /* $(".crystalImg").on('click', function () {

        var num = parseInt($(this).attr('data-random'));
        
        var counter = num;

        console.log(num, '+',  counter);
    })*/
    
    //creating a function that generates numerical values for each crystal
    // function newCrystals () {
    //     var numbers = []
    //         while (numbers.length < 4); {
    //             var computerNumber = Math.floor(Math.random()*12)
    //             var found = false;
               
    //             //each round continues until the player's number equals the computerNumber
    //             for (var i = 0; i < numbers.length; i++) {
    //                 if (numbers[i] === computerNumber) {
    //                     found = true; 
    //                     break;
    //                 }
    //             }
    //             if(!found)numbers[numbers.length]=computerNumber;
    //         }
    //     console.log(numbers);

    //     for (i = 0; i < numbers.length; i++) {
    //         var imageCrystal = $('<img>');
    //         imageCrystal.attr('data-random', numbers[i]);
    //         imageCrystal.attr('src', crystals[i]);
    //         imageCrystal.attr('alt', 'crystals');
    //         imageCrystal.addClass('crystalImg');
    //         $('#crystals').append(imageCrystal);
    //     }

    //     //4 crystals generating random values between 1 and 12
    //     for (var i = 0; i < 4; i++) {
            
    //         var random = Math.floor(Math.random() * 11) + 1;
            
    //         var crystal = $("<img>");
    //             crystal.attr({
    //                 "class": "crystal",
    //                 "data-random": random
    //         });
    //             $(".crystals").append(crystal);
    //         }
    // }

    function newGame() {
        //after each round, the value of counter goes back to 0
        counter = 0;
        $('#status').text(counter);

        //when clicking any crystal, it should add with the previous result
        $("#crystalImg").on('click', function () {

            var num = parseInt($(this).attr('data-random'));
            
            var counter = num;

            $('#status').html(num, '+',  counter);
        })
        
        //adding onto previous number
        $('.crystals').on('click', function() {
            counter = counter + parseInt($(this).data('num'));

            $('#status').text(counter);

            //when the player's number and the computerAnswer matches,
            if (counter === computerAnswer) {
            
                $('#status').text('You won!');
                
                //the number of Wins gies up by 1
                wins ++;
                $('#win').text(wins);
                console.log(wins)
                
                //reset to a new round
                $('#crystalImg').empty();
                newCrystals();
                newGame;

            //when the player's number goes over the computerAnswer, 
            } else if (counter > computerAnswer) {
                
                $('#status').text('You lost!')
                
                //the number of Losses goes up by 1
                losses ++;
                $('#loss').text(losses);
                console.log(losses)
                
                //reset to a new round 
                $('#crystalImg').empty();
                newCrystals();
                newGame();
            }
        });
    }
});




// //randomly generating computerNumber that is between 19 and 120
// computerNumber = Math.floor(Math.random() * 101 ) + 19;
// $("#computerNumber").html('Number to Guess: ' + computerNumber);

// //4 crystals generating random values between 1 and 12
// for (var i = 0; i < 4; i++) {
    
//     var random = Math.floor(Math.random() * 11) + 1;
    
//     var crystal = $("<img>");
//         crystal.attr({
//             "class": "crystal",
//             "data-random": random
//     });
//         $(".crystals").append(crystal);
//     }

// //when clicking any crystal, it should add with the previous result
// $("#crystalImg").on('click', function () {

//     var num = parseInt($(this).attr('data-random'));
    
//     var counter = num;

//     console.log(num, '+',  counter);
// })