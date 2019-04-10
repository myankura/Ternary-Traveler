import apiManager from "./apiManager.js"
import domManager from "./apiManager.js"
import placesDomMan from "./places/placesDomManager.js"
//Test api call by getting all places
apiManager.allDataByKey("places").then(placesArray => {
    console.table(placesArray)
});

//fetches all interests
apiManager.allDataByKey("interests").then(interestsArray => {
    console.table(interestsArray)
});

//fetches a single key from the api by the id of the item in the array
apiManager.dataById("interests", "1").then(interestsData => {
    console.log(interestsData)
});

placesDomMan.listAllPOI();