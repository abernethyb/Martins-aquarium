/*
    This function will convert a single quote object to an
    HTML representation and return it
*/


const quotesConverter = (quotesObject) => {

    const quotesHTMLRepresentation = `<section class="quote">
            
                <p>"${quotesObject.words}" -${quotesObject.author}.</p>
            
        </div>
    </section>`

    return quotesHTMLRepresentation

}