const apiUrl = "http://localhost:8088"

export default {
    allDataByKey: (key) => {
        return fetch(`${apiUrl}/${key}`)
            .then(response => response.json());
    },
    dataById: (key, objectId) => {
        return fetch(`${apiUrl}/${key}/${objectId}`)
            .then(response => response.json())
    },
    postAllData: (key, objectId) => {

        return fetch(`${apiUrl}/${key}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(objectId)
        })
    },

    delFetch: (key, itemId) => {
        return fetch(`${apiUrl}/${key}/${itemId}`, {
            method: "DELETE",
        })
    },
}
