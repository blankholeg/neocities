function pageAssignment(pagename = "not_found") {
    if ((pagename == "charapedia" || pagename == "index") && randomInteger(1, 50) == 1) {
        window.location.assign("secrets/mysteryroom.html");
        return;
    } 
    window.location.assign(pagename+".html");
}

function goBackButton() {
    let button = document.createElement("button")
    button.className = "backButton"
    button.onclick = () => {pageAssignment("index")}
    button.innerHTML = "Back to Cards"

    document.querySelector("body").appendChild(button)
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function focus(item) {
    item.style.zIndex = 2

    let shadow = document.createElement("div")
    shadow.style.minHeight = "100vh"
    shadow.style.minWidth = "100vw"
    shadow.style.position = "absolute"
    shadow.style.backgroundColor = "#00000060"
    shadow.style.zIndex = 1
    shadow.id = "backgroundShadow"
    
    if (item.id == "popUp") {
        shadow.onclick = () => {
            document.querySelector("body").removeChild(item)
            unfocus()
        }
    }

    document.querySelector("body").appendChild(shadow)
}

function unfocus(item = null, originalZIndex = null) {
    document.querySelector("body").removeChild(document.querySelector("#backgroundShadow"))

    if (!item) return
    item.style.zIndex = originalZIndex
}

function popUp(text) {
    let body = document.querySelector("body")
    let popUp = document.createElement("div")
    popUp.style.height = "800px"
    popUp.style.width = "900px"
    popUp.style.overflow = "auto"
    popUp.style.position = "absolute"
    popUp.style.bottom = "calc(50% - 400px);"
    popUp.style.left = "calc(50% - 450px);"
    popUp.style.backgroundColor = "#003060"
    popUp.id = "popUp"

    body.appendChild(popUp)
    focus(popUp)
}