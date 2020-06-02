/*
Responsible for generating a list of quotes HTML
representations, and putting in the browser
*/

const quotesList = () => {
    // Iterate the collection of quore objects
    for (const currentQuotesObject of quotesCollection) {

        // Convert the current quotes to its HTML representation
        const quotesHTML = quotesConverter(currentQuotesObject)

        // Find the <article> element in index.html
        const quotesArticleElement = document.querySelector(".quoteList")

        // Put the quotes HTML representation inside the <article> element
        quotesArticleElement.innerHTML += quotesHTML
    }
}