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
            <ul>
                <li>Location: ${locationsObject.name}</li>
                <li>Length: ${locationsObject.climate}</li>
                <li>Name: ${locationsObject.regulations}</li>
                <li>Location: ${locationsObject.gear}</li>
                <li>Food: ${locationsObject.remarks}</li>
            </ul>
        </div>
    </section>`

    return locationsHTMLRepresentation

}