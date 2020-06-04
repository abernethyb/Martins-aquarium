
let fishCollection = []




//getting data from json server

const getFishData = () => {
    return fetch("http://localhost:8088/fish").then(
        (response) => {
            return response.json()
        }
    )
    .then(
        (arrayOfFish) => {
            fishCollection = arrayOfFish
        }
    )
}










const mostHolyFish = (fishies) => {
    const holyFish = []

    for (const holy of fishies) {
        if (holy.length % 3 === 0){
            holyFish.push(holy)
        }
        
    }
    return holyFish
}

const mostAcceptableFish = (fishies) => {
    const acceptableFish = []

    for (const acceptable of fishies) {
        if (acceptable.length % 5 === 0 && acceptable.length % 3 !== 0){
            acceptableFish.push(acceptable)
        }
        
    }
    return acceptableFish
}

const crappie = (fishies) => {
    const crappie = []

    for (const crap of fishies) {
        if (crap.length % 5 !== 0 && crap.length % 3 !== 0){
            crappie.push(crap)
        }
        
    }
    return crappie
}