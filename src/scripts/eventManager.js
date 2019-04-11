import apiManager from "./apiManager.js";
import domManager from "./domManager.js"
import placesDom from "./places/placesDomManager.js"

export default {
    handleSave: () => {
        console.log("save button clicked")
        //target each field by Id
        let placesSection = document.getElementById("places--section")
        let placeName = document.getElementById("placeName")
        let placeDescription = document.getElementById("placeDescription")
        let placeCost = document.getElementById("placeCost")
        // let placeLocation = document.getElementById("places--select")
        //create a new event object
        let newInterest = {
            name: placeName.value,
            description: placeDescription.value,
            cost: placeCost.value
        }
        //Push data to API via save button
        console.log(newInterest)
        apiManager.postAllData("interests",  newInterest)
        .then(() => {
            //clears places--section
            domManager.clearElement(placesSection)
            //after places--section has been cleared refresh the data on DOM
            placesDom.listAllPOI();
        })

    },
    //Delete data from the API via delete button
    handleDelete: () => {
        console.log(event)
        console.log("delete button clicked", event.target.id.split("--")[1])
        let interestId = event.target.id.split("--")[1];
        apiManager.delData("interests", interestId).then(() => placesDom.listAllPOI());

    },
    handleEdit: () => {
        console.log("edit button clicked")
    }
}