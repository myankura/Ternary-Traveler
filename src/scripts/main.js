import apiManager from "./apiManager.js"
//Test api call by getting all places
apiManager.allPlaces("places").then(placesArray => {
    console.table(placesArray)
});

// fetch("http://localhost:8088/food")
//     .then(foods => foods.json())
//     .then(parsedFoods => {
//         console.table(parsedFoods)
//     })