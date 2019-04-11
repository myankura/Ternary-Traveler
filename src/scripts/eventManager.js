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
        //Push data to API
        console.log(newInterest)
        apiManager.postAllData("interests",  newInterest)
        .then(() => {
            //clears places--section
            domManager.clearElement(placesSection)
            //after places--section has been cleared refresh the data on DOM
            placesDom.listAllPOI();
        })

    },
    handleDelete: () => {
        console.log("delete button clicked")

    },
    handleEdit: () => {
        console.log("edit button clicked")
    }
}