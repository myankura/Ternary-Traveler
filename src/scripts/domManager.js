export default {
    //generic function to build elements as needed
    elementBuilder: (elementType, elementId, elementTextContent, elementValue) => {
        let htmlElement = document.createElement(elementType);
        //checks to see if the elementId parameter is being passed
        if (elementId) {
            htmlElement.setAttribute("id", elementId);
        }
        //checks to see if the elementValue parameter is being passed
        if (elementValue) {
            htmlElement.setAttribute("value", elementValue);
        }
        //builds out the text content of the element
        htmlElement.textContent = elementTextContent;
        return htmlElement;
    },
    //Function to create option elements
    buildOption: (optionValue, optionText) => {
        let optionElement = document.querySelector("#places--select");
        optionElement = document.createElement("option");
        optionElement.setAttribute("name", optionValue);
        optionElement.textContent = optionText;
        return optionElement;
    },
    //Function to clear the DOM when necessary
    clearElement: domElement => {
        while(domElement.firstChild) {
            domElement.removeChild(domElement.firstChild);
        }
    }
}