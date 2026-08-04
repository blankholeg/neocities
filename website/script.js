function pageAssignment(pagename = "not_found") {
    window.location.assign(pagename+".html")
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}