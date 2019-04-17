const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(e => e.json())
  },
  getAll(resource) {
    return fetch(`${remoteURL}/${resource}`).then(e => e.json())
  },
  deleteItem(resource, id) {
    return fetch(`http://localhost:5002/${resource}/${id}`, {
        method: "DELETE"
    })
    .then(e => e.json())
  }
}