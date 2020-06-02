/*
    This function will convert a single tip object to an
    HTML representation and return it
*/


const tipsConverter = (tipsObject) => {

    const tipsHTMLRepresentation = `<section class="tip">
            
                <p>"${tipsObject.words}" -${tipsObject.author}.</p>
            
        </div>
    </section>`

    return tipsHTMLRepresentation

}