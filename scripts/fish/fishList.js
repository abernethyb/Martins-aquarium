/*
Responsible for generating a list of fish HTML
representations, and putting in the browser
*/

//to display holy fish
const fishTypeDropdown = document.querySelector(".typeChoice")

const soldierTarget = document.querySelector(".acceptableFish")
const crappieTarget = document.querySelector(".crappie")
const holyTarget = document.querySelector(".holyFish")

const clearSoldier = () => soldierTarget.innerHTML = ""
const clearCrappie = () => crappieTarget.innerHTML = ""
const clearHoly = () => holyTarget.innerHTML = ""

fishTypeDropdown.addEventListener("change", clickEvent => {
    // Get the value of the option chosen by the user
    const userChoice = clickEvent.target.value

    // If the user chose Holy, clear the list and only show holy fish
    if (userChoice === "holy") {
        clearSoldier()
        clearCrappie()
        clearHoly()
        showHolyFish()
    } else if (userChoice === "soldier") {
        clearSoldier()
        clearCrappie()
        clearHoly()
        showAcceptableFish()
    } else if (userChoice === "plebs") {
        clearSoldier()
        clearCrappie()
        clearHoly()
        showCrappie()
    } else {
        clearSoldier()
        clearCrappie()
        clearHoly()
        showHolyFish()
        showAcceptableFish()
        showCrappie()
    }
})











// Function to show holy fish in the browser
const showHolyFish = () => {
    const fishObjectsArray = mostHolyFish(fishCollection)

    for (const currentFishObject of fishObjectsArray) {
        const fishHTML = fishConverter(currentFishObject)
        const fishArticleElement = document.querySelector(".holyFish")
        fishArticleElement.innerHTML += fishHTML
    }
}

// Function to show acceptable fish in the browser
const showAcceptableFish = () => {
    const fishObjectsArray = mostAcceptableFish(fishCollection)

    for (const currentFishObject of fishObjectsArray) {
        const fishHTML = fishConverter(currentFishObject)
        const fishArticleElement = document.querySelector(".acceptableFish")
        fishArticleElement.innerHTML += fishHTML
    }
}
const showCrappie = () => {
    const fishObjectsArray = crappie(fishCollection)

    for (const currentFishObject of fishObjectsArray) {
        const fishHTML = fishConverter(currentFishObject)
        const fishArticleElement = document.querySelector(".crappie")
        fishArticleElement.innerHTML += fishHTML
    }
}

/*
const fishList = () => {
    // Iterate the collection of fish objects
    for (const currentFishObject of fishCollection) {

        // Convert the current fish to its HTML representation
        const fishHTML = fishConverter(currentFishObject)

        // Find the <article> element in index.html
        const fishArticleElement = document.querySelector(".fishList")

        // Put the fish HTML representation inside the <article> element
        fishArticleElement.innerHTML += fishHTML
    }
}

*/

const fishList = () => {
    // Invoke all three functions here
    showHolyFish()
    showAcceptableFish()
    showCrappie()
   // showAcceptableFish()
}
