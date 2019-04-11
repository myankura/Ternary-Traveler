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
        console.log(event)
        console.log("delete button clicked")
a

    },
    handleEdit: () => {
        console.log("edit button clicked")
    }
}

// handleDelete: () => {
//     console.log(event)
//     console.log("Delete button clicked!!", event.target.id.split("--")[1])
//     let eventId = event.target.id.split("--")[1];
//     apiManager.delFetch("events", eventId).then(() =>  eventsDom.listAllEvents());
// }