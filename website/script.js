function pageAssignment(pagename = "not_found") {
    if (pagename == "aboutme" && randomInteger(1, 50) == 1) {
        window.location.assign("mysteryroom.html");
        return;
    } 
    window.location.assign(pagename+".html");
}

function goBackButton() {
    document.querySelector("body").innerHTML += `<button class="backButton" onclick="pageAssignment('index')">Back to Cards</button>`
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}