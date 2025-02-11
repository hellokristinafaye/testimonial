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
}