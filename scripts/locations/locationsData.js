let locationsCollection = []

//getting data from json server

const getLocationData = () => {
    return fetch("http://localhost:8088/locations").then(
        (response) => {
            return response.json()
        }
    )
    .then(
        (arrayOfLocations) => {
            locationsCollection = arrayOfLocations
        }
    )
}