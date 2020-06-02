/*
    This function will convert a single locations object to an
    HTML representation and return it
*/
const locationsConverter = (locationsObject) => {

    const locationsHTMLRepresentation = `<section class="locations">
        <div class="">
            <img class="location__picture" src="${locationsObject.image}"
                alt="${locationsObject.name}" />
        </div>
        <div class="location__details">
            
                <p> The place: ${locationsObject.name}. What's the weather like? ${locationsObject.climate}. When your harvesting here, here's all the regulations you'll need to be aware of: ${locationsObject.regulations}. Be sure to bring ${locationsObject.gear} gear with you while you're harvesting here. Oh, and my advice to you while you're here: ${locationsObject.remarks}</p>
            
        </div>
    </section>`

    return locationsHTMLRepresentation

}