import apiManager from "./apiManager";

export default {
    handleSave: () => {
        console.log("save button clicked")
    },
    handleDelete: () => {
        console.log("delete button clicked")
    },
    handleEdit: () => {
        console.log("edit button clicked")
    }
}








// export default {
//     handleSave: () => {
//         console.log("Save button clicked!!")
//         //target each field by Id
//         let eventsSection = document.getElementById("childEventsArticle")
//         let eventName = document.getElementById("eventName")
//         let eventDate = document.getElementById("eventDate")
//         let eventLocation = document.getElementById("eventLocation")

//         //create a new event object
//         let newEvent = {
//             eventName: eventName.value,
//             eventDate: eventDate.value,
//             eventLocation: eventLocation.value
//         }
//         //push newly created event to API
//         console.log(newEvent)
//         apiManager.postAll("events", newEvent)
//         .then(() => {
//             //clears eventsSection
//             HtmlBuilder.clearElement(eventsSection)
//             //after eventsSection is cleared refresh with new list
//             eventsDom.listAllEvents()
//         })
//     }