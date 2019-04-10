const apiUrl = "http://localhost:8088"

export default {
    allDataByKey: (key) => {
        return fetch(`${apiUrl}/${key}`)
            .then(response => response.json());
    },
    dataById: (key, objectId) => {
        return fetch(`${apiUrl}/${key}/${objectId}`)
            .then(response => response.json())
    }
}
