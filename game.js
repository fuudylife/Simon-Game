var userClickedPattern = [];

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}

$(".btn").click(function() {
    var userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
});

function playSound(name) {
    switch (name) {
        case "blue":
            var blue = new Audio("sounds/blue.mp3");
                blue.play();
            break;

        case "green":
            var green = new Audio("sounds/green.mp3");
                green.play();
            break;

        case "red":
            var red = new Audio("sounds/red.mp3");
                red.play();
            break;

        case "yellow":
            var yellow = new Audio("sounds/yellow.mp3");
                yellow.play();
            break;

        default:
            console.log(randomChosenColour);
            break;
    }
}

function animatePress() {
    $(".btn").on("click", function() {
        $(this).addClass("pressed");
    setTimeout(function() {
        $(".btn").removeClass("pressed");
    }, 100);
    });
}

var startedToggle = true;

$(document).on("keydown", function() {
    if (startedToggle) {
        nextSequence();
        startedToggle = false;
    }
});
