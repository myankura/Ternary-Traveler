import domManager from "../domManager.js"
import apiManager from "../apiManager.js"

export default {
    //runs through a loop through all of the places in API and appends to the DOM
    listAllPOI() {
        //targets the places--section by id from index.html
        let childPOI = document.getElementById("places--section");
        domManager.clearElement(childPOI);
        apiManager.allDataByKey("interests")
            .then(interests => interests.forEach(interest => {
                console.log("interestsArray: ", interests)
                //targets interests by id and returns the name of the interest and then appends to the DOM.
                childPOI.appendChild(domManager.elementBuilder("h3", `interestName--${interest.id}`,`POI: ${interest.name}`))

                //targets interests by id and returns the description of the POI and then appends to the DOM
                childPOI.appendChild(domManager.elementBuilder("article", `interestDescription--${interest.id}`, `Description: ${interest.description}`))

                //targets interests by id and returns the cost to visit the POI and then appends to the DOM
                childPOI.appendChild(domManager.elementBuilder("p", `interestCost--${interest.id}`, `Cost to visit: $${interest.cost}`))

                //targets interests by id and returns the review of the POI and then appends to the DOM
                childPOI.appendChild(domManager.elementBuilder("p", `interestReview--${interest.id}`, `Review: ${interest.review}`))
                //create a button for deleting a interest from API
                let deleteFormButton = childPOI.appendChild(domManager.elementBuilder("button", `placeToDelete--${interest.id}`, "Delete POI", "Delete"))
                //create a button for editing a interest in the API
                let editFormButton = childPOI.appendChild(domManager.elementBuilder("button", `placeToEdit--${interest.id}`, "Edit POI", "Edit"))
            }))
        }
    }