var numberofDurm = document.querySelectorAll(".drum").length;

for(var i=0 ; i<numberofDurm ; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHtml = this.innerHTML;
        makeSound (buttonInnerHtml)
    });
}

document.addEventListener("keypress",function(event)
{
    makeSound(event.key);
});

function makeSound(key){
    switch(key){
        case "a": 
        var sound1 = new Audio("crash.mp3");
        sound1.play();
        break;
        case "s":
            var sound2 = new Audio("kick-bass.mp3");
            sound2.play();
            break;

        case "d":
            var sound3 = new Audio("snare.mp3");
            sound3.play();
            break;

        case "f":
            var sound4 = new Audio("tom-1.mp3");
            sound4.play();
            break;

        case "j":
            var sound5 = new Audio("tom-2.mp3");
            sound5.play();
            break;

        case "k":
            var sound6 = new Audio("tom-3.mp3");
            sound6.play();
            break;

        case "l":
            var sound7 = new Audio("tom-4.mp3");
            sound7.play();
            break;

        default:
            alert("Use the keywords below");
            break;
    }
}