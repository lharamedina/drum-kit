$(document).ready(function () {
    // Add click event listeners
    $(".drum").on("click", function () {
        let buttonInnerHTML = $(this).text();
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

    // Add keypress event listener
    $(document).on("keypress", function (event) {
        makeSound(event.key);
        buttonAnimation(event.key);
    });

    function makeSound(key) {
        switch (key) {
            case "a":
                new Audio("assets/sounds/crash.mp3").play();
                break;
            case "w":
                new Audio("assets/sounds/tom-1.mp3").play();
                break;
            case "d":
                new Audio('assets/sounds/tom-2.mp3').play();
                break;
            case "l":
                new Audio('assets/sounds/ride.mp3').play();
                break;
            case "s":
                new Audio('assets/sounds/snare.mp3').play();
                break;
            case "j":
                new Audio('assets/sounds/bass.mp3').play();
                break;
            case "k":
                new Audio('assets/sounds/tom-3.mp3').play();
                break;
            default:
                console.log(key);
        }
    }

    function buttonAnimation(currentKey) {
        let activeButton = $("." + currentKey);
        activeButton.addClass("pressed");
        setTimeout(function () {
            activeButton.removeClass("pressed");
        }, 100);
    }
});
