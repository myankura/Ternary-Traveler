import domManager from "../domManager.js"

export default {
    addPlaceForm() {
        let formContainer = document.getElementById("places--form");

        formContainer.appendChild(domManager.elementBuilder("h3", undefined, "Enter a new POI below"))
        //name, description, cost, review
        //create a label and input field for the POI name
        formContainer.appendChild(domManager.elementBuilder("label", undefined, "POI Name: ", undefined))
        let nameInput = formContainer.appendChild(domManager.elementBuilder("input", "placeName"))
        nameInput.placeholder = "Please enter a POI"

        //create a label and input field for the POI description
        formContainer.appendChild(domManager.elementBuilder("label", undefined, "Description: "))
        let descriptionInput = formContainer.appendChild(domManager.elementBuilder("textarea", "placeDescription"))
        descriptionInput.placeholder = "Please enter a description"

        //create a label and input field for the POI cost to visit
        formContainer.appendChild(domManager.elementBuilder("label", undefined, "Cost to visit: ", undefined))
        let costInput = formContainer.appendChild(domManager.elementBuilder("input", "placeCost"))
        costInput.placeholder = "Please enter the cost to visit"

        //create a label and input field for the POI review
        formContainer.appendChild(domManager.elementBuilder("label", undefined, "Review: ", undefined))
        let reviewInput = formContainer.appendChild(domManager.elementBuilder("textarea", "placeReview"))
        reviewInput.placeholder = "Please enter a review"

        //create a save button to save input passed through by user
        formContainer.appendChild(domManager.elementBuilder("button", "placeToSave", "Save POI"))
    }
}