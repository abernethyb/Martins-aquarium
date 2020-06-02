/*
Responsible for generating a list of tips HTML
representations, and putting in the browser
*/

const tipsList = () => {
    // Iterate the collection of quore objects
    for (const currentTipsObject of tipsCollection) {

        // Convert the current tips to its HTML representation
        const tipsHTML = tipsConverter(currentTipsObject)

        // Find the <article> element in index.html
        const tipsArticleElement = document.querySelector(".tipList")

        // Put the tips HTML representation inside the <article> element
        tipsArticleElement.innerHTML += tipsHTML
    }
}