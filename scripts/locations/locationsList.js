/*
Responsible for generating a list of location HTML
representations, and putting in the browser
*/

const locationsList = () => {
    // Iterate the collection of location objects
    for (const currentLocationsObject of locationsCollection) {

        // Convert the current locations to its HTML representation
        const locationsHTML = locationsConverter(currentLocationsObject)

        // Find the <article> element in index.html
        const locationsArticleElement = document.querySelector(".locationsList")

        // Put the locations HTML representation inside the <article> element
        locationsArticleElement.innerHTML += locationsHTML
    }
}