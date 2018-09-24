let slideIndex = 0;
carousel(); //This creates the "room" for the slideshow

function carousel() { //this is when you put stuff into the room
    let i;
    let x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 3000); // Changes image every 3 seconds
}