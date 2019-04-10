const apiUrl = "http://localhost:8088"

export default {
    allPlaces: (key) => {
        return fetch(`${apiUrl}/${key}`)
            .then(response => response.json());
    }
}