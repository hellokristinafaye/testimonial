console.log("not like us");

let userTexts = document.getElementsByClassName('user-text');
let userPics = document.getElementsByClassName('user-pic');

function showReview() {
    for (userPic of userPics) {
        userPic.classList.remove('active-pic');
    }
    for (userText of userTexts) { 
        userText.classList.remove('active-text');
    }
    let i = Array.from(userPics).indexOf(event.target);

    userPics[i].classList.add('active-pic');
    userTexts[i].classList.add('active-text');
    // great it works! had the wrong class for text, it said pic instead. So it wasn't event at all.  So thanks Reddit?  they were actually right lol
}