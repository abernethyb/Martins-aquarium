let quotesCollection = []

//getting data from json server

const getQuoteData = () => {
    return fetch("http://localhost:8088/quotes").then(
        (response) => {
            return response.json()
        }
    )
    .then(
        (arrayOfQuotes) => {
            quotesCollection = arrayOfQuotes
        }
    )
}

const quoteVisibilityButton = document.querySelector(".toggleQuotes")

quoteVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".quoteList").classList.toggle("hidden")
})