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

// I LOVE GAMBLING :speaking_head:
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


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


function characterFolder(character) {
    let pageBody = document.querySelector("body")
    let mainBody = document.createElement("div")
    let content = document.createElement("div")

    mainBody.id = "folder"
    content.className = "content"
    pageBody.appendChild(mainBody)
    mainBody.appendChild(content)

    // Content Changing Buttons
    let buttonTexts = ["Information", "Gallery", "Relations"]
    let currentActiveButton = null;
    for (let i = 0; i<=2; i++) {
        let button = document.createElement("button")
        button.style.top = i*120+"px"
        button.innerText = buttonTexts[i]
        mainBody.appendChild(button)
        button.className = "off"
        if (i == 0) {
            activateThisButton(button)

            setSectionInformation()
        }
    }

    let buttons = mainBody.getElementsByTagName("button")
    for (let button of buttons) {
        button.addEventListener("click", () => {
            activateThisButton(button)

            content.innerHTML = ""
            switch (button.innerText) {
                case "Information":
                    setSectionInformation()
                    break
            }
        })
    }
    function setSectionInformation() {
        let header = document.createElement("h1")
        content.appendChild(header)
        header.innerText = character.Name

        let table = document.createElement("table")
        table.className = "infobox"
        content.appendChild(table)

        let imageheader = document.createElement("tr")
        imageheader.className = "image"
        table.appendChild(imageheader)
        let th1 = document.createElement("th")
        th1.setAttribute("colspan", 2)
        imageheader.appendChild(th1)
        let img = document.createElement("img")
        img.src = character.imgsrc
        th1.appendChild(img)

        infoboxRows = ["Name", "Alias", "Age", "Gender", "Species", "Residence"]
        for (i in infoboxRows) {
            let tableRow = document.createElement("tr")
            table.appendChild(tableRow)
            let infoType = document.createElement("th")
            tableRow.appendChild(infoType)
            infoType.innerHTML = infoboxRows[i]
            let info = document.createElement("td")
            tableRow.appendChild(info)
            info.innerHTML = character[infoboxRows[i]]
        }

        let introductionParagraph  = document.createElement("p")
        content.appendChild(introductionParagraph)
        introductionParagraph.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni at optio, cupiditate libero quis minima distinctio id, quidem, esse fugit officiis error eius autem ex delectus quas nostrum voluptas eveniet."

    }
    function activateThisButton(button) {
        if (currentActiveButton) {
            currentActiveButton.removeAttribute("disabled")
            currentActiveButton.className = "off"
        }  

        button.setAttribute("disabled", true)
        button.className = "on"
        currentActiveButton = button
    }
    // Content


    

    focus(mainBody, 2)
}