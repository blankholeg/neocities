// This Is just An Easy Way To Change To The Pages. Nothing Special I Just Like The Shorter Name.
function pageAssignment(pagename = "not_found") {
    if ((pagename == "charapedia" || pagename == "index") && randomInteger(1, 50) == 1) {
        window.location.assign("secrets/mysteryroom.html");
        return;
    } 
    window.location.assign(pagename+".html");
}

// Button To Go Back To The Cards Thingie 
function goBackButton() {
    let button = document.createElement("button")
    button.className = "backButton"
    button.onclick = () => {pageAssignment("index")}
    button.innerHTML = "Back to Cards"

    document.querySelector("body").appendChild(button)
}

// I LOVE GAMBLING :speaking_head:
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// This Makes The Entire Screen Darker Except For The Given HTML Element (Parameter 1), The Second Parameter Is In Case The zIndex Is Already Used Somewhere Else On The Page
function focus(item, zIndex = 1) {
    item.style.zIndex = zIndex+1

    let shadow = document.createElement("div")
    shadow.style.zIndex = zIndex 
    shadow.id = "backgroundShadow"
    
    // Clicking On The Background Leaves The Currently Focused Thing
    shadow.addEventListener("click", () => {
        document.querySelector("body").removeChild(item)
        unfocus()
    })

    document.querySelector("body").appendChild(shadow)
}

function unfocus(item = null, originalZIndex = null) {
    document.querySelector("body").removeChild(document.querySelector("#backgroundShadow"))

    if (!item) return
    item.style.zIndex = originalZIndex
}

// This Is For Character Showing On Charapedia Pages
function characterFolder(charactername) {
    let body = document.querySelector("body")

    // Background of the folder
    let mainBody = document.createElement("div")
    mainBody.id = "folder"

    // Section Buttons
    let buttonTexts = ["Information", "Gallery", "Relations"]
    let currentActiveButton = null;
    for (let i = 0; i<=2; i++) {
        let button = document.createElement("button")
        button.style.top = i*120+"px"
        button.innerText = buttonTexts[i]
        mainBody.appendChild(button)
        button.className = "off"
        if (i == 0) {
            button.setAttribute("disabled", true)
            button.className = "on"

            currentActiveButton = button
        }
    }

    let buttons = mainBody.getElementsByTagName("button")
    for (let button of buttons) {
        button.addEventListener("click", () => {
            currentActiveButton.removeAttribute("disabled")
            currentActiveButton.className = "off"

            button.setAttribute("disabled", true)
            button.className = "on"
            currentActiveButton = button
        })
    }

    // Content

    let content = document.createElement("div")
    mainBody.appendChild(content)

    
    body.appendChild(mainBody)
    focus(mainBody, 2)
}